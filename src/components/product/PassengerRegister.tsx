import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios';

type Profile = {
  name: string;
  username: string;
  gender: boolean;
  phone: string;
  email: string;
  password: string;
  password2: string;
};

const PassengerRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    console.log("Data: ", data);
    
    axios.post("https://carpooling-deploy.herokuapp.com/register-passenger", {
      username: data.username,
      displayname: data.name,
      password: data.password,
      email: data.email,
      phone: data.phone,
    }).then((res) =>{
      console.log("Register Passenger Sucess: ", res.data);
      window.location.pathname = "/home"
    }).catch(error => {
      console.log(error);
    })
  });
  // isConstructorDeclaration(this.props.)
  return (
    <div className="container-fluid justify-content-center p-3 bg-light">
      <form className="justify-content-center rounded row" onSubmit={onSubmit}>
        <section className="col-12 col-sm-12 col-md-8 rounded p-4">
          {/* <button type="button" className="btn btn-primary">Thông tin cá nhân</button> */}
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
              <input
                {...register("name", {
                  required: true,
                })}
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                //  value = {values.email}
                //  onChange = {handleChange}
              />
              {errors.name && <div className="error">Enter Name</div>}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input
                {...register("username", {
                  required: true,
                })}
                type="text"
                className="form-control"
                placeholder="Enter Your Usernam"
                //  value = {values.email}
                //  onChange = {handleChange}
              />
              {errors.username && <div className="error">Enter Username</div>}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Gender</label>
            <div className="row-sm-10 pl-3 pt-3">
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  className="custom-control-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label className="custom-control-label">Male</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  className="custom-control-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label className="custom-control-label">Female</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  className="custom-control-input"
                  type="checkbox"
                  id="inlineCheckbox3"
                  value="option3"
                />
                <label className="custom-control-label">Others</label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                {...register("email", {
                  required: true,
                })}
                type="text"
                className="form-control"
                placeholder="Enter Your Email"
              />
              {errors.email && <div className="error">Enter Email</div>}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Phone</label>
            <div className="col-sm-10">
              <input
                {...register("phone", {
                  required: true,
                  pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
                })}
                type="text"
                className="form-control"
                placeholder="Enter your phone number"
                //  value = {values.email}
                //  onChange = {handleChange}
              />
              {errors.phone && <div className="error">Enter Phone Number</div>}
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input
                {...register("password", { required: true })}
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
              {errors.password && <div className="error">Enter password</div>}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Re-enter password</label>
            <div className="col-sm-10">
              <input
                {...register("password", { required: true })}
                type="password"
                className="form-control"
                placeholder="Re-enter password"
              />
              {errors.password && (
                <div className="error">Password not the same!</div>
              )}
            </div>
          </div>

    
          <button
            type="submit"
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
      </form>
    </div>
  );
};
export default PassengerRegisterForm;
