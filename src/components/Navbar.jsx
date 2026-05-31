import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">MD MAZDER RAHMAN</div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/research">Research</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/teaching">Teaching</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/projects">More</Link>
      </nav>
    </header>
  );
};

export default Navbar;
