import React from "react";
import { Link } from "react-router-dom";
import "./SelectAlgorithm.css";

function SelectAlgorithm() {
  return (
    <div id="choose">
      <h2>Choose Your Cryptography Algorithm</h2>
      <br />

      {/* Horizontal Feature Cards */}
      <div className="feature-card">
        <div>
          <h3>🔒 Hashing</h3>
          <p>Convert data into fixed values securely.</p>
        </div>
        <Link to="/hash" className="btn btn-info">Explore</Link>
      </div>

      <div className="feature-card">
        <div>
          <h3>🔑 Symmetric</h3>
          <p>Encryption with a shared key.</p>
        </div>
        <Link to="/symmetric" className="btn btn-info">Explore</Link>
      </div>

      <div className="feature-card">
        <div>
          <h3>🔐 Asymmetric</h3>
          <p>Encryption with public/private key pairs.</p>
        </div>
        <Link to="/asymmetric" className="btn btn-info">Explore</Link>
      </div>
    </div>
  );
}

export default SelectAlgorithm;
