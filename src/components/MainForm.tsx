import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";



export const MainForm = ({ history }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => setLoading(false), 2000);
  },[])

  if (loading) {
    return (<div className='loading'>
      <BeatLoader color='#123abc' loading={loading} size={20} />
    </div>)
  }

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="text-align-center m-auto mf-header">
          <h3 className=" font-weight-bold pb-3">
            Welcome to Ridesharing Application
          </h3>
          <h6 className="font-weight-normal mb-0 pb-2">
            An application lets you arrange ridesharing with your co-workers and
            neighbors.{" "}
          </h6>
          <div className="justify-content-center d-flex py-3">
            <button
              className="btn btn-warning px-5 fs-40 text-primary"
              type="button"
            // href = "login"
            // id="dropdownMenuDate2"
            // data-toggle="dropdown"
            // aria-haspopup="true"
            // aria-expanded="true"
            >
              <Link to="/login" target="" aria-label="Login" >
                <div className="text-dark font-weight-bold ">JOIN NOW!</div>
              </Link>
            </button>
            {/* <div
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
                </Link> */}
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card tale-bg">
              {/* <div className="m-auto card-body text-primary font-weight-normal">
                Enjoy your ridesharing journey
              </div> */}
              <div className="pt-4">
                <Button className="btn-dark-blue d-flex m-auto mt-4">
                  <a href="https://edu.gcfglobal.org/en/sharingeconomy/what-is-ridesharing/1/" target="_blank" aria-label="Login" >
                    Learn more about the ridesharing system
                  </a>
                </Button>
              </div>
              <div className="card-people mt-auto">
                <img
                  className="img-fluid"
                  src="https://www.bootstrapdash.com/demo/skydash/template/images/dashboard/people.svg"
                  alt="people"
                />
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
                    <p className="mb-4">Vehicles</p>
                    <p className="fs-30 mb-2">55</p>
                    <p>cars and motorbikes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 stretch-card transparent">
                <div className="card card-light-blue">
                  <div className="card-body">
                    <p className="mb-4">Passengers</p>
                    <p className="fs-30 mb-2">55</p>
                    <p> join to rideshare</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 stretch-card transparent">
                <div className="card card-light-danger">
                  <div className="card-body">
                    <p className="mb-4">Members</p>
                    <p className="fs-30 mb-2">50</p>
                    <p>13 drivers</p>
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
            Copyright © 2021.
          </span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            Bachelor Thesis
          </span>
        </div>
      </footer>
    </div>
  );
};
