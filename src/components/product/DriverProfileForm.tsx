import React from "react";

function DriverProfileForm() {
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-2 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              src="/images/faces/face2.jpg"
            />
            <span className="pt-3 font-weight-bold">Le Tam</span>
            <span className="pb-2 font-weight-bold">Driver</span>
            <span className="text-black-50">(+84) 0123756522</span>
            <span className="text-black-50">Subaru Legacy </span>
            <span className="text-black-50">30H5-7692</span>
          </div>
        </div>
        <div className="col-md-6 border-right">
          <div className="p-3 py-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <h5 className="text-left pb-2 ">Personal Profile Information</h5>

            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value="Le Tam"
                />
              </div>
              <div className="col-md-6">
              <label className="labels">Gender</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter gender"
                  value="Female"
                />
                </div>
                </div>
                <div className="row mt-3">
                <div className="col-md-6">
                <label className="labels">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter phone number"
                  value="0123756522"
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="re-enter password"
                  value="ddfgdfgdsfg"
                />
              </div>
                </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Country</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="country"
                  value="Vietnam"
                />
              </div>
              
              <div className="col-md-6">
                <label className="labels">Region</label>
                <input
                  type="text"
                  className="form-control"
                  value=""
                  placeholder="Hanoi"
                />
              </div>
            </div>
            <div className="d-flex flex-column">
              <h5 className="text-left pt-4">Vehicle Information</h5>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Type</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="start-location"
                    value="Car"
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Manufacture</label>
                  <input
                    type="text"
                    className="form-control"
                    value="Subaru"
                    placeholder="vehicle manufature"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">License Plate</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="License Plate"
                    value="30H5-7692"
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Driver License</label>
                  <input type="file" className="pt-2" id="customFile" />
                </div>
              </div>
              {/* <div className="col-md-12">
                <label className="labels">Finish Location</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="12 Ly Nam De"
                  value=""
                />
              </div> */}
              <div className="row mt-3">

              <div className="col-md-12 pt-3">
                <label className="labels">Additional Details</label>
                {/* <div className = "form-control border-none"> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="additional details"
                  value=""
                />
                {/* </div> */}
              </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <button className="btn btn-primary profile-button" type="button">
                Save Personal Profile
              </button>
            </div>
          </div>
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
              {/* <div className="col-md-12">
                <label className="labels">Start Location</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="102 Hoang Hoa Tham"
                  value=""
                />
              </div>{" "} */}
              <div className="row mt-3 px-3">
                <div className="col-md-6">
                  <label className="labels">Start Time</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="7:00 a.m"
                    value="7:00 a.m"
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Available Seats</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="3"
                    value="3"
                  />
                </div>
              </div>
              <div className="col-md-12 pt-3 pb-3">
                  <label className="labels">Start Location</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="start-location"
                    value="20 Hoa Bang"
                  />
                </div>
                <div className="col-md-12 pt-3 pb-3">
                  <label className="labels">Start City</label>
                  <input
                    type="text"
                    className="form-control"
                    value="Hanoi"
                    placeholder="Hanoi"
                  />
                </div>
              
              <div className="col-md-12 pt-3 pb-3">
                  <label className="labels">Finish Location</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="start-location"
                    value="12 Ly Nam De"
                  />
                </div>
                <div className="col-md-12 pt-3 pb-3">
                  <label className="labels">Finish City</label>
                  <input
                    type="text"
                    className="form-control"
                    value="Ha Noi"
                    placeholder="start-city"
                  />
                </div>
              <div className="col-md-12 pt-3 pb-3">
                <label className="labels">Additional Details</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="additional details"
                  value="Female only"
                />
              </div>
              <div className="mt-2 mb-4 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Save Rideshare Profile
                </button>
              </div>
              {/* <div className="form-control border-none"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverProfileForm;
