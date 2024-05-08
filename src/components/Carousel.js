import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import csiLogo from '../assets/img/consensys-logo.png';
import cbLogo from '../assets/img/coinbase-logo.png';
import uniLogo from '../assets/img/uniswap-logo.png';
import rhLogo from '../assets/img/rh-logo.png';
import whosnext from '../assets/img/whosnext.png';

function Carousel({ type }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      <h2>What Overreach looks like</h2>
      <Slider {...settings}>
        <a href="" target="_blank" rel="noopener noreferrer">
        <div className="carousel-elem">
          <h3>Robin Hood Wells Notice</h3>
          <div className="content-row">
            <p>
              <span style={{display: 'block', marginBottom: '20px'}}>Consensys Sues the SEC to Defend the U.S. Ethereum Community.</span>
              <span style={{display: 'block', marginBottom: '20px'}}>The U.S. Securities and Exchange Commission’s (SEC) threatened regulation of ether as a security would jeopardize the United States’ ability to use Ethereum and similar blockchain technology.</span>
            </p>
            <img src={rhLogo} alt="Action Element"/>
          </div>
        </div>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <div className="carousel-elem">
            <h3>Consensys Lawsuit</h3>
            <div className="content-row">
              <p>
                <span style={{display: 'block', marginBottom: '20px'}}>Consensys Sues the SEC to Defend the U.S. Ethereum Community.</span>
                <span style={{display: 'block', marginBottom: '20px'}}>The U.S. Securities and Exchange Commission’s (SEC) threatened regulation of ether as a security would jeopardize the United States’ ability to use Ethereum and similar blockchain technology.</span>
              </p>
              <img src={csiLogo} alt="Action Element"/>
            </div>
          </div>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
        <div className="carousel-elem">
          <h3>Uniswap Lawsuit</h3>
          <div className="content-row">
            <p>
              <span style={{display: 'block', marginBottom: '20px'}}>Consensys Sues the SEC to Defend the U.S. Ethereum Community.</span>
              <span style={{display: 'block', marginBottom: '20px'}}>The U.S. Securities and Exchange Commission’s (SEC) threatened regulation of ether as a security would jeopardize the United States’ ability to use Ethereum and similar blockchain technology.</span>
            </p>
            <img src={uniLogo} alt="Action Element"/>
          </div>
        </div>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
        <div className="carousel-elem">
          <h3>Coinbase Lawsuit</h3>
          <div className="content-row">
            <p>
              <span style={{display: 'block', marginBottom: '20px'}}>Consensys Sues the SEC to Defend the U.S. Ethereum Community.</span>
              <span style={{display: 'block', marginBottom: '20px'}}>The U.S. Securities and Exchange Commission’s (SEC) threatened regulation of ether as a security would jeopardize the United States’ ability to use Ethereum and similar blockchain technology.</span>
            </p>
            <img src={cbLogo} alt="Action Element"/>
          </div>
        </div>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
        <div className="carousel-elem">
          <h3>Who's next?</h3>
          <div className="content-row">
            <p>
              <span style={{display: 'block', marginBottom: '20px'}}>Who will be the next on the line?</span>
              <span style={{display: 'block', marginBottom: '20px'}}>The U.S. Securities and Exchange Commission’s (SEC) will very likely continue and improve their oppressive outreach, eventually moving the target from Crypto Firms to individual developers of EIPs, etc.</span>
            </p>
            <img src={whosnext} alt="Action Element"/>
          </div>
        </div>
        </a>
      </Slider>
    </div>
  );
}

export default Carousel;
