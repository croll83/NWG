import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/img/hero-nwg.png';
import scrollDown from '../assets/img/scroll-down.png';

function HeroSection() {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <h1 className="matrix-effect">NotWifGary $NWG</h1>
      <img src={scrollDown} alt="Scroll down" className="scroll-down-gif" />
    </div>
  );
}

export default HeroSection;
