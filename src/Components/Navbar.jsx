import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./CSS/Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActivePath = (path) => location.pathname === path;
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        <img
            src="Images/logo.jpg"
            alt="AariWork Logo"
            className="max-h-8"
          />
        </Link>
        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${isActivePath("/") ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActivePath("/about") ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            to="/courses"
            className={`nav-link ${isActivePath("/courses") ? "active" : ""}`}
          >
            Courses
          </Link>
          <Link
            to="/designs"
            className={`nav-link ${isActivePath("/designs") ? "active" : ""}`}
          >
            Designs
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActivePath("/contact") ? "active" : ""}`}
          >
            Contact
          </Link>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <Link
            to="/"
            className={`mobile-link ${isActivePath("/") ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`mobile-link ${isActivePath("/about") ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            to="/courses"
            className={`mobile-link ${
              isActivePath("/courses") ? "active" : ""
            }`}
          >
            Courses
          </Link>
          <Link
            to="/designs"
            className={`mobile-link ${
              isActivePath("/designs") ? "active" : ""
            }`}
          >
            Designs
          </Link>
          <Link
            to="/contact"
            className={`mobile-link ${
              isActivePath("/contact") ? "active" : ""
            }`}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
