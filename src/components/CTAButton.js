import React from 'react';
import './CTAButton.css';

function CTAButton({ link }) {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Get Involved!</h2>
      <div className="cta-section">
        <p>To become a Project Supported and get involved, you just have to join the $NFG Station.</p>
        <p>To do this you have to click on the following button and mint at least 1 SBT (0.01ETH)</p>
        <p>You need to have at least 0.015ETH on Linea. If you don't you have multiple options:</p>
        <ul>
            <li>If you have ETH on Mainnet, simply send any amount from your wallet to "bridge.onlinea.eth". They will be automatically bridged in few seconds.</li>
            <li>If you have ETH on other L2s or other Networks, just go on https://bridge.linea.build and pick one of the bridge partners that can help you easily bridge you ETH on Linea</li>
            <li>If you have ETH on other Networks and you are a MetaMask user, you can simply use the builtin feature from MetaMask to bridge ETH to Linea</li>
            <li>If you are a user of any Centralized Exchange supporting Linea (OKX, Bybit, Bitget, Gate, KuCoin, Huobi, MexC, LBank and more) you can simply withdraw your ETH directly on Linea</li>
            <li>If you hold no ETH you can consider to buy some directly in MetaMask (with ApplePay, GooglePay, PayPal, Revolut, RobinHood, etc) and have them delivered directly on Linea (select Linea Network before you click Buy in MetaMask)</li>
        </ul>
      </div>
      <a href={link} style={{ textDecoration: 'none' }}>
        <button style={{ backgroundColor: 'green', color: 'white', fontSize: '20px', padding: '15px 30px' }}>Join $NWG!</button>
      </a>
    </div>
  );
}

export default CTAButton;
