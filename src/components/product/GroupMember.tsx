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
            <div className="col-md-6 border p-3">
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
              <div className="row border-top pt-2">
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
            <div className="col-md-6 p-3 border">
              <div className="d-flex flex-column text-align-center">
                <div className="row">
                  <div className="col-md-2 border-right">Member</div>
                  <div className="col-md-10 border-right">
                    <div className="row pb-2 border-bottom text-danger">
                      <div className="col-md-12">Driver: Le Tam </div>
                      <div className="col-md-12">Phone number: 0338566329</div>
                    </div>
                    <div className="row pt-1 pb-1">
                      <div className="col-md-12">
                        Passenger: Tran Van A
                        {/* <div className="text-danger">(postponed)</div> */}
                      </div>

                      <div className="col-md-12">Phone number: 0338566329</div>
                    </div>
                    <div className="row pb-1">
                      <div className="col-md-12">Passenger: Nguyen Van B </div>
                      <div className="col-md-12">Phone number: 0338566329</div>
                    </div>
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

export default GroupMember;
