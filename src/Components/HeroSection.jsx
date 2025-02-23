import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./HeroSection.css"; // Import CSS for styling

function HeroSection() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleNavigation = () => {
    navigate("/gallery"); // Navigate to the Gallery page
  };

  return (
    <div className="hero">
      <div className="hero-content slideInLeft">
        <h1>Welcome to<br /> V's World</h1>
        <p>Explore the artistry and talent of Kim Taehyung</p>
        <button className="btn-1 btn-purple" onClick={handleNavigation}>
          <span>A Glimpse of V</span>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
