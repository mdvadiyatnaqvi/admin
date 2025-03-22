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

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header className="navbar sticky-top">
      <h3 style={{ marginLeft: "30px" }}>N-Tech</h3>
      <nav ref={navRef}>
        <NavLink to="/" onClick={hideNavbar}>
          Home
        </NavLink>
        <NavLink to="/admin/about" onClick={hideNavbar}>
          About Us
        </NavLink>
        <NavLink to="/admin/service" onClick={hideNavbar}>
          Services
        </NavLink>
        <NavLink to="/admin/register" onClick={hideNavbar}>
          Register
        </NavLink>
        <NavLink to="/admin/login" onClick={hideNavbar}>
          Login
        </NavLink>
        <button className="nav-btn nav-close-btn" onClick={hideNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};
