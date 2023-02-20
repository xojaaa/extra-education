import React, { useState } from "react";
import Logo from "../images/extraLogo.png";
import { NavLink } from "react-router-dom";

import "../css/navbar.css";

function Navbars() {
  return (
    <>
      <nav className="navbar navbar-expand-md  navbar-light">
        <div className="container p-0">
          <a className="navbar-brand" href="#">
            <img className="extraLogo" src={Logo} alt="" />
            <span className="extraText">Extra</span>
          </a>
          <button
       
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse d-xl-flex justify-content-xl-end "
            id="collapsibleNavbar"
          >
            
               <ul className="navbar-nav menuLinks">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about">
                  Aboute
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="courses">
                  Test
                </NavLink>
              </li>
            </ul>
            </div>
           
      
        </div>
      </nav>

   
    </>
  );
}

export default Navbars;
