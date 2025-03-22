import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="navbar sticky-top">
      <h3 style={{ marginLeft: "10px" }}>N-Tech</h3>
      <nav ref={navRef}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/admin/about">About Us</NavLink>
        <NavLink to="/admin/service">Services</NavLink>
        <NavLink to="/admin/register">Register</NavLink>
        <NavLink to="/admin/login">Login</NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};
