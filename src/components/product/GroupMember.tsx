import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./ChooseGroup.css";

function GroupMember() {
  return (
    <div className="container-fluid justify-content-center p-3 bg-light">
      <form className="justify-content-center rounded row">
        <section className="col-12 col-sm-12 col-md-10 rounded">
          {/* <button type="button" className="btn btn-primary">Thông tin cá nhân</button> */}
          <h3 className="text-left pb-3" style={{ margin: "0 -14px" }}>
            <button
              type="button"
              className="btn btn-primary btn-warning rounded btn-block pb-3 text-left font-weight-bold"
            >
              Your Ridesharing Group (delayed)
            </button>
          </h3>
          <div className="form-group row text-center text-align-center my-auto">
            <div className="col-12 h-100 text-success border font-weight-bold overflow-auto p-4 ">
              2020, 24 May: Driver Le Tam not going with group.
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 border p-3">
            <div className="row pl-3 pb-2 font-weight-bold">
                Group Information
</div>
              <div className="row">
                <label className="col-sm-4">Group Name:</label>
                <div className="col-sm-8">Name</div>
              </div>

              <div className="row">
                <label className="col-sm-4">Start time:</label>
                <div className="col-sm-8">7:00 a.m</div>
              </div>
              <div className="row">
                <label className="col-sm-4">Start Location:</label>
                <div className="col-sm-8">
                  120 Hoang Hoa Tham, Tay Ho, Ha Noi
                </div>
              </div>
              <div className="row">
                <label className="col-sm-4">Finish Location:</label>
                <div className="col-sm-8">
                  12 Ly Nam De, Hai Ba Trung, Ha Noi
                </div>
              </div>
              <div className="row">
                <label className="col-sm-4">Description:</label>
                <div className="col-sm-8">
                  Welcome to our group!
                </div>
              </div>
              <div className="row pt-2 pl-3 pb-2 font-weight-bold">
                Vehicle Information
</div>
              <div className="row pb-2">
                <div className="col-sm-4">Available Seats: </div>
                <div className="col-sm-8">1</div>
              </div>
              <div className="row pb-2">
                <div className="col-sm-4">Vehicle Type: </div>
                <div className="col-sm-8">Car</div>
              </div>
              <div className="row pb-2">
                <div className="col-sm-4">Vehicle Manufacture: </div>
                <div className="col-sm-8">Yamaha</div>
              </div>
              <div className="row pb-2">
                <div className="col-sm-4">License Plate: </div>
                <div className="col-sm-8">90M1-9701</div>
              </div>
              <div className="row pt-2 pl-3 pb-2 font-weight-bold">
                Member
</div>
              <div className="row pb-2 text-danger font-weight-bold">
                <div className="col-sm-4">Driver: </div>
                <div className="col-sm-8">Driver 1 - Phone number</div>
              </div>
              <div className="row pb-2">
                <div className="col-sm-4">Passenger: </div>
                <div className="col-sm-8">Passenger 1 - Phone number</div>
              </div>
              <div className="row border-top pt-4">
                <div className="col-sm-4"> Group Action</div>
                <div className="col-sm-8 d-flex justify-content-between">
                  <button
                    type="submit"
                    className="btn btn-pill btn-primary col-sm-5 rounded font-weight-bold"
                  >
                    Postpone
                  </button>
                  <button
                    type="submit"
                    className="btn btn-pill btn-warning col-sm-5 rounded font-weight-bold  mx-auto"
                  >
                    Leave Group
                  </button>
                </div>
              </div>
            </div>              

             
          </div>
        </section>
      </form>
    </div>
  );
}

export default GroupMember;
