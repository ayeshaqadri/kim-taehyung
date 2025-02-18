import React from "react";
import "./HeroSection.css"; // Import CSS for styling
import MainPic from '../Images/kim-taehyung-main.webp'

function HeroSection() {  // ✅ Capitalized function name
  return (
    <div className="hero">
        
      <div className="hero-content slideInLeft">
        <h1>Welcome to V's World</h1>
        <p>Explore the artistry and talent of Kim Taehyung</p>
        <button class="btn-1 btn-purple"><span>Discover More</span></button>
      </div>
    </div>
  );
}

export default HeroSection; // ✅ Capitalized export
