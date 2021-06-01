import React from "react";
import { Link } from "react-router-dom";

export const MainForm = () => {
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="row">
              <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                <h3 className="font-weight-bold">
                  Welcome to Ridesharing Application
                </h3>
                <h6 className="font-weight-normal mb-0">
                An application lets you arrange ridesharing with your co-workers and neighbors.                 </h6>
              </div>
              <div className="col-12 col-xl-4">
                <div className="justify-content-end d-flex">
                  <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                    <button
                      className="btn btn-sm btn-light bg-white dropdown-toggle"
                      type="button"
                      id="dropdownMenuDate2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      <i className="mdi mdi-calendar"></i>
                      <b>Join Now</b>
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuDate2"
                    >
                      <Link
                        to="/register"
                        target="_blank"
                        aria-label="Register"
                        className="dropdown-item"

                      >
                        Register
                      </Link>

                      <Link
                        to="/login"
                        target="_blank"
                        aria-label="Register"
                        className="dropdown-item"
                      >
                        Login
                      </Link>
                      {/* <a className="dropdown-item" href="#">Thông qua ATM</a> */}
                      {/* <a className="dropdown-item" href="#">Thông qua MOMO</a>
                      <a className="dropdown-item" href="#">Thông qua Paypal</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card tale-bg">
              <div className="card-people mt-auto">
                <img
                  src="https://www.bootstrapdash.com/demo/skydash/template/images/dashboard/people.svg"
                  alt="people"
                />
                <div className="weather-info">
                  <div className="d-flex text-black">
                    <div>
                      <h2 className="mb-0 font-weight-normal">
                        <i className="icon-sun mr-2"></i>31<sup>C</sup>
                      </h2>
                    </div>
                    <div className="ml-2">
                      <h4 className="location font-weight-normal">Hanoi</h4>
                      <h6 className="font-weight-normal">Vietnam</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin transparent">
            <div className="row">
              <div className="col-md-6 mb-4 stretch-card transparent">
                <div className="card card-tale">
                  <div className="card-body">
                    <p className="mb-4">Ridesharing groups</p>
                    <p className="fs-30 mb-2">13</p>
                    <p>50 members</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4 stretch-card transparent">
                <div className="card card-dark-blue">
                  <div className="card-body">
                    <p className="mb-4">Available Seats</p>
                    <p className="fs-30 mb-2">55</p>
                    <p>3 available groups</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                <div className="card card-light-blue">
                  <div className="card-body">
                    <p className="mb-4">Cities</p>
                    <p className="fs-30 mb-2">5</p>
                    <p>+1 this month</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 stretch-card transparent">
                <div className="card card-light-danger">
                  <div className="card-body">
                    <p className="mb-4">Member</p>
                    <p className="fs-30 mb-2">50</p>
                    <p>+10.22% this month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
            Copyright © 2021. Premium{" "}
            <a href="https://www.bootstrapdash.com/" target="_blank">
              Bootstrap admin template
            </a>{" "}
            from BootstrapDash. All rights reserved.
          </span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            Hand-crafted & made with{" "}
            <i className="ti-heart text-danger ml-1"></i>
          </span>
        </div>
      </footer>
    </div>
  );
};
