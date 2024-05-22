import React from "react";
import './Nav.css'
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light z-index-3 py-3">
      <div className="container">
        <Link to={'/'}
          className="navbar-brand"
          href=""
          rel="tooltip"
          title="Designed and Coded by Creative Tim"
          data-placement="bottom"
          target="_blank"
        >
          Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Link>
        <div className="collapse navbar-collapse " id="navigation">
          <ul className="navbar-nav navbar-nav-hover mx-auto menuElements">
            <li className="nav-item px-3">
              <Link to={'/'} className="nav-link">Home</Link>
            </li>

            <li className="nav-item px-3">
              <Link to={'/services'} className="nav-link">Services</Link>
            </li>

            <li className="nav-item px-3">
              <Link to={'/work'} className="nav-link">Works</Link>
            </li>

            <li className="nav-item px-3">
              <Link to={'/about'} className="nav-link ">About Me</Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <Link to={'/contact'}>
            <button className="btn bg-gradient-primary mb-0 buyNowBtn">Connect</button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;