import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../containers/NavBar";
import { SideBar } from "../../containers/SideBar";
import { userServices } from "../../services";
import "./ChooseGroup.css";
import BeatLoader from "react-spinners/BeatLoader";
import axios from "axios";


interface User {
  username: string;
  displayname: any;
  phone: string;
  email: string;
  gender: string;
  id: number;
  e_time_start: string;
  l_time_start: string;
  status: string;
  role_string: string;
}

interface Group {
  date_of_founded: string;
  description: string;
  id: number;
  last_trip: string;
  name: string;
  period_of_existence: number;
  status: string;
  total_trips: number;
  userid: number;
}

interface Coordinate {
  description: string;
  detour: number;
  id: number;
  latitude: string;
  longitude: string;
  name: string;
  type: string;
  userid: number;
}

interface Vehicle {
  description: string;
  driver_license: string;
  id: number;
  license_expire_date: string;
  license_plate: string;
  license_start_date: string;
  seat: number;
  userid: number;
  vehicle_manufacturer: string;
  vehicle_type: string;
}

function GroupForm({ history }) {
  const [loading, setLoading] = useState(true);
  const [user, saveUser] = useState<null | User>(null);
  const [drivers, setDrivers] = useState<any | User>([]);
  const [passengers, setPassengers] = useState<any | User>([]);
  const [groups, setGroups] = useState<any | Group>([]);
  const [coordinates, setCoordinates] = useState<any | Coordinate>([]);
  const [vehicles, setVehicles] = useState<any | Vehicle>([]);
  const [isSubmitting, setSubmitting] = useState(false);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const chooseGroup = (id) => {
    setSubmitting(true);
    userServices.joinGroup(id,config)
    .then(() => history.push('/group'))
    .finally(() => setSubmitting(false))
  }

  useEffect(() => {
    const authenticate = () => {
      userServices
        .user(localStorage.getItem("username"), config)
        .then((res) => {
          if (res.role_string === "DRIVER") history.push("/create-group");
          setLoading(false);
          saveUser(res);
          return res;
        })
        .then((result) => {
          userServices.group(result.id, config).then((res) => {
            if (res) history.push('/group');
          });
          userServices
            .coordinate(result.id, config)
            .then((res) => {
              if (res && res.length > 0) {
                userServices.allGroups(config)
                  .then(res => {
                    if (res && res?.length) {
                      setGroups(res);
                    }
                  })
              }
              else {
                history.push('/passenger-profile')
              }
            });
        })
        .catch((err) => {
          localStorage.clear();
          history.push("/login");
        });
    };

    authenticate();
  }, []);

  useEffect(() => {
    if (groups.length > 0) {
      axios.all(groups.map(item => userServices.userId(item?.userid, config)))
        .then(axios.spread((...response) => {
          setDrivers(response)
        }))
      axios.all(groups.map(item => userServices.vehicle(item?.userid, config)))
        .then(axios.spread((...response) => {
          setVehicles(response)
        }))
      axios.all(groups.map(item => userServices.inGroup(item?.id, config)))
      .then(axios.spread((...response) => {
        setPassengers(response)
      }))
      axios.all(groups.map(item => userServices.coordinate(item?.id, config)))
      .then(axios.spread((...response) => {
        setCoordinates(response)
      }))
    }
  }, [groups])

  if (loading || !user || !groups[0] || !vehicles[0] || !drivers[0] || !passengers[0] || !coordinates[0]) {
    return (
      <div className="loading">
        <BeatLoader color="#123abc" loading={true} size={20} />
      </div>
    );
  }

  return (
    <>
    {isSubmitting && (
        <div className="loading-container">
          <div className="loading">
            <BeatLoader color="#123abc" loading={isSubmitting} size={20} />
          </div>
        </div>
      )}

      <NavBar></NavBar>
      <div className="container-fluid page-body-wrapper">
        <SideBar />
        <div className="container-fluid justify-content-center p-3 bg-light">
          <form className="justify-content-center rounded row">
            <section className="col-12 col-sm-12 col-md-8 rounded p-4">
              {/* <button type="button" className="btn btn-primary">Thông tin cá nhân</button> */}
              <h3 className="text-left pb-3">
                <button
                  type="button"
                  className="btn btn-primary rounded btn-block pb-3 text-left font-weight-bold"
                >
                  Find Ridesharing Group
            </button>
              </h3>

              <div className="form-group d-flex flex-column text-center text-align-center justify-content-center">
                <div className="border">
                  <h4 className="p-2">Group Information</h4>
                  <div className="text-gray pb-3">{groups?.length} Ridesharing Group</div>

                  <button
                    type="submit"
                    className="btn btn-pill btn-primary rounded mx-auto font-weight-bold mb-3"
                  >
                    Find Ridesharing Group!
              </button>
                </div>
                <h4 className="pt-3">Suitable Groups</h4>
                <div className="d-flex groups m-auto">
                  <div className="d-flex flex-column m-auto">
                    {
                      groups.map((item, index) => (
                        <div>
                          <div className="card card-group">
                            <div className="additional">
                              <div className="user-card">
                                <div className="level center">Information</div>
                                {/* <div className="points center">100m detour</div> */}
                                <img
                                  className="rounded-circle pb-2 pt-3"
                                  src="/images/faces/face2.jpg"
                                />
                                <div className="d-flex flex-column align-items-center text-center center">
                                  <span className="font-weight-bold">{drivers[index].displayname}</span>
                                  <span className="pb-2 font-weight-bold">Driver</span>
                                  <span className="text-50">{drivers[index].gender}</span>

                                  <span className="text-50">(+84) {drivers[index].phone}</span>
                                  <span className="text-50">{vehicles[index].vehicle_manufacturer}</span>
                                  <span className="text-50">{vehicles[index].license_plate}</span>
                                </div>
                              </div>
                              <div className="more-info">
                                <h3 className="py-2">Group Detail</h3>
                                <div className="coords">
                                  <span>
                                    Description: {item.description}
                                  </span>
                                </div>
                                <div className="coords">
                                  <span className="text-left">Member:</span>
                                  {
                                    passengers[index].map(i => 
                                      <span>{i.displayname}</span>
                                      )
                                  }
                                </div>
                                <div className="stats">
                                  <div>
                                    <div className="title">Seats</div>
                                    <i className="fas fa-user-plus p-1"></i>{" "}
                                    <div className="value">{vehicles[index].seat}</div>
                                  </div>
                                  <div>
                                    <div className="title">Member</div>
                                    <i className="fas fa-user-friends p-1"></i>{" "}
                                    <div className="value">{passengers[index].length}/{vehicles[index].seat}</div>
                                  </div>
                                  <div>
                                    <div className="title">Type</div>
                                    <i className="fas fa-car p-1"></i>{" "}
                                    <div className="value">{vehicles[index].vehicle_type}</div>
                                  </div>
                                  <div>
                                    <div className="title">Restrict</div>
                                    {/* <i className="fas fa-do-not-enter"></i> */}
                                    <i className="fas fa-times p-1"></i>
                                    <div className="value">0</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="general text-black ">
                              <h3 className="pb-2">GROUP {index+1}</h3>
                              <span className="pt-5 text-left">
                                <p>Start location: {coordinates[index][0]?.name}</p>
                                <p>Finish location: {coordinates[index][1]?.name}</p>
                                <p>Time start: {drivers[index].e_time_start}</p>
                                <p>Detour Start location: {coordinates[index][0]?.detour}km</p>
                                <p>Detour Finish location: {coordinates[index][1]?.detour}km</p>
                                <p>Available Seats: {vehicles[index].seat}</p>
                              </span>

                              {/* <span className="more">Mouse over the card for more info</span> */}
                            </div>
                            {/* </div> */}
                          </div>
                          <button
                            className="btn btn-success profile-button mb-3 p-2 mx-5"
                            type="button"
                            onClick={() => chooseGroup(item.id)}
                          >
                            Choose Group
                          </button>
                        </div>
                      ))
                    }
                  </div>

                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}

export default GroupForm;
