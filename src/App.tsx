import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavBar } from "./containers/NavBar";
import { SideBar } from "./containers/SideBar";
import { MainForm } from "./components/MainForm";

import LoginForm from "./components/product/LoginForm";
import RegisterForm from "./components/product/RegisterForm";
import PassengerRegisterForm from "./components/product/PassengerlRegister";
import DriverRegisterForm from "./components/product/DriverRegister";
import IntroductionForm from "./components/product/IntroductionForm";
import ProfileForm from "./components/product/ProfileForm";
import DriverProfileForm from "./components/product/DriverProfileForm";
import UserGuildForm from "./components/product/UserGuildForm";
import GroupForm from "./components/product/GroupForm";
import ChooseGroup from "./components/product/ChooseGroup";
import CreateGroup from "./components/product/CreateGroup";
// import GroupMember from "./components/product/GroupMember";



function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar></NavBar>
        <div className="container-fluid page-body-wrapper">
          <SideBar />
          <Switch>
            <Route path="/" exact component={MainForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/personal-register" component={PassengerRegisterForm} />
            <Route path="/driver-register" component={DriverRegisterForm} />
            <Route path="/group" component={GroupForm} />
            <Route path="/profile" component={ProfileForm} />
            <Route path="/driver-profile" component={DriverProfileForm} />
            {/* <Route path="/intro" component={IntroductionForm} /> */}
            {/* <Route path="/guild" component={UserGuildForm} /> */}
            <Route path="/find-group" component={ChooseGroup} />
            <Route path="/create-group" component={CreateGroup} />

            {/* <Route path="/group-register" component={RegisterForm} /> */}

          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
