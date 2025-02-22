import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";  // Ensure correct import
import Gallery from "./Components/Gallery";

function App() {
  return (
    <Router>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>

  );
}

export default App;




