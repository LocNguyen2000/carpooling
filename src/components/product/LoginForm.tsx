import { profile } from "console";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import
// const LoginForm = ({submitLogin}) => {
//     const { handleChange, values, handleSubmit, errors}
// }

type Profile = {
  phone: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    // alert(JSON.stringify(data));
    console.log("data");
  });
  // isConstructorDeclaration(this.props.)
  return (
    <div className="container-fluid justify-content-center pt-5 bg-light">
      <form className="justify-content-center rounded row" onSubmit={onSubmit}>
        <section className="col-12 col-sm-6 col-md-4 rounded p-4 bg-white">
          <h3 className="text-center pt-3">LOGIN</h3>

          <div className="form-group pt-3">
            <label>Phone Number</label>
            <input
              {...register("phone", {
                required: true,
                pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
              })}
              type="text"
              className="form-control"
              placeholder="Enter phone number"
              //  value = {values.email}
              //  onChange = {handleChange}
            />
            {errors.phone && <div className="error text-danger">Enter invalid phone number</div>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
            {errors.password && <div className="error text-danger">Enter password</div>}
          </div>

          <div className="d-flex mb-4 align-items-center">
            {/* <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                <p className="forgot-password text-right">
            Forgot <a href="#">password?</a> 
                   
        </p>
            </div>*/}
            <label className="control control--checkbox mb-0">
              <span className="caption">Remember me </span>
              <input type="checkbox" value="remember-me" />
              {/* <div className = "control-indicator"></div> */}
            </label>
            <span className="ml-auto">
              <a href="#" className="forgot-pass">
                Forgot password?{" "}
              </a>
            </span>
            <span className="clearfix"></span>
          </div>

          <button
            type="submit"
            className="btn btn-pill text-white btn-block btn-primary fw-bolder"
          >
            <Link to="/home" target="_blank" aria-label="Register" className = "text-white">
              Login
            </Link>
          </button>

          <div className="d-flex mt-4 mb-2 align-items-center">
            <span className="caption"> Don't have an account?</span>
            <span className="ml-auto">
              {/* <a href="#">Đăng ký ngay</a> */}
              <Link to="/register" target="_blank" aria-label="Register" >
                Register now!
              </Link>
            </span>
          </div>
        </section>
      </form>
    </div>
  );
};
export default LoginForm;
