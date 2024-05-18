import React from "react";
import './Nav.css'

// Icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// Nav Data
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "services", path: "/services", Icon: HiRectangleGroup },
  { name: "work", path: "/work", Icon: HiViewColumns },
  {
    name: "testimonials",
    path: "/testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light z-index-3 py-3">
      <div className="container">
        <a
          className="navbar-brand"
          href=""
          rel="tooltip"
          title="Designed and Coded by Creative Tim"
          data-placement="bottom"
          target="_blank"
        >
          Soft UI Design System
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navigation">
          <ul className="navbar-nav navbar-nav-hover mx-auto menuElements">
            <li className="nav-item px-3">
              <a className="nav-link">Home</a>
            </li>

            <li className="nav-item px-3">
              <a className="nav-link">Services</a>
            </li>

            <li className="nav-item px-3">
              <a className="nav-link">Works</a>
            </li>

            <li className="nav-item px-3">
              <a className="nav-link ">Testimonals</a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <button className="btn bg-gradient-primary mb-0 buyNowBtn">Connect</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
