import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavBar } from "./containers/NavBar";
import { SideBar } from "./containers/SideBar";
import { MainForm } from "./components/MainForm";

import LoginForm from "./components/product/LoginForm";
import RegisterForm from "./components/product/RegisterForm";
import PassengerRegisterForm from "./components/product/PassengerRegister";
import DriverRegisterForm from "./components/product/DriverRegister";
import IntroductionForm from "./components/product/IntroductionForm";
import PassengerProfileForm from "./components/product/PassengerProfileForm";
import DriverProfileForm from "./components/product/DriverProfileForm";
import UserGuideForm from "./components/product/UserGuideForm";
import GroupForm from "./components/product/GroupForm";
import ChooseGroup from "./components/product/ChooseGroup";
import CreateGroup from "./components/product/CreateGroup";
// import GroupMember from "./components/product/GroupMember";



function App() {
  return (
    <React.Fragment>
      <Router>
          
          <Switch>
            <Route path="/" exact component={MainForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/passenger-register" component={PassengerRegisterForm} />
            <Route path="/driver-register" component={DriverRegisterForm} />
            <Route path="/group" component={GroupForm} />
            <Route path="/passenger-profile" component={PassengerProfileForm} />
            <Route path="/driver-profile" component={DriverProfileForm} />
            {/* <Route path="/intro" component={IntroductionForm} /> */}
            {/* <Route path="/guide" component={UserGuideForm} /> */}
            <Route path="/find-group" component={ChooseGroup} />
            <Route path="/create-group" component={CreateGroup} />

            {/* <Route path="/group-register" component={RegisterForm} /> */}

          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
