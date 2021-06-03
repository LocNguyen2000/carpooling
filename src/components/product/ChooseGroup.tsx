import React from "react";
import { Link } from "react-router-dom";
import "./ChooseGroup.css";

function GroupForm() {
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
              Find Ridesharing Group
            </button>
          </h3>

          <div className="form-group d-flex flex-column text-center text-align-center justify-content-center">
            <div className="border">
              <h4 className="p-2">Ridesharing Information</h4>
              <table className="table table-responsive justify-content-center m-auto w-75 pl-3">
                <tbody>
                  <tr>
                    <td>Start Location</td>
                    <td>101 Hoang Hoa Tham</td>
                    <td>Finish Location</td>
                    <td>10 Ly Nam De</td>
                  </tr>
                  <tr>
                    <td>Earliest Start Time</td>
                    <td>7:00 a.m</td>
                    <td>Latest Start Time</td>
                    <td>7:30 a.m</td>
                  </tr>

                  <tr>
                    <td>Detour Distance</td>
                    <td>3 km</td>
                    <td>Note</td>
                    <td>Girl only</td>
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
                  Edit ridesharing profile!
                </Link>
              </button>
            </div>
            <div className="border">
              <h4 className="p-2">Group Information</h4>
              <div className="text-gray pb-3">0 Ridesharing Group</div>

              <button
                type="submit"
                className="btn btn-pill btn-primary rounded mx-auto font-weight-bold mb-3"
              >
                Find Ridesharing Group!
              </button>
            </div>
            <h4 className="pt-3">Suitable Groups</h4>
            <div className="d-flex groups m-auto">
              {/* <div className="col-md-6"> */}
                <div className="card card-group">
                  <div className="additional">
                    <div className="user-card">
                      <div className="level center">GROUP 1</div>
                      {/* <div className="points center">100m detour</div> */}
                      <img
                        className="rounded-circle pb-2 pt-3"
                        src="/images/faces/face2.jpg"
                      />
                      <div className="d-flex flex-column align-items-center text-center center">
                        <span className="font-weight-bold">Le Tam</span>
                        <span className="pb-2 font-weight-bold">Driver</span>
                        <span className="text-50">Female</span>

                        <span className="text-50">(+84) 0123756522</span>
                        <span className="text-50">Subaru Legacy </span>
                        <span className="text-50">30H5-7692</span>
                      </div>
                    </div>
                    <div className="more-info">
                      <h3 className="py-2">Group Detail</h3>
                      <div className="coords">
                        <span>
                          Description: Welcome everybody to our group!
                        </span>
                      </div>
                      <div className="coords">
                        <span>License Plate: /license-plate-012.png</span>
                      </div>
                      <div className="coords">
                        <span className="text-left">Member:</span>
                        <span>Nguyen Quynh Mai</span>
                        <span>Nguyen Quynh Mai</span>
                        <span>Nguyen Quynh Mai</span>
                      </div>
                      <div className="stats">
                        <div>
                          <div className="title">Seats</div>
                          <i className="fas fa-user-plus p-1"></i>{" "}
                          <div className="value">2</div>
                        </div>
                        <div>
                          <div className="title">Member</div>
                          <i className="fas fa-user-friends p-1"></i>{" "}
                          <div className="value">2/4</div>
                        </div>
                        <div>
                          <div className="title">Type</div>
                          <i className="fas fa-car p-1"></i>{" "}
                          <div className="value">Car</div>
                        </div>
                        <div>
                          <div className="title">Restrict</div>
                          {/* <i className="fas fa-do-not-enter"></i> */}
                          <i className="fas fa-times p-1"></i>
                          <div className="value">0</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="general text-black ">
                    <h3 className="pb-2">GROUP 1</h3>
                    <span className="pt-5 text-left">
                      <p>Start location: 101 Lac Long Quan</p>
                      <p>Finish location: 250 Ba Trieu</p>
                      <p>Time start: 07:11</p>
                      <p>Detour Start location: 0.5km</p>
                      <p>Detour Finish location: 1.2km</p>
                      <p>Available Seats: 2</p>
                    </span>
                    <button
                      className="btn btn-primary profile-button mt-3"
                      type="button"
                    >
                      Choose Group
                    </button>
                    {/* <span className="more">Mouse over the card for more info</span> */}
                  </div>
                {/* </div> */}
              </div>

              {/* <div className="col-md-6">
            <div className="card">
              <div className="additional">
                <div className="user-card">
                  <div className="level center">GROUP 1</div>
                  <img
                    className="rounded-circle pb-2 pt-3"
                    src="/images/faces/face2.jpg"
                  />
                  <div className="d-flex flex-column align-items-center text-center center">
                    <span className="font-weight-bold">Le Tam</span>
                    <span className="pb-2 font-weight-bold">Driver</span>
                    <span className="text-50">Female</span>

                    <span className="text-50">(+84) 0123756522</span>
                    <span className="text-50">Subaru Legacy </span>
                    <span className="text-50">30H5-7692</span>
                  </div>
                </div>
                <div className="more-info">
                  <h3 className="py-2">Group Detail</h3>
                  <div className="coords">
                    <span>Description: Welcome everybody to our group!</span>
                  </div>
                  <div className="coords">
                    <span>License Plate: /license-plate-012.png</span>
                  </div>
                  <div className="coords">
                    <span className="text-left">Member:</span>
                    <span>Nguyen Quynh Mai</span>
                    <span>Nguyen Quynh Mai</span>
                    <span>Nguyen Quynh Mai</span>
                  </div>
                  <div className="stats">
                    <div>
                      <div className="title">Seats</div>
                      <i className="fas fa-user-plus p-1"></i>{" "}
                      <div className="value">2</div>
                    </div>
                    <div>
                      <div className="title">Member</div>
                      <i className="fas fa-user-friends p-1"></i>{" "}
                      <div className="value">2/4</div>
                    </div>
                    <div>
                      <div className="title">Type</div>
                      <i className="fas fa-car p-1"></i>{" "}
                      <div className="value">Car</div>
                    </div>
                    <div>
                      <div className="title">Restrict</div>
                      <i className="fas fa-times p-1"></i>
                      <div className="value">0</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="general text-black ">
                <h3 className="pb-2">GROUP 1</h3>
                <span className="pt-5 text-left">
                  <p>Start location: 101 Lac Long Quan</p>
                  <p>Finish location: 250 Ba Trieu</p>
                  <p>Time start: 07:11</p>
                  <p>Detour Start location: 0.5km</p>
                  <p>Detour Finish location: 1.2km</p>
                  <p>Available Seats: 2</p>
                </span>
                <button
                  className="btn btn-primary profile-button mt-3"
                  type="button"
                >
                  Choose Group
                </button>
              </div>
            </div>
            </div> */}

              <div className="col-md-6">
                <div className="card card-group">
                  <div className="additional">
                    <div className="user-card">
                      <div className="level center">GROUP 10</div>
                      {/* <div className="points center">100m detour</div> */}
                      <img
                        className="rounded-circle pb-2 pt-3"
                        src="/images/faces/face4.jpg"
                      />
                      <div className="d-flex flex-column align-items-center text-center center">
                        <span className="font-weight-bold">Tran Binh</span>
                        <span className="pb-2 font-weight-bold">Driver</span>
                        <span className="text-50">Male</span>

                        <span className="text-50">(+84) 0123756522</span>
                        <span className="text-50">Toyota Future </span>
                        <span className="text-50">39P1-87123</span>
                      </div>
                    </div>
                    <div className="more-info">
                      <h3 className="py-2">Group Detail</h3>
                      <div className="coords">
                        <span>
                          Description: Welcome everybody to our group!
                        </span>
                      </div>
                      <div className="coords">
                        <span>License Plate: /license-plate-021.png</span>
                      </div>
                      <div className="coords">
                        <span className="text-left">Member:</span>
                      </div>
                      <div className="stats">
                        <div>
                          <div className="title">Seats</div>
                          <i className="fas fa-user-plus p-1"></i>{" "}
                          <div className="value">1</div>
                        </div>
                        <div>
                          <div className="title">Member</div>
                          <i className="fas fa-user-friends p-1"></i>{" "}
                          <div className="value">1/2</div>
                        </div>
                        <div>
                          <div className="title">Type</div>
                          <i className="fas fa-car p-1"></i>{" "}
                          <div className="value">Motor</div>
                        </div>
                        <div>
                          <div className="title">Restrict</div>
                          {/* <i className="fas fa-do-not-enter"></i> */}
                          <i className="fas fa-times p-1"></i>
                          <div className="value">Smoke</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="general text-black ">
                    <h3 className="pb-2">GROUP 10</h3>
                    <span className="pt-5 text-left">
                      <p>Start location: 50 Hoang Hoa Tham</p>
                      <p>Finish location: 250 Ly Thai To</p>
                      <p>Time start: 07:00</p>
                      <p>Detour Start location: 0.2km</p>
                      <p>Detour Finish location: 1.5km</p>
                      <p>Available Seats: 1</p>
                    </span>
                    <button
                      className="btn btn-primary profile-button mt-3"
                      type="button"
                    >
                      Choose Group
                    </button>
                    {/* <span className="more">Mouse over the card for more info</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default GroupForm;
