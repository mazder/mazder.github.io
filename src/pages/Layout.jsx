import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

// ✅ Correct Vite/React import (NO require)
import Me from "../assets/me.png";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main className="profile-container">

        {/* LEFT COLUMN (fixed profile sidebar) */}
        <div className="left-col">

          {/* PROFILE IMAGE */}
          <div className="profile-img">
            <img src={Me} alt="Profile" />
          </div>

          {/* NAME */}
          <div id="mazder">
            <h2>Md Mazder Rahman, PhD</h2>
          </div>

          {/* LINKS */}
          <div id="bio">
            <a
              href="https://www.linkedin.com/in/mazderphd/"
              target="_blank"
              rel="noreferrer"
            >
              🔗 Linkedin
            </a>

            <a
              href="https://github.com/mazder"
              target="_blank"
              rel="noreferrer"
            >
              💻 GitHub
            </a>

            <a
              href="https://scholar.google.ca/citations?hl=en&user=vAMt0LMAAAAJ"
              target="_blank"
              rel="noreferrer"
            >
              🎓 Google Scholar
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN (dynamic pages) */}
        <div className="right-col">
          <Outlet />
        </div>

      </main>

      <Footer />
    </>
  );
};

export default Layout;
