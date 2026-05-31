import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        © {new Date().getFullYear()} MD MAZDER RAHMAN. All rights reserved.
      </div>

      <div className="footer-links">
        <a href="#hero">Top</a>
        <a href="#research">Research</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
