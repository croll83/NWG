import React from 'react';
import './IntroSection.css';

function IntroSection({ text, lines, image }) {
  return (
    <div className="intro-section">
        <p className="carousel">The SEC and Gary Gensler are trying to regulate Ethereum by going too far over their jurisdiction. Open source cannot be a regulated security, and open-source developers can't be scrutinized.</p>
        <p className="carousel">We stand for the Crypto companies that will engage in a legal battle with the SEC and we signal where we sit: </p>
        <p className="carousel" style= {{fontSize: '2em'}} >#ETHforALL</p>
    </div>
  );
}

export default IntroSection;
