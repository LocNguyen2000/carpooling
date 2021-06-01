import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./ChooseGroup.css";

type GroupProfile = {
  name: string;
  startLocation: string;
  startCity: string;

  startTime: string;
  finishLocation: string;
  finishCity: string;

  // city: string;
  // detour: string;
};

const CreateGroup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GroupProfile>();

  const onSubmit = handleSubmit((data) => {
    // alert(JSON.stringify(data));
    console.log("data");
  });

  return (
    <div className="container-fluid justify-content-center p-3 bg-light">
      <form className="justify-content-center rounded row">
        <section className="col-12 col-sm-12 col-md-8 rounded p-4">
          {/* <button type="button" className="btn btn-primary">Thông tin cá nhân</button> */}
          <h3 className="text-left pb-3">
            <button
              type="button"
              className="btn btn-primary rounded btn-block pb-3 text-left font-weight-bold"
            >
              Create Ridesharing Group
            </button>
          </h3>

          <div className="form-group d-flex flex-column text-center text-align-center justify-content-center">
            <div className="border">
              <h4 className="p-2">Driver Profile</h4>
              <table className="table table-responsive justify-content-center m-auto w-50">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td> Le Tam</td>
                    <td>Gender</td>
                    <td>Female</td>
                  </tr>
                  <tr>
                    <td>Vehicle Type</td>
                    <td>Car</td>
                    <td>Phone Number</td>
                    <td>(+84) 0123756522</td>
                  </tr>

                  <tr>
                    <td>Vehicle Manufacture</td>
                    <td>Subaru</td>
                    <td>License Plate</td>
                    <td>30H5-7692</td>
                  </tr>
                </tbody>
              </table>
              <button
                type="submit"
                className="btn btn-pill btn-primary rounded mx-auto font-weight-bold m-3"
              >
                <Link
                  to="/profile"
                  target="_blank"
                  aria-label="Profile"
                  className="text-white"
                >
                  Edit profile!
                </Link>
              </button>
            </div>
            <div className="border">
              {/* <h4 className="p-2">Group Information</h4>
              <div className="text-gray pb-3">0 Ridesharing Group</div> */}
              <form
                className="justify-content-center rounded row"
                onSubmit={onSubmit}
              >
                <section className="col-12 col-sm-12 col-md-8 rounded p-4">
                  {/* <button type="button" className="btn btn-primary">Thông tin cá nhân</button> */}
                  <h3 className="text-left pb-3">
                    <button
                      type="button"
                      className="btn btn-primary rounded btn-block pb-3 text-left font-weight-bold"
                    >
                      Group Register Form
                    </button>

                    {/* Thông tin cá nhân */}
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
                        placeholder="Enter Your Group's Name"
                        //  value = {values.email}
                        //  onChange = {handleChange}
                      />
                      {errors.name && (
                        <div className="error">Enter Group Name</div>
                      )}
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                      Start Time
                    </label>
                    <div className="col-sm-10">
                      <input
                        {...register("startTime", {
                          required: true,
                          // pattern: /^[A-Za-z]+$/i,
                        })}
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Start Time"
                        //  value = {values.email}
                        //  onChange = {handleChange}
                      />
                      {errors.startTime && (
                        <div className="error">Enter Your Group Start Time</div>
                      )}
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                      Start Location
                    </label>
                    <div className="col-sm-10">
                      <input
                        {...register("startLocation", {
                          required: true,
                          // pattern: /^[A-Za-z]+$/i,
                        })}
                        type="text"
                        className="form-control"
                        placeholder="Enter start location"
                        //  value = {values.email}
                        //  onChange = {handleChange}
                      />
                      {errors.startLocation && (
                        <div className="error">Enter Group's start location</div>
                      )}
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                      Start City
                    </label>
                    <div className="col-sm-10">
                      <select
                        {...register("startCity", { required: true })}
                        className="form-control selectpicker"
                        data-style="btn-primary"
                        data-width="20px"
                        data-size="5"
                      >
                        <option>Hanoi</option>
                        <option>Bac Ninh</option>
                      </select>
                      {errors.startCity && (
                        <div className="error">Choose Group's start city</div>
                      )}
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                      Start Location
                    </label>
                    <div className="col-sm-10">
                      <input
                        {...register("finishLocation", {
                          required: true,
                          // pattern: /^[A-Za-z]+$/i,
                        })}
                        type="text"
                        className="form-control"
                        placeholder="Enter start location"
                        //  value = {values.email}
                        //  onChange = {handleChange}
                      />
                      {errors.finishLocation && (
                        <div className="error">Enter Group's start location</div>
                      )}
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                      Start City
                    </label>
                    <div className="col-sm-10">
                      <select
                        {...register("finishCity", { required: true })}
                        className="form-control selectpicker"
                        data-style="btn-primary"
                        data-width="20px"
                        data-size="5"
                      >
                        <option>Hanoi</option>
                        <option>Bac Ninh</option>
                      </select>
                      {errors.finishCity && (
                        <div className="error">Choose your group's finish city</div>
                      )}
                    </div>
                  </div>
                </section>
                
              </form>
              <button
                type="submit"
                className="btn btn-pill btn-primary rounded mx-auto font-weight-bold mb-3"
                onClick = {onSubmit}
              >
                Create Ridesharing Group!
              </button>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default CreateGroup;
