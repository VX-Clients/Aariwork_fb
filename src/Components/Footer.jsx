import React from "react";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import "./CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footeer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
          <img
            src="./src/assets/logo.png"
            alt="AariWork Logo"
            className="max-h-8"
          />
          </Link>
          <p>Empowering women through the art of Aari embroidery since 2020.</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/aari_design_kalai.73/" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="https://www.youtube.com/@kalaiarasi4291" aria-label="YouTube">
              <Youtube />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/designs">Designs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/policy">Privacy Policy & Terms and Conditions</Link>
            </li>
            
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <MapPin className="icon" />
              <span>Chennai, India</span>
            </li>
            <li>
              <Mail className="icon" />
                <a href="mailto:kalaiarasi6067@gmail.com">kalaiarasi6067@gmail.com</a>
            </li>
            <li>
              <Phone className="icon" />
              <a href="tel:+919445738281">+91 94457 38281</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()}<a href="https://www.vibexio.ai/" className="link">  VibeXio.AI</a>  All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
