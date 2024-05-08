import React from 'react';
import './Footer.css'; // Make sure your CSS file is linked

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <p>Join the movement, have fun, free ETH from SEC!</p>
        <p>© 2024 Insecurity Exchange Chuckmission</p>
        <p>All rights reserved.</p>
      </div>
      <ul className="footer-links">
        <li><a href="#" target="_blang" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="#" target="_blang" rel="noopener noreferrer">Telegram</a></li>
        <li><a href="https://app.lynex.fi" target="_blang" rel="noopener noreferrer">Lynex</a></li>
        <li><a href="#" target="_blang" rel="noopener noreferrer">StationX</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
