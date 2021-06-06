import React, { useEffect, useRef, useState } from "react";
import { NavBar } from "../../containers/NavBar";
import { SideBar } from "../../containers/SideBar";
import { baseServices, userServices } from "../../services";
import BeatLoader from "react-spinners/BeatLoader";
import * as Yup from "yup";
import { Field, Formik } from "formik";
import { Form } from "react-bootstrap";

interface User {
  username: string;
  displayname: any;
  phone: string;
  email: string;
  gender: string;
  id: number;
  e_start_time: string;
  l_start_time: string;
}

interface Coordinate {
  type: string;
}

function PassengerProfileForm({ history }) {
  const [loading, setLoading] = useState(true);
  const [user, saveUser] = useState<null | User>(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const [hasGroup, setGroup] = useState(false);
  const [coordinate, setCoordinate] = useState<any | Coordinate>([]);
  const formRefLeft = useRef<any>();
  const formRefRight = useRef<any>();

  useEffect(() => {
    const authenticate = () => {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      userServices
        .user(localStorage.getItem("username"), config)
        .then((res) => {
          if (res.roles[0].role === "DRIVER") history.push("/driver-profile");
          setLoading(false);
          saveUser(res);
          return res;
        })
        .then((result) => {
          userServices.group(result.id, config).then((res) => {
            if (res.group) setGroup(true);
          });
          userServices
            .coordinate(result.id, config)
            .then((res) => setCoordinate(res));
        })
        .catch((err) => {
          localStorage.clear();
          history.push("/login");
        });
    };

    authenticate();
  }, []);

  useEffect(() => {
    const setFieldValue = () => {
      formRefLeft.current.setFieldValue("displayname", user?.displayname || "");
      formRefLeft.current.setFieldValue("phone", user?.phone);
      formRefLeft.current.setFieldValue("email", user?.email || "");
      formRefLeft.current.setFieldValue(
        "gender",
        user?.gender?.toLocaleLowerCase() || ""
      );
    };
    if (user) setFieldValue();
  }, [user]);

  useEffect(() => {
    const setFieldValue = () => {
      const startInfo = coordinate.filter(item => item?.type === 'origin')[0]
      const finishInfo = coordinate.filter(item => item?.type === 'destination')[0]
      formRefRight.current.setFieldValue('start_location', startInfo?.name)
      formRefRight.current.setFieldValue('start_detour', startInfo?.detour)
      formRefRight.current.setFieldValue('start_details', startInfo?.description)
      formRefRight.current.setFieldValue('finish_location', finishInfo?.name)
      formRefRight.current.setFieldValue('finish_detour', finishInfo?.detour)
      formRefRight.current.setFieldValue('finish_details', finishInfo?.description)
      formRefRight.current.setFieldValue('e_start_time', user?.e_start_time)
      formRefRight.current.setFieldValue('l_start_time', user?.l_start_time)
    }
    if (coordinate.length > 0) setFieldValue();
  }, [coordinate])

  const initialValues_ = {
    displayname: "",
    phone: "",
    email: "",
    gender: "",
    country: "Viet Nam",
    region: "Ha Noi",
  };

  const validationSchema_ = Yup.object().shape({
    displayname: Yup.string(),
    phone: Yup.string(),
    email: Yup.string(),
    gender: Yup.string(),
    country: Yup.string(),
    region: Yup.string(),
  });

  const onSubmit_ = (data) => {
    setSubmitting(true);
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    userServices
      .updateUser(localStorage.getItem("password"), data, config)
      .then(() => {
        console.log(data);
        setSubmitting(false);
      })
      .catch((err) => setSubmitting(false));
  };

  const onSubmitRide = (data) => {
    setSubmitting(true);
    const isUpdatable = !(hasGroup && coordinate.length === 2);
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    baseServices
      .createCoor(data.start_location)
      .then((res) => res.hits[0])
      .then((res) => {
        if (res) {
          const params = {
            type: "origin",
            userid: user?.id,
            name: data.start_location,
            longitude: res.point.lng,
            latitude: res.point.lat,
            detour: data.start_detour,
            description: data.start_details,
          };
          if (!(hasGroup || coordinate.length === 2)) {
            userServices
              .createCoordinate(params, config)
              .then(() => setSubmitting(false))
              .catch((err) => setSubmitting(false));
          } else if (isUpdatable) {
            const coordinateId = coordinate.filter(
              (item) => item?.type === "origin"
            )[0].id;
            userServices
              .updateCoordinate(coordinateId, params, config)
              .then(() => setSubmitting(false))
              .catch((err) => setSubmitting(false));
          }
        }
        setSubmitting(false);
      })
      .catch((err) => setSubmitting(false));
    baseServices
      .createCoor(data.finish_location)
      .then((res) => res.hits[0])
      .then((res) => {
        if (res) {
          const params = {
            type: "destination",
            userid: user?.id,
            name: data.finish_location,
            longitude: res.point.lng,
            latitude: res.point.lat,
            detour: data.finish_detour,
            description: data.finish_details,
          };
          if (!(hasGroup || coordinate.length === 2)) {
            userServices
              .createCoordinate(params, config)
              .then(() => setSubmitting(false))
              .catch((err) => setSubmitting(false));
          } else if (isUpdatable) {
            const coordinateId = coordinate.filter(
              (item) => item?.type === "destination"
            )[0].id;
            userServices
              .updateCoordinate(coordinateId, params, config)
              .then(() => setSubmitting(false))
              .catch((err) => setSubmitting(false));
          }
        }
        setSubmitting(false);
      })
      .catch((err) => setSubmitting(false));
  };

  const initialValues_2 = {
    start_location: "",
    start_detour: "",
    start_details: "",
    finish_location: "",
    finish_detour: "",
    finish_details: "",
    e_start_time: "",
    l_start_time: "",
  };

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
      <>
        <NavBar></NavBar>
        <div className="container-fluid page-body-wrapper">
          <SideBar />
          <div className="container rounded bg-white mt-5 mb-5">
            <div className="col-md-12 border-bottom">
              <div className="d-flex flex-column align-items-center justify-content-center text-center p-3">
                <img
                  className="rounded-circle mt-5"
                  src="/images/faces/face2.jpg"
                />
                <div className="d-flex flex-column pl-3">
                  <span className="pt-3 font-weight-bold">
                    {user?.displayname || "<name>"}
                  </span>
                  <span className="pb-2 font-weight-bold">Passenger</span>
                  <span className="text-black-50">
                    (+84) {user?.phone || "<phone>"}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 border-right">
                <Formik
                  innerRef={formRefLeft}
                  initialValues={initialValues_}
                  validationSchema={validationSchema_}
                  onSubmit={onSubmit_}
                >
                  {({ handleSubmit }) => (
                    <Form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                      }}
                      className="p-3 py-4"
                    >
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="text-right">Profile Settings</h4>
                      </div>
                      <h5 className="text-left pb-2 ">
                        Personal Profile Information
                      </h5>

                      <div className="row mt-3">
                        <div className="col-md-12">
                          <label className="labels">Name</label>
                          <Field
                            className="form-control"
                            type="text"
                            placeholder="Enter name"
                            name="displayname"
                          />
                        </div>
                        <div className="col-md-12 pt-3">
                          <label className="labels">Phone Number</label>
                          <Field
                            type="string"
                            className="form-control"
                            placeholder="Enter phone number"
                            name="phone"
                          />
                        </div>
                        <div className="col-md-12 pt-3">
                          <label className="labels">Email</label>
                          <Field
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name="email"
                          />
                        </div>
                        <div className="col-md-12  pt-3">
                          <label className="labels">Gender</label>
                          <Field
                            as="select"
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
                        {/* <div className="col-md-12 pt-3">
                        <label className="labels">Detour</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="edit detour distance (km)"
                          value="2"
                        />
                      </div> */}
                        <div className="col-md-12 pt-3">
                          <label className="labels">Country</label>
                          <Field
                            type="text"
                            className="form-control"
                            placeholder="Enter country"
                            name="country"
                          />
                        </div>
                        <div className="col-md-12 pt-3">
                          <label className="labels">Region</label>
                          <Field
                            type="text"
                            className="form-control"
                            placeholder="Enter region"
                            name="region"
                          />
                        </div>
                      </div>

                      <div className="mt-4 text-center">
                        <button
                          className="btn btn-primary profile-button"
                          type="submit"
                        >
                          Save Personal Profile
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
              <div className="col-md-7">
                <div className="p-3 py-4">
                  <div className="d-flex justify-content-between align-items-center rideshare-profile">
                    <h4 className="text-right pl-3">Ridesharing Profile</h4>
                  </div>
                  <br></br>
                  <Formik
                    innerRef={formRefRight}
                    initialValues={initialValues_2}
                    onSubmit={onSubmitRide}
                  >
                    {({ handleSubmit }) => (
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleSubmit();
                        }}
                      >
                        <div className="d-flex flex-column text-align-center">
                          <h5 className="text-left pl-3 ">Start Information</h5>
                          <div className="row mt-3 px-3">
                            <div className="col-md-6">
                              <label className="labels">Start Location</label>
                              <Field
                                name="start_location"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="col-md-6">
                              <label className="labels">Start City</label>
                              <Field
                                as="select"
                                name="start_city"
                                className="form-control"
                                data-style="btn-primary"
                                data-width="20px"
                                data-size="5"
                              >
                                <option value="hanoi">Ha Noi</option>
                                <option value="bacninh">Bac Ninh</option>
                                <option value="hungyen">Hung Yen</option>
                                <option value="bacgiang">Bac Giang</option>
                                <option value="vinhphuc">Vinh Phuc</option>
                              </Field>
                            </div>
                          </div>
                          <div className="row mt-3 px-3">
                            <div className="col-md-6">
                              <label className="labels">
                                Earliest Start Time
                              </label>
                              <Field
                                name="e_start_time"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="col-md-6">
                              <label className="labels">
                                Latest Start Time
                              </label>
                              <Field
                                name="l_start_time"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="row mt-3 px-3">
                            <div className="col-md-6 pt-3 pb-3">
                              <label className="labels">Detour</label>
                              <Field
                                type="number"
                                className="form-control"
                                name="start_detour"
                              />
                            </div>
                            <div className="col-md-6 pt-3 pb-3">
                              <label className="labels">
                                Additional Details
                              </label>
                              <Field
                                type="text"
                                className="form-control"
                                name="start_details"
                              />
                            </div>
                            {/* <div
                              className="form-control "
                              style={{ opacity: "0" }}
                            >
                              {" "}
                            </div> */}
                          </div>
                        </div>
                        <div className="d-flex flex-column">
                          <h5 className="text-left pl-3 pt-3">
                            Finish Information
                          </h5>
                          <div className="row mt-3 px-3">
                            <div className="col-md-6">
                              <label className="labels">Finish Location</label>
                              <Field
                                name="finish_location"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="col-md-6">
                              <label className="labels">Finish City</label>
                              <Field
                                as="select"
                                name="finish_city"
                                className="form-control"
                                data-style="btn-primary"
                                data-width="20px"
                                data-size="5"
                              >
                                <option value="hanoi">Ha Noi</option>
                                <option value="bacninh">Bac Ninh</option>
                                <option value="hungyen">Hung Yen</option>
                                <option value="bacgiang">Bac Giang</option>
                                <option value="vinhphuc">Vinh Phuc</option>
                              </Field>
                            </div>
                          </div>
                          <div className="row mt-3 px-3">
                            <div className="col-md-6 pt-3 pb-3">
                              <label className="labels">Detour</label>
                              <Field
                                type="number"
                                className="form-control"
                                name="finish_detour"
                              />
                            </div>
                            <div className="col-md-6 pt-3">
                              <label className="labels">
                                Additional Details
                              </label>
                              <Field
                                name="finish_details"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="mt-2 text-center">
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
      </>
    </>
  );
}

export default PassengerProfileForm;
