import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SelectAlgorithm from "./pages/SelectAlgorithm";
import HashingPage from "./pages/HashingPage";
import SymmetricPage from "./pages/SymmetricPage";
import AsymmetricPage from "./pages/AsymmetricPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/select" element={<SelectAlgorithm />} />
        <Route path="/hash" element={<HashingPage />} />
        <Route path="/symmetric" element={<SymmetricPage />} />
        <Route path="/asymmetric" element={<AsymmetricPage />} />
      </Routes>
    </Router>
  );
}

export default App;

