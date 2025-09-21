

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav id="Navbar" className="p-3">
      <div className="d-flex justify-content-between align-items-center">
        {/* Brand */}
        <div className="fw-bold fs-4">Blocky</div>

        {/* Bootstrap Nav */}
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link blue" to="/select">
              Get Started
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/introduction">
              Introduction
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
