import React from 'react';
import { FaCar, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Info */}
        <div className="footer-brand">
          <div className="logo-wrapper">
            <FaCar className="footer-logo" />
            <span>FROSHAUTO</span>
          </div>
          <p>Redefining automotive excellence since 2015</p>
          <div className="social-links">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div className="link-column">
            <h4>Explore</h4>
            <Link to="/brands">Brands</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/offers">Special Offers</Link>
          </div>
          <div className="link-column">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/news">News</Link>
          </div>
          <div className="link-column">
            <h4>Support</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/support">24/7 Support</Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} LuxAuto. All rights reserved.</p>
        <p className="design-credit">Design by <span>FroshX</span></p>
      </div>
    </footer>
  );
};

export default Footer;