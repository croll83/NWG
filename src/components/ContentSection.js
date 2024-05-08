import React from 'react';
import './ContentSection.css';

function ContentSection({ text, lines, image }) {
  return (
    <div className="content-section">
      <h2>$NWG Tokenomics and Manifesto</h2>
      <p><strong>NotWifGary [$NWG]</strong> is a memecoin that will soon launch on Linea, a Layer 2 zkEVM built atop Ethereum, powered by the Consensys zkEVM tech stack. The project's supporters aim for a genuinely fair launch, ensuring adequate decentralization throughout the process:</p>
      <ul>
          <li>$NWG will be a vanilla ERC20 token, deployed from a multisig Safe address with all Original Project Supporters as signatories.</li>
          <li>There will be no admin keys, no minting roles, and no contract upgradability.</li>
          <li>The total supply will be 69 billion tokens.</li>
          <li>The ETH liquidity pool (LP) side will be funded in a decentralized manner through community donations, facilitated by setting up a StationX on Linea.</li>
          <li>All tokens will be deposited into a pool on the Lynex DEX on Linea.</li>
          <li>100% of the LP will be locked for 66 years, corresponding to the age of Mr. Gary Gensler.</li>
          <li>There will be no $NWG allocations for CEX/DEX/Market Makers, no $NWG treasury, or paid KOLs. This ensures a 100% fair launch.</li>
          <li>A 2% tax will be imposed on DEX trades to accumulate funds for a DAO treasury.</li>
      </ul>
      <p>Initially, the treasury will be managed via the same deployer multisig. Once the treasury reaches the equivalent of $100K in ETH, the community will be prompted to establish a formal DAO. Subsequently, Project Sponsors will transfer the entire treasury there and redirect the tax address to the DAO's treasury.</p>
      <p><strong>NotWifGary [$NWG]</strong> aims to critique regulators who attempt to extend their jurisdictional boundaries over Ethereum inappropriately. Open source cannot be regulated as a security, and developers should not be subjected to undue scrutiny.</p>
      <p>$NWG symbolizes support for Crypto Firms engaged in legal battles with U.S. regulators and signals the stance of $NWG holders in this conflict: <strong>#ETHforALL</strong>.</p>
      <h3>Why a TAX on DEX trades?</h3>
      <p>The ETH collected from the tax will be governed by a DAO, formed if the treasury accumulates substantial funds. Potential uses for these funds include:</p>
      <ul>
          <li>Supporting legal costs for smaller dapps or individual developers within the crypto ecosystem facing SEC lawsuits.</li>
          <li>Funding in-real-life events to demonstrate support for the crypto industry against regulators' misconduct globally.</li>
          <li>Rewarding community members who provide dedicated services such as moderation, content creation, graphics, website maintenance, etc.</li>
      </ul>
      <p>All decisions regarding the use of funds will be managed through DAO proposals and voted on by $NWG token holders.</p>
    </div>

  );
}

export default ContentSection;
