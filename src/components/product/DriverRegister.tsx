import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios';
import * as  Yup from 'yup'
import { Field, Form, Formik } from "formik";
import { baseServices } from "../../services";
import { Modal } from "react-bootstrap";
import BeatLoader from "react-spinners/BeatLoader";

const DriverRegisterForm = () => {
  const [show, setShow] = useState(false);
  const formRef = useRef<any>();
  const [registering, setRegistering] = useState(false);
  const [error, setError] = useState(false);

  const initialValues_ = {
    username: "",
    password: "",
    name: '',
    email: '',
    phone: '',
    gender: '',
    confirmPassword: '',
  };

  const validationSchema_ = Yup.object().shape({
    username: Yup.string()
      .required("username is required!"),
    name: Yup.string()
      .required("name is required!"),
    email: Yup.string()
      .required("email is required!"),
    phone: Yup.number()
      .required("phone is required!"),
    gender: Yup.string()
      .required("gender is required!"),
    password: Yup.string()
      .required("password is required!"),
  });

  const onSubmit_ = (data) => {
    setRegistering(true)
    baseServices.registerPassenger(data)
      .then(res => {
        console.log('Register successfully')
        setShow(true)
      })
      .catch(err => {
        console.log(err)
        setError(true)
      })
      .finally(() => setRegistering(false))
  }

  const handleClose = () => {
    setShow(false);
    setError(false);
    formRef.current.handleReset();
  }
  // isConstructorDeclaration(this.props.)
  return (
    <>
      {registering &&
        <div className='loading-container'>
          <div className='loading'>
            <BeatLoader color='#123abc' loading={registering} size={20} />
          </div>
        </div>
      }
      <div className="container-fluid justify-content-center p-3 bg-light">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Passenger register</Modal.Title>
          </Modal.Header>
          <Modal.Body>Register successfully!</Modal.Body>
        </Modal>
        <Modal show={error} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Passenger register</Modal.Title>
          </Modal.Header>
          <Modal.Body>Username existed!</Modal.Body>
        </Modal>
        <Formik
          innerRef={formRef}
          initialValues={initialValues_}
          validationSchema={validationSchema_}
          onSubmit={onSubmit_}
        >
          {({ errors }) => (
            <Form className="justify-content-center rounded row">
              <section className="col-12 col-sm-12 col-md-8 rounded p-4">
                <h3 className="text-left pb-3">
                  <button
                    type="button"
                    className="btn btn-primary rounded btn-block pb-3 text-left font-weight-bold"
                  >
                    Passenger Register Form
                </button>

                  {/* Thông tin cá nhân */}
                </h3>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Name</label>
                  <div className="col-sm-10">
                    <Field name='name' className='form-control' placeholder="Enter Your Name" />
                    {errors.name && <div className="error" style={{ color: 'red' }}>{errors.name}</div>}
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Username</label>
                  <div className="col-sm-10">
                    <Field name='username' className='form-control' placeholder="Enter Your Name" />
                    {errors.username && <div className="error" style={{ color: 'red' }}>{errors.username}</div>}
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Gender</label>
                  <div className="row-sm-10 pl-3 pt-3" role="group">
                    <div className="custom-control custom-radio custom-control-inline">
                      <label>
                        <Field
                          // className="custom-control-input"
                          type="radio"
                          name="gender"
                          value="male"
                        />
                      Male
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <label>
                        <Field
                          // className="custom-control-input"
                          type="radio"
                          name="gender"
                          value="female"
                        />
                      Female
                    </label>
                    </div>
                    {errors.gender && <div className="error" style={{ color: 'red' }}>{errors.gender}</div>}
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <Field name='email' className='form-control' placeholder="Enter Your Email" />
                    {errors.email && <div className="error" style={{ color: 'red' }} >{errors.email}</div>}
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Phone</label>
                  <div className="col-sm-10">
                    <Field name='phone' className='form-control' placeholder="Enter Your Phone" />
                    {errors.phone && <div className="error" style={{ color: 'red' }} >{errors.phone}</div>}
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <Field type='password' name='password' className='form-control' placeholder="Enter Your Password" />
                    {errors.password && <div className="error" style={{ color: 'red' }}>{errors.password}</div>}
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Confirm Password</label>
                  <div className="col-sm-10">
                    <Field type='password' name='confirmPassword' className='form-control' placeholder="Re-enter Password" />
                    {errors.confirmPassword && <div className="error" style={{ color: 'red' }}>{errors.confirmPassword}</div>}
                  </div>
                </div>
                <button
                  className="btn btn-pill btn-warning rounded text-end order-sm-1 float-right font-weight-bold"
                >
                  <Link
                    to="/Register"
                    target=""
                    aria-label="Register"
                    className="text-black"
                  >
                    Back
                </Link>
                </button>

                <button
                  type="submit"
                  className="btn btn-pill btn-primary rounded text-end order-sm-1 float-right font-weight-bold mr-3"
                >
                  Register
              </button>
              </section>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default DriverRegisterForm;
