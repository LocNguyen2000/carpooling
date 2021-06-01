import React from "react";

function ProfileForm() {
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              src="/images/faces/face2.jpg"
            />
            <span className="pt-3 font-weight-bold">Le Tam</span>
            <span className="pb-2 font-weight-bold">Passenger</span>

            <span className="text-black-50">(+84) 0123756522</span>
          </div>
        </div>
        <div className="col-md-4 border-right">
          <div className="p-3 py-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <h5 className="text-left pb-2 ">Personal Profile Information</h5>

            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value="Le Tam"
                />
              </div>

              <div className="col-md-12 pt-3">
                <label className="labels">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter phone number"
                  value="0123756522"
                />
              </div>
              <div className="col-md-12 pt-3">
                <label className="labels">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="re-enter password"
                  value="ddfgdfgdsfg"
                />
              </div>
              <div className="col-md-12  pt-3">
                <label className="labels">Gender</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter gender"
                  value="Female"
                />
              </div>
              <div className="col-md-12 pt-3">
                <label className="labels">Detour</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="edit detour distance"
                  value="2km"
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
            <div className="mt-4 text-center">
              <button className="btn btn-primary profile-button" type="button">
                Save Personal Profile
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-5">
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
                  <label className="labels">Start Location</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="start-location"
                    value="20 Hoa Bang"
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Start City</label>
                  <input
                    type="text"
                    className="form-control"
                    value="Hanoi"
                    placeholder="Hanoi"
                  />
                </div>
              </div>
              <div className="row mt-3 px-3">
                <div className="col-md-6">
                  <label className="labels">Earliest Start Time</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="7:00 a.m"
                    value="7:00 a.m"
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Latest Start Time</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="7:30 a.m"
                    value="7:30 a.m"
                  />
                </div>
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
              <div className="form-control " style= {{"opacity": "0"}}> </div>
            </div>
            <div className="d-flex flex-column">
              <h5 className="text-left pl-3">Finish Information</h5>
              <div className="row mt-3 px-3">
                <div className="col-md-6">
                  <label className="labels">Finish Location</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="start-location"
                    value="12 Ly Nam De"
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Finish City</label>
                  <input
                    type="text"
                    className="form-control"
                    value="Ha Noi"
                    placeholder="start-city"
                  />
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

              <div className="col-md-12 pt-3">
                <label className="labels">Additional Details</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="additional details"
                  value=""
                />
              </div>
              <div className="mt-4 text-center">
              <button className="btn btn-primary profile-button" type="button">
                Save Rideshare Profile
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
