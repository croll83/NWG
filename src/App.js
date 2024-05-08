import React from 'react';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import Carousel from './components/Carousel';
import Backers from './components/Backers';
import ContentSection from './components/ContentSection';
import Project from './components/Project';
import CTAButton from './components/CTAButton';
import Footer from './components/Footer';
import './App.css';
import backers from './assets/backers-content.js';

function App() {
  return (
    <div>
      <HeroSection />
      <IntroSection/>
      <Carousel/>
      <ContentSection />
      <Project />
      <CTAButton link="https://externalwebsite.com" />
      <Backers backers={backers}/>
      <Footer />
    </div>
  );
}

export default App;
