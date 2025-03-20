import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            N-Tech
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link active" aria-current="page" href="#">
                  <NavLink to="/">Home</NavLink>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#">
                  <NavLink to="/about">About Us</NavLink>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#">
                  <NavLink to="/service">Services</NavLink>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#">
                  <NavLink to="/contact">Contact Us</NavLink>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#">
                  <NavLink to="/register">Register</NavLink>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#">
                  <NavLink to="/login">Login</NavLink>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
