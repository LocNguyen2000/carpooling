import React from 'react'
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo mr-5" href="index.html"><img src="https://png2.cleanpng.com/sh/b524e8d8c4f88df408073570628a5598/L0KzQYq3VsI3N6FngpH0aYP2gLBuTfNieqF0h942cHXogn77j71xbZZ3ReRyZHX2eLL5if5oNZ10f9G2bInphH7qjf8ubaR5ReZ7aYDncX68hME0aWY6TKIEYkLnR3ABWck6PGU8TqMANkG4Rom8WcYxO2o8RuJ3Zx==/kisspng-carpool-peer-to-peer-ridesharing-logo-lyft-cmo-est-tripda-5d13a55409b2d7.8999447615615685960397.png" className="ml-5" alt="logo"/></a>
        {/* <a className="navbar-brand brand-logo-mini" href="index.html"><img src="https://www.bootstrapdash.com/demo/skydash/template/images/logo-mini.svg" alt="logo"/></a> */}
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span className="icon-menu"></span>
        </button>
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item nav-search d-none d-lg-block">
            <div className="input-group">
              <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                <span className="input-group-text" id="search">
                <i className="icon-search"></i>
                </span>
              </div>
              <input type="text" className="form-control" id="navbar-search-input" placeholder="Search..." aria-label="search" aria-describedby="search">
                  </input>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          {/* <li className="nav-item dropdown">
            <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
              <i className="icon-bell mx-0"></i>
              <span className="count"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
              <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-success">
                    <i className="ti-info-alt mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">Application Error</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    Just now
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-warning">
                    <i className="ti-settings mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">Settings</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    Private message
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-info">
                    <i className="ti-user mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">New user registration</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    2 days ago
                  </p>
                </div>
              </a>
            </div>
          </li> */}
          <li className="nav-item nav-profile dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
              <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="profile"/>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              {/* <a className="dropdown-item">
                <i className="ti-settings text-primary"></i>
                Settings
              </a> */}
              <a className="dropdown-item">
                <i className="ti-power-off text-primary"></i>
                <Link to = "/login" onClick={() => localStorage.clear()} style={{color: '#000'}}>Logout</Link> 
              </a>
            </div>
          </li>
          {/* <li className="nav-item nav-settings d-none d-lg-flex">
            <a className="nav-link" href="#">
              <i className="icon-ellipsis"></i>
            </a>
          </li> */}
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="icon-menu"></span>
        </button>
      </div>
    </nav>
        </>
    )
}