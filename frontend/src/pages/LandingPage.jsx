// import React from "react";
// import { Link } from "react-router-dom";

// function LandingPage() {
//   return (
//     <div style={{ textAlign: "center", padding: "50px" }}>
//       <h1>Welcome to Crypto Showcase 🔐</h1>
//       <p>Explore Hashing, Symmetric, and Asymmetric Cryptography.</p>
//       <img src="https://i.ibb.co/NshWzcm/crypto-banner.png" alt="crypto" width="400px" />
//       <br /><br />
//       <Link to="/select">
//         <button style={{ padding: "10px 20px", fontSize: "18px" }}>Get Started</button>
//       </Link>
//     </div>
//   );
// }

// export default LandingPage;
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
