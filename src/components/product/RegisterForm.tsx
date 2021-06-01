import React, { useState, RefObject, useRef, useEffect } from "react";
import { Link, Router, Redirect, useHistory } from "react-router-dom";
// import PersonalLogin from '../../../public/images/faces/face1.jpg';

const RegisterForm = () => {
  // const buttonRef = useRef();
  // const [isChecked, setIsChecked] = useState(false);
  // const [values, setValues] = useState({
  //     id: "",
  // })
  // const componentRef = useRef<HTMLInputElement | null>(null);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const {name, value} = e.target;
  //   setValues({
  //       ...values,
  //       [name]:value,
  //   });
  // setIsChecked(true);
  // console.log(isChecked);
  // console.log(name, value);

  // };
  let history = useHistory();
  const handlePR = () => {
    history.push("/personal-register");
  };
  const handleGR = () => {
    history.push("/group-register");
  };

  return (
    // <Router history = {history}></Router>
    <div className="container-fluid justify-content-center pt-5 bg-light">
      <form className="justify-content-center rounded row">
        <section className="col-12 col-sm-6 col-md-4 rounded p-4 bg-white">
          <h3 className="text-center pt-5 text-primary">REGISTRATION</h3>
          {/* <span className = "ml-auto"></span> */}
          <h5 className="text-center page-content pb-5 pt-2 text-primary">Choose your ridesharing role!</h5>
          <div className="d-flex mt-4 mb-2 pb-5 px-3 align-items-center">
            <div className="d-flex flex-column bd-highlight align-items-center mb-3">
              {/* <div className="p-2 bd-highlight"> */}
              {/* <img
                className="img-fluid"
                // src="/images/faces/face1.jpg"
                src = "/https://icon-library.com/passenger-512_95600.html"
                alt="personal-register"
              ></img>
              </div> */}
              <i className="fas fa-male fa-7x" style = {{color: "#4B49AC"}}></i>{" "}
              <div className="p-2 text-center bd-highlight">Passenger</div>
              <div className="p-2 bd-highlight">
                <div className="form-check pl-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioNoLabel"
                    id="radioNoLabel2"
                    value=""
                    onClick={handlePR}
                    // ref = {componentRef}
                    aria-label="..."
                  ></input>
                </div>
              </div>
            </div>
            <span className="ml-auto"></span>
            <div className="d-flex flex-column bd-highlight align-items-center mb-3">
              {/* <img
                className="img-fluid"
                src="/images/faces/face2.jpg"
                alt="personal-register"
              ></img> */}
              <i className="fas fa-car-alt fa-7x" style = {{color: "#4B49AC"}} ></i>

              <div className="text-center p-2 bd-highlight">Driver</div>
              <div className="p-2 bd-highlight">
                <div className="form-check pl-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioNoLabel"
                    id="radioNoLabel1"
                    value=""
                    aria-label="..."
                    onChange={handleGR}
                  ></input>
                </div>
              </div>
            </div>
            {/* </span> */}
          </div>
        </section>
      </form>
    </div>
  );
};
export default RegisterForm;
