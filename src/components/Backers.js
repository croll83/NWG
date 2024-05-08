import React from 'react';
import Slider from 'react-slick';
import './Backers.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import csiLogo from '../assets/img/consensys-logo.png';
import cbLogo from '../assets/img/coinbase-logo.png';
import uniLogo from '../assets/img/uniswap-logo.png';
import rhLogo from '../assets/img/rh-logo.png';
import whosnext from '../assets/img/whosnext.png';

function Backers({ backers }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }
    }, {
      breakpoint: 300,
      settings: "unslick" // destroys slick
    }]
  };

  return (
    <div className="backers">
      <h2>$NWG Original Supporters</h2>
      <Slider {...settings}>
        {backers.map((backer, index) => (
          <div key={index} className="backers-item">
            <a href={backer.twitter} target="_blank" rel="noopener noreferrer">
              <img
                src={require(`../assets/img/${backer.imgname}`)} // Dynamically import image
                alt={backer.nickname}
                className="backers-image"
              />
              <h3>{backer.nickname}</h3>
              <p className="title">{backer.title}</p>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Backers;
