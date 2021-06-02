import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios';
// import
// const LoginForm = ({submitLogin}) => {
//     const { handleChange, values, handleSubmit, errors}
// }

type Profile = {
  name: string;
  username: string;
  email: string;
  gender: boolean;
  phone: string;
  password: string;
  password2: string;
};

const DriverRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // alert(JSON.stringify(data));
    axios.post("https://carpooling-deploy.herokuapp.com/register-driver", {
      username: data.username,
      displayname: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone
    }).then(res => {
      console.log("Driver Register Success: ", res.data);
      // window.location.pathname = "/home"
    }).catch(err => {
      console.log(err);
      
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
              Driver Register
            </button>
          </h3>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                {...register("name", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
                type="text"
                className="form-control"
                placeholder="Enter name"
              />
              {errors.name && <div className="error text-danger">Enter Name</div>}
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
                placeholder="Enter Username"
              />
              {errors.username && <div className="error text-danger">Enter Username</div>}
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
              {errors.password && <div className="error text-danger">Enter password</div>}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Re-enter password</label>
            <div className="col-sm-10">
              <input
                {...register("password2", { required: true })}
                type="password2"
                className="form-control"
                placeholder="Re-enter password"
              />
              {errors.password2 && (
                <div className="error text-danger">Re-enter password</div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-pill btn-warning rounded text-end order-sm-1 float-right font-weight-bold"
          >
            <Link
              to="/register"
              target=""
              aria-label="Register"
              className="text-black"
            >
              Back
            </Link>
          </button>
          <button
            type="button"
            className="btn btn-pill btn-primary rounded text-end order-sm-1 float-right font-weight-bold  mr-3"
            onClick={onSubmit}
          >
            
              Register
            
          </button>
        </section>
      </form>
    </div>
  );
};
export default DriverRegisterForm;
