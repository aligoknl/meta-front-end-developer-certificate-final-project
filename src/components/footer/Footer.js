import React from "react";
import "./Footer.css";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-background">
        <div className="footer-container">
          <img src={Logo} alt="Little Lemon logo" />
          <p className="footer-desc">
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally sourced menu with daily specials.
          </p>
          <div className="footer-content">
            <div className="contact">
              <h5>CONTACT US</h5>
              <ul>
                <li>Green Street 400, Amsterdam 1000JJ</li>
                <li>Tel: 06 9000 999 99</li>
                <li>Email: hello@littlelemon.com</li>
              </ul>
            </div>
            <div className="opening-times">
              <h5>OPENING TIMES</h5>
              <ul>
                <li>Mon - Fri: 10:30AM - 12:00AM</li>
                <li>Sat - Sun: 12:00PM - 02:00AM</li>
              </ul>
            </div>
            <div className="follow-us">
              <h5>FOLLOW US</h5>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow us on Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow us on Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow us on Facebook
                  </a>
                </li>{" "}
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>2023 © Little Lemon. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
