// Footer.js
import React from "react";
import "../css/footer.css";
import logo from "../assets/little_lemon_logo.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon Logo" />
        </div>
        <div className="footer-contact">
          <p>Contact Us:</p>
          <p>123 Main Street, City</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
        </div>
      </div>
      <div className="footer-social">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
