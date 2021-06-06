import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./ChooseGroup.css";
import { NavBar } from "../../containers/NavBar";
import { SideBar } from "../../containers/SideBar";
import { Field, Formik } from "formik";
import { Form } from "react-bootstrap";
import { driverServices, userServices } from "../../services";
import BeatLoader from "react-spinners/BeatLoader";


type GroupProfile = {
  name: string;
  startLocation: string;
  startCity: string;

  startTime: string;
  finishLocation: string;
  finishCity: string;
};

interface User {
  username: string;
  displayname: any;
  phone: string;
  email: string;
  gender: string;
  id: number;
  e_time_start: string;
  l_start_time: string;
}

interface Coordinate {
  type: string;
}

const CreateGroup = ({ history }) => {
  const [loading, setLoading] = useState(true);
  const [user, saveUser] = useState<null | User>(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const [coordinate, setCoordinate] = useState<any | Coordinate>([]);
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
          if (res.role_string !== "DRIVER") history.push("/find-group");
          setLoading(false);
          saveUser(res);
          return res;
        })
        .then((result) => {
          userServices.group(result.id, config).then((res) => {
            if (res) history.push("/group");
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
      const startInfo = coordinate.filter(item => item?.type === 'origin')[0]
      const finishInfo = coordinate.filter(item => item?.type === 'destination')[0]
      formRefRight.current.setFieldValue('start_location', startInfo?.name)
      formRefRight.current.setFieldValue('start_detour', startInfo?.detour)
      formRefRight.current.setFieldValue('finish_location', finishInfo?.name)
      formRefRight.current.setFieldValue('finish_detour', finishInfo?.detour)
      formRefRight.current.setFieldValue('e_time_start', user?.e_time_start)
    }
    if (coordinate.length > 0 && user) setFieldValue();
  }, [coordinate, user])

  const initialValues_ = {
    name: '',
    description: '',
    start_location: '',
    start_detour: '',
    finish_location: '',
    finish_detour: '',
    e_time_start: '',
  };

  const onSubmit_ = (data) => {
    console.log(data)
    setSubmitting(true)
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    driverServices.createGroup(data, config)
      .then(res => history.push('/group'))
      .catch(err => {setSubmitting(false); console.log(err)})
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
      <>
      <NavBar></NavBar>
      <div className="container-fluid page-body-wrapper">
        <SideBar />
        <div className="container-fluid justify-content-center p-3 bg-light">
          <Formik
            innerRef={formRefRight}
            initialValues={initialValues_}
            onSubmit={onSubmit_}
          >
            {({ handleSubmit, errors }) => (
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                className="justify-content-center rounded row"
              >
                <section className="col-12 col-sm-12 col-md-8 rounded p-4">
                  {/* <button type="button" className="btn btn-primary">Thông tin cá nhân</button> */}
                  <h3 className="text-left pb-3">
                    <div
                      className="btn btn-primary rounded btn-block pb-3 text-left font-weight-bold"
                    >
                      Create Ridesharing Group
                </div>
                  </h3>

                  <div className="form-group d-flex flex-column text-center text-align-center justify-content-center">
                    <div className="border">
                      <div
                        className="justify-content-center rounded row"
                      >
                        <section className="col-12 col-sm-12 col-md-8 rounded p-4">
                          {/* <button type="button" className="btn btn-primary">Thông tin cá nhân</button> */}
                          <h3 className="text-left pb-3">
                            <div
                              className="btn btn-primary rounded btn-block pb-3 text-left font-weight-bold"
                            >
                              Group Register Form
                        </div>

                            {/* Thông tin cá nhân */}
                          </h3>

                          <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                              <Field
                                name='name'
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Group's Name"
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                              Start Location
                            </label>
                            <div className="col-sm-10">
                              <Field
                                name='start_location'
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Start Location"
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                              Start Time
                            </label>
                            <div className="col-sm-10">
                              <Field
                                name='e_time_start'
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Start Time"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                              Start Detour
                            </label>
                            <div className="col-sm-10">
                              <Field
                                type='number'
                                name='start_detour'
                                className="form-control"
                                placeholder="Enter Your Start Detour"
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                              Finish Location
                            </label>
                            <div className="col-sm-10">
                              <Field
                                name='finish_location'
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Finish Location"
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                              Finish Detour
                            </label>
                            <div className="col-sm-10">
                              <Field
                                type='number'
                                name='finish_detour'
                                className="form-control"
                                placeholder="Enter Your Finish Detour"
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                              Addition Details
                            </label>
                            <div className="col-sm-10">
                              <Field
                                name='description'
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Finish Additional Details"
                              />
                            </div>
                          </div>
                        </section>

                      </div>
                      <button
                        type="submit"
                        className="btn btn-pill btn-primary rounded mx-auto font-weight-bold mb-3"
                      >
                        Create Ridesharing Group!
                      </button>
                    </div>
                  </div>
                </section>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      </>
    </>
  );
};

export default CreateGroup;
