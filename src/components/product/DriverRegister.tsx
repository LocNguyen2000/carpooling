import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import
// const LoginForm = ({submitLogin}) => {
//     const { handleChange, values, handleSubmit, errors}
// }

type Profile = {
  name: string;
  type: boolean;
  gender: boolean;
  phone: string;
  vehicleType: string;
  vehicleManufacture: string;
  vehicleSeat: number;
  vehicleLicense: string;
  licensePlate: string;
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
    // alert(JSON.stringify(data));
    console.log("data");
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
            <label className="col-sm-2 col-form-label">Vehicle Type</label>
            <div className="col-sm-10">
              <div className="row-sm-10 pt-3">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    // value="option1"
                  />
                  <label className="custom-control-label">Car</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    // value="option2"
                  />
                  <label className="custom-control-label">Motorbike</label>
                </div>
                <div className="pb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Others"
                    value="Others"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Vehicle Manufacture
            </label>
            <div className="col-sm-10">
              <input
                {...register("vehicleManufacture", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/i,
                })}
                type="text"
                className="form-control"
                placeholder="Subaru"
              />
              {errors.vehicleManufacture && (
                <div className="error text-danger">Enter Vehicle Manufacture</div>
              )}
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">License Plate</label>
            <div className="col-sm-10">
              <input
                {...register("licensePlate", {
                  required: true,
                  pattern: /^[^+_=/*?@#$%&()'"|â„;:{}.,`~<>}{][^\\]{1,20}$/g,
                })}
                type="text"
                className="form-control"
                placeholder="30H5-7692"
              />
              {errors.licensePlate && (
                <div className="error text-danger">Enter License Plate </div>
              )}
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

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Driver License</label>
            <div className="col-sm-10">
              <input
                {...register("vehicleLicense", { required: true })}
                type="file"
                className="pt-2"
                id="customFile"
              />
              {errors.vehicleLicense && (
                <div className="error text-danger">Re-enter vehicle license</div>
              )}
            </div>
          </div>

          {/* <div className="d-flex mb-4 align-items-center">
            <label className="control control--checkbox mb-0 order-sm-1">
              <span className="caption pl-3">
                Tôi muốn được kết nối với cơ hội góp sức phù hợp{" "}
              </span>
            </label>
            <span className="ml-auto">
              <input type="checkbox" value="follow" />
            </span>
            <span className="clearfix"></span>
          </div>
          <div className="d-flex mb-4 align-items-center">
            <label className="control control--checkbox mb-0 order-sm-1">
              <span className="caption pl-3">
                Chọn mục này nếu bạn muốn nhận tin tức về hoạt động tình nguyện{" "}
              </span>
            </label>

            <span className="ml-auto ">
              <input type="checkbox" value="get-information" />
            </span>
          </div> */}
          
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
            type="button"
            className="btn btn-pill btn-primary rounded text-end order-sm-1 float-right font-weight-bold  mr-3"
            onClick={onSubmit}
          >
            <Link
              to="/MainForm"
              target="_blank"
              aria-label="Register"
              className="text-white"
            >
              Register
            </Link>
          </button>
        </section>
      </form>
    </div>
  );
};
export default DriverRegisterForm;
