import React from "react";
import { Link } from "react-router-dom";
import GroupMember from "./GroupMember";

function GroupForm() {
  return (
      <div className="container-fluid justify-content-center p-3 bg-light">
       <GroupMember></GroupMember>
        <form
          className="justify-content-center rounded row"
        >
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
              <div className = "text-gray pb-3">
                Ridesharing Information Missing!
              </div>
              <button
            type="submit"
            className="btn btn-pill btn-primary rounded mx-auto font-weight-bold"
          >
              <Link to="/profile" target="" aria-label="Profile" >
                Complete your Rideshare Profile now!
              </Link>
              </button>

            </div> 
          </section>
        </form>
      </div>
  );
}

export default GroupForm;
