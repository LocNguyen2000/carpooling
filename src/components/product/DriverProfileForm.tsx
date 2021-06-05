import React, { useEffect, useState, useRef } from "react";
import { NavBar } from "../../containers/NavBar";
import { SideBar } from "../../containers/SideBar";
import { baseServices, userServices } from "../../services";
import BeatLoader from "react-spinners/BeatLoader";
import { Form } from "react-bootstrap";
import { Field, Formik } from "formik";

interface User {
  username: string,
  displayname: any,
  phone: string,
  email: string,
  gender: string,
  id: number,
}

interface Vehicle {
  description: string,
  driver_license: string,
  id: number,
  license_expire_date: string,
  license_plate: string,
  license_start_date: string,
  seat: number,
  userid: number,
  vehicle_manufacturer: string,
  vehicle_type: string,
}

interface Coordinate {
  type: string,
}

function DriverProfileForm({ history }) {
  const [loading, setLoading] = useState(true);
  const [user, saveUser] = useState<null | User>(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const [hasGroup, setGroup] = useState(false);
  const [coordinate, setCoordinate] = useState<any | Coordinate>([]);
  const [vehicle, saveVehicle] = useState<any | Vehicle>(null);
  const formRefLeft = useRef<any>();
  useEffect(() => {
    const authenticate = () => {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token'),
        }
      }
      userServices.user(localStorage.getItem('username'), config)
        .then(res => {
          if (res.roles[0].role !== 'DRIVER')
            history.push('/passenger-profile')
          setLoading(false);
          saveUser(res);
          return res;
        })
        .then(res => {
          userServices.group(res.id, config)
            .then(res => {
              if (res.group) setGroup(true)
              console.log(res)
            })
          userServices.coordinate(res.id, config)
            .then(res => setCoordinate(res))
          userServices.vehicle(res.id, config)
            .then(res => saveVehicle(res))
        })
        .catch(err => {
          localStorage.clear();
          history.push('/login');
        })
    }
    authenticate();
  }, [])

  useEffect(() => {
    const setFieldValue = () => {
      formRefLeft.current.setFieldValue('displayname', user?.displayname || '')
      formRefLeft.current.setFieldValue('phone', user?.phone)
      formRefLeft.current.setFieldValue('email', user?.email || '')
      formRefLeft.current.setFieldValue('gender', user?.gender.toLocaleLowerCase() || '')
    }
    if (user) setFieldValue();
  }, [user])

  useEffect(() => {
    const setFieldValue = () => {
      formRefLeft.current.setFieldValue('vehicle_type', vehicle?.vehicle_type)
      formRefLeft.current.setFieldValue('vehicle_manufacturer', vehicle?.vehicle_manufacturer)
      formRefLeft.current.setFieldValue('license_plate', vehicle?.license_plate)
      formRefLeft.current.setFieldValue('driver_license', vehicle?.driver_license)
      formRefLeft.current.setFieldValue('license_start_date', vehicle?.license_start_date)
      formRefLeft.current.setFieldValue('license_expire_date', vehicle?.license_expire_date)
      formRefLeft.current.setFieldValue('details', vehicle?.description)
      formRefLeft.current.setFieldValue('seat', vehicle?.seat)
    }
    if (vehicle) setFieldValue();
  }, [vehicle])

  const initialValues_ = {
    country: "Viet Nam",
    details: "",
    displayname: "",
    driver_license: "",
    email: "",
    gender: "",
    license_expire_date: "",
    license_plate: "",
    license_start_date: "",
    vehicle_manufacturer: "",
    phone: "",
    region: "Ha Noi",
    vehicle_type: "",
    seat: '',
  };

  const onSubmit_ = (data) => {
    setSubmitting(true);
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token'),
      }
    }
    userServices.updateUser(localStorage.getItem('password'), data, config)
      .then((res) => {
        saveUser(res)
      })
      .catch(err => console.log(err))

    userServices.updateVehicle(vehicle?.id, data, config)
      .then((res) => {
        saveVehicle(res)
        setSubmitting(false)
      })
      .catch(err => setSubmitting(false))
  }

  const initialValues_2 = {
    start_location: '',
    start_detour: '',
    start_details: '',
    finish_location: '',
    finish_detour: '',
    finish_details: '',
    e_start_time:'',
    l_start_time: '',
  }

  const onSubmitRide = (data) => {
    setSubmitting(true);
    const isUpdatable = !(hasGroup && coordinate.length === 2);
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token'),
      }
    }
    baseServices.createCoor(data.start_location)
      .then(res => res.hits[0])
      .then(res => {
        if (res) {
          const params = {
            type: 'origin',
            userid: user?.id,
            name: data.start_location,
            longitude: res.point.lng,
            latitude: res.point.lat,
            detour: data.start_detour,
            description: data.start_details
          }
          if (!(hasGroup || coordinate.length === 2)) {
            userServices.createCoordinate(params, config)
            .then(() => setSubmitting(false))
            .catch(err => setSubmitting(false))
          } else if (isUpdatable) {
            const coordinateId = coordinate.filter(item => item?.type === 'origin')[0].id
            userServices.updateCoordinate(coordinateId, params, config)
            .then(() => setSubmitting(false))
            .catch(err => setSubmitting(false))
          }
        }
        setSubmitting(false)
      })
      .catch(err => setSubmitting(false))
    baseServices.createCoor(data.finish_location)
      .then(res => res.hits[0])
      .then(res => {
        if (res) {
          const params = {
            type: 'destination',
            userid: user?.id,
            name: data.finish_location,
            longitude: res.point.lng,
            latitude: res.point.lat,
            detour: data.finish_detour,
            description: data.finish_details
          }
          if (!(hasGroup || coordinate.length === 2)) {
            userServices.createCoordinate(params, config)
            .then(() => setSubmitting(false))
            .catch(err => setSubmitting(false))
          } else if (isUpdatable) {
            const coordinateId = coordinate.filter(item => item?.type === 'destination')[0].id
            userServices.updateCoordinate(coordinateId, params, config)
            .then(() => setSubmitting(false))
            .catch(err => setSubmitting(false))
          }
        }
        setSubmitting(false)
      })
      .catch(err => setSubmitting(false))
  }

  if (loading || !user) {
    return (<div className='loading'>
      <BeatLoader color='#123abc' loading={loading} size={20} />
    </div>)
  }

  return (
    <>
      {isSubmitting && (
        <div className='loading-container'>
          <div className='loading'>
            <BeatLoader color='#123abc' loading={isSubmitting} size={20} />
          </div>
        </div>)
      }
      <NavBar></NavBar>
      <div className="container-fluid page-body-wrapper">
        <SideBar />
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-2 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  className="rounded-circle mt-5"
                  src="/images/faces/face2.jpg"
                />
                <span className="pt-3 font-weight-bold">{user?.displayname}</span>
                <span className="pb-2 font-weight-bold">Driver</span>
                <span className="text-black-50">(+84) {user?.phone}</span>
                <span className="text-black-50">{vehicle?.vehicle_manufacturer}</span>
                <span className="text-black-50">{vehicle?.license_plate || '<license plate>'}</span>
              </div>
            </div>
            <div className="col-md-6 border-right">
              <Formik
                innerRef={formRefLeft}
                initialValues={initialValues_}
                onSubmit={onSubmit_}
              >
                {({ handleSubmit }) => (
                  <Form onSubmit={(e) => { e.preventDefault(); handleSubmit() }} className="p-3 py-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="text-right">Profile Settings</h4>
                    </div>
                    <h5 className="text-left pb-2 ">Personal Profile Information</h5>

                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label className="labels">Name</label>
                        <Field
                          name='displayname'
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="labels">Gender</label>
                        <Field
                          as='select'
                          name="gender"
                          className="form-control"
                          data-style="btn-primary"
                          data-width="20px"
                          data-size="2"
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </Field>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label className="labels">Phone Number</label>
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="enter phone number"
                          name='phone'
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="labels">Email</label>
                        <Field
                          type="email"
                          className="form-control"
                          placeholder="re-enter password"
                          name='email'
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label className="labels">Country</label>
                        <Field
                          type="text"
                          className="form-control"
                          name='country'
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="labels">Region</label>
                        <input
                          type="text"
                          className="form-control"
                          name='region'
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-column">
                      <h5 className="text-left pt-4">Vehicle Information</h5>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label className="labels">Type</label>
                          <Field
                            as='select'
                            className="form-control"
                            data-style="btn-primary"
                            data-width="20px"
                            data-size="2"
                            name='vehicle_type'
                          >
                            <option value='car'>Car</option>
                            <option value='motorbike'>Motorbike</option>
                          </Field>
                        </div>
                        <div className="col-md-6">
                          <label className="labels">Manufacture</label>
                          <Field
                            type="text"
                            className="form-control"
                            name='vehicle_manufacturer'
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label className="labels">License Plate</label>
                          <Field
                            type="text"
                            className="form-control"
                            name='license_plate'
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="labels">Driver License</label>
                          <Field
                            type="text"
                            className="form-control"
                            name='driver_license'
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label className="labels">License Start Date</label>
                          <Field
                            type="text"
                            className="form-control"
                            name='license_start_date'
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="labels">License Expire Date</label>
                          {/* <input type="file" className="pt-2" id="customFile" /> */}
                          <Field
                            type="text"
                            className="form-control"
                            name='license_expire_date'
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label className="labels">Available seats</label>
                          <Field
                            type="text"
                            className="form-control"
                            name='seat'
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-12 pt-3">
                          <label className="labels">Additional Details</label>
                          {/* <div className = "form-control border-none"> */}
                          <Field
                            type="text"
                            className="form-control"
                            name='details'
                          />
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <button className="btn btn-primary profile-button" type="submit">
                        Save Personal Profile
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="col-md-4">
              <div className="p-3 py-4">
                <div className="d-flex justify-content-between align-items-center rideshare-profile">
                  <h4 className="text-right pl-3">Ridesharing Profile</h4>
                  {/* <span className="border px-3 p-1 add-experience">
                <i className="fa fa-plus"></i>&nbsp;Experience
              </span> */}
                </div>
                <br></br>
                <div className="d-flex flex-column text-align-center">
                  <h5 className="text-left pl-3 ">Start Information</h5>
                  
                  <Formik
                    initialValues={initialValues_2}
                    onSubmit={onSubmitRide}
                  >
                    {({ handleSubmit }) => (
                      <Form onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
                        <div className="d-flex flex-column text-align-center">
      
                          <div className="row mt-3 px-3">
                            <div className="col-md-6">
                              <label className="labels">Start Location</label>
                              <Field
                                name='start_location'
                                type="text"
                                className="form-control" />
                            </div>
                            <div className="col-md-6">
                              <label className="labels">Start City</label>
                              <Field
                                as='select'
                                name='start_city'
                                className="form-control"
                                data-style="btn-primary"
                                data-width="20px"
                                data-size="5"
                              >
                                <option value='hanoi'>Ha Noi</option>
                                <option value='bacninh'>Bac Ninh</option>
                                <option value='hungyen'>Hung Yen</option>
                                <option value='bacgiang'>Bac Giang</option>
                                <option value='vinhphuc'>Vinh Phuc</option>
                              </Field>
                            </div>
                          </div>
                          <div className="row mt-3 px-3">
                            <div className="col-md-6">
                              <label className="labels">Earliest Start Time</label>
                              <Field
                                name='e_start_time'
                                type="text"
                                className="form-control" />
                            </div>
                            <div className="col-md-6">
                              <label className="labels">Latest Start Time</label>
                              <Field
                                name='l_start_time'
                                type="text"
                                className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-12 pt-3 pb-3">
                            <label className="labels">Detour</label>
                            <Field
                              type="number"
                              className="form-control"
                              name='start_detour'
                            />
                          </div>
                          <div className="col-md-12 pt-3 pb-3">
                            <label className="labels">Additional Details</label>
                            <Field
                              type="text"
                              className="form-control"
                              name='start_details'
                            />
                          </div>
                          <div className="form-control " style={{ opacity: "0" }}>
                            {" "}
                          </div>
                        </div>
                        <div className="d-flex flex-column">
                          <h5 className="text-left pl-3">Finish Information</h5>
                          <div className="row mt-3 px-3">
                            <div className="col-md-6">
                              <label className="labels">Finish Location</label>
                              <Field
                                name='finish_location'
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="col-md-6">
                              <label className="labels">Finish City</label>
                              <Field
                                as='select'
                                name='finish_city'
                                className="form-control"
                                data-style="btn-primary"
                                data-width="20px"
                                data-size="5"
                              >
                                <option value='hanoi'>Ha Noi</option>
                                <option value='bacninh'>Bac Ninh</option>
                                <option value='hungyen'>Hung Yen</option>
                                <option value='bacgiang'>Bac Giang</option>
                                <option value='vinhphuc'>Vinh Phuc</option>
                              </Field>
                            </div>
                          </div>
                          <div className="col-md-12 pt-3 pb-3">
                            <label className="labels">Detour</label>
                            <Field
                              type="number"
                              className="form-control"
                              name='finish_detour'
                            />
                          </div>
                          <div className="col-md-12 pt-3">
                            <label className="labels">Additional Details</label>
                            <Field
                              name='finish_details'
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className="mt-4 text-center">
                            <button
                              className="btn btn-primary profile-button"
                              type="submit"
                            >
                              Save Rideshare Profile
                            </button>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DriverProfileForm;
