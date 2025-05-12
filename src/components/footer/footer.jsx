import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="contact-page">
      <div className="overlay">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>KingsHome</h2>
            <p>
              KingsHome offers premium real estate services. Buy or sell your home with confidence.
              Our experts ensure a seamless experience from start to finish.
            </p>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Buy</a></li>
              <li><a href="#">Sell</a></li>
              <li><a href="#">Agents</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: abdulazeezmustapha204@gmail.com</p>
            <p>Phone: +234 705-050-4918</p>
            {/* <p>Address: 123 Kings Street, Realty City</p> */}
          </div>
        </div>

        <footer className="footer-bottom">
          <p>© 2025 KingsHome. All rights reserved.</p>
          <p>Design: Mustarphy Graphics | Developer: Musty Tech</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
