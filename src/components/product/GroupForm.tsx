import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../containers/NavBar";
import { SideBar } from "../../containers/SideBar";
import { driverServices, userServices } from "../../services";
import GroupMember from "./GroupMember";
import BeatLoader from "react-spinners/BeatLoader";
import { setupMaster } from "cluster";


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
  const [group, setGroup] = useState<null | Group>(null);
  const [startCoor, setStartCoor] = useState<null | Coordinate>(null);
  const [finishCoor, setFinishCoor] = useState<null | Coordinate>(null);
  const [vehicle, saveVehicle] = useState<any | Vehicle>(null);
  const [passengers, setPassengers] = useState<any | User>([]);
  const [driver, setDriver] = useState<any | User>(null);
  const [isSubmitting, setSubmitting] = useState(false);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const authenticate = () => {
    userServices
      .user(localStorage.getItem("username"), config)
      .then((res) => {
        setLoading(false);
        saveUser(res);
        return res;
      })
      .then((result) => {
        userServices.group(result.id, config).then((res) => {
          if (res) {
            setGroup(res);
            setLoading(false);
          }
          else {
            if (result.role_string === "DRIVER") history.push("/create-group");
            else history.push("/find-group");
          }
          userServices.vehicle(res.userid, config).then((res) => saveVehicle(res));
        });

        userServices
          .coordinate(result.id, config)
          .then((res) => {
            if (res && res.length > 0) {
              const startInfo = res.filter(item => item?.type === 'origin')[0]
              setStartCoor(startInfo)
              const finishInfo = res.filter(item => item?.type === 'destination')[0]
              setFinishCoor(finishInfo)
            }
          });
      })
      .catch((err) => {
        localStorage.clear();
        history.push("/login");
      })
      .finally(() => setSubmitting(false));
  };

  useEffect(() => {
    setTimeout(authenticate, 3000)
  }, []);

  useEffect(() => {
    const getPassenger = () => {
      userServices.inGroup(group?.id, config)
        .then((res) => setPassengers(res));
      userServices.userId(group?.userid, config)
        .then((res) => setDriver(res))
    }
    if (group) getPassenger();
  }, [group])

  const handlePostpone = () => {
    setSubmitting(true);
    const params = {
      status: user?.status === 'available' ? 'unavailable' : 'available'
    }
    userServices.updateUser(localStorage.getItem('password'), params, config)
      .then((result) => {
        saveUser(result)
        userServices.inGroup(group?.id, config)
          .then((res) => setPassengers(res));
        userServices.userId(group?.userid, config)
          .then((res) => setDriver(res))
        setSubmitting(false)
      })
  }

  const handleLeave = () => {
    setSubmitting(true);
    if (user?.role_string === 'DRIVER') {
      driverServices.deleteGroup(group?.id, config)
        .then(() => {
          history.push('/create-group')
          setSubmitting(false);
        })
    } else {
      userServices.leaveGroup(group?.id, config)
        .then(() => {
          history.push('/find-group')
          setSubmitting(false);
        })
        .catch(err => console.log(err))
    }
  }

  if (loading || !user) {
    return (
      <div className="loading">
        <BeatLoader color="#123abc" loading={loading} size={20} />
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
          <div className="container-fluid justify-content-center p-3 bg-light">
            <form className="justify-content-center rounded row">
              <section className="col-12 col-sm-12 col-md-10 rounded">
                {/* <button type="button" className="btn btn-primary">Thông tin cá nhân</button> */}
                <h3 className="text-left pb-3" style={{ margin: "0 -14px" }}>
                  {
                    driver?.status !== 'available'
                      ? (
                        <div
                          className="btn btn-primary btn-danger rounded btn-block pb-3 text-left font-weight-bold"
                        >
                          Your Ridesharing Group (delayed)
                        </div>
                      )
                      : (
                        <div
                          className="btn btn-primary btn-warning rounded btn-block pb-3 text-left font-weight-bold"
                        >
                          Your Ridesharing Group
                        </div>
                      )
                  }
                </h3>
                <div className="form-group row text-center text-align-center my-auto">
                  <div className="col-12 h-100 text-success border font-weight-bold overflow-auto p-4 ">
                    {
                      passengers.map(item => {
                        if (item?.status !== 'available')
                          return (
                            <>
                              {item?.displayname} not going with group.<br />
                            </>
                          )
                      })
                    }
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 border p-3">
                    <div className="row pl-3 pb-2 font-weight-bold">
                      Group Information
                    </div>
                    <div className="row">
                      <label className="col-sm-4">Group Name:</label>
                      <div className="col-sm-8">{group?.name}</div>
                    </div>

                    <div className="row">
                      <label className="col-sm-4">Start time:</label>
                      <div className="col-sm-8">{user?.e_time_start}</div>
                    </div>
                    <div className="row">
                      <label className="col-sm-4">Start Location:</label>
                      <div className="col-sm-8">
                        {startCoor?.name}
                      </div>
                    </div>
                    <div className="row">
                      <label className="col-sm-4">Detail:</label>
                      <div className="col-sm-8">
                        {startCoor?.description}
                      </div>
                    </div>
                    <div className="row">
                      <label className="col-sm-4">Finish Location:</label>
                      <div className="col-sm-8">
                        {finishCoor?.name}
                      </div>
                    </div>
                    <div className="row">
                      <label className="col-sm-4">Detail:</label>
                      <div className="col-sm-8">
                        {finishCoor?.description}
                      </div>
                    </div>
                    <div className="row">
                      <label className="col-sm-4">Description:</label>
                      <div className="col-sm-8">
                        {group?.description}
                      </div>
                    </div>
                    <div className="row pt-2 pl-3 pb-2 font-weight-bold">
                      Vehicle Information
                    </div>
                    <div className="row pb-2">
                      <div className="col-sm-4">Available Seats: </div>
                      <div className="col-sm-8">{vehicle?.seat}</div>
                    </div>
                    <div className="row pb-2">
                      <div className="col-sm-4">Vehicle Type: </div>
                      <div className="col-sm-8">{vehicle?.vehicle_type}</div>
                    </div>
                    <div className="row pb-2">
                      <div className="col-sm-4">Vehicle Manufacture: </div>
                      <div className="col-sm-8">{vehicle?.vehicle_manufacturer}</div>
                    </div>
                    <div className="row pb-2">
                      <div className="col-sm-4">License Plate: </div>
                      <div className="col-sm-8">{vehicle?.license_plate}</div>
                    </div>
                    <div className="row pt-2 pl-3 pb-2 font-weight-bold">
                      Member
                    </div>
                    <div className="row pb-2 font-weight-bold">
                      <div className="col-sm-4">Driver: </div>
                      {
                        driver?.status === 'available'
                          ? (
                            <div className="col-sm-8">{driver?.displayname} - {driver?.phone}</div>
                          )
                          :
                          (
                            <div className='col-sm-8 text-danger'>{driver?.displayname} - {driver?.phone}</div>
                          )
                      }
                    </div>
                    <div className="row pb-2">
                      <div className="col-sm-4">Passenger: </div>
                      <div className="col-sm-8">
                        {
                          passengers.map(item => {
                            if (item?.status === 'available')
                              return (
                                <div>{item?.displayname} - {item?.phone}</div>
                              )
                            else
                              return (
                                <div className='text-danger'>{item?.displayname} - {item?.phone}</div>
                              )
                          })
                        }
                      </div>
                    </div>
                    <div className="row border-top pt-4">
                      <div className="col-sm-4"> Group Action</div>
                      <div className="col-sm-8 d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-pill btn-primary col-sm-5 rounded font-weight-bold"
                          onClick={handlePostpone}
                        >
                          Postpone
                        </button>
                        <button
                          type="submit"
                          className="btn btn-pill btn-warning col-sm-5 rounded font-weight-bold  mx-auto"
                          onClick={handleLeave}
                        >
                          Leave Group
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default GroupForm;
