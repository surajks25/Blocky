
import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div id="main">
      <div id="rightPage">
        <h1>🧑‍💻 Welcome To</h1>
        <h1>Crypto Showcase</h1>
        <p>Explore Hashing, Symmetric, and Asymmetric Cryptography.</p>
        <Link to="/select">
          <button id="btn">Get Started</button>
        </Link>
      </div>
      <div id="leftSpline">
        <spline-viewer url="https://prod.spline.design/mUhMXnWwUV3VYTJK/scene.splinecode"></spline-viewer>
      </div>
    </div>
  );
}

export default LandingPage;
