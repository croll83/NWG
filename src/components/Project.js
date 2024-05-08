import React from 'react';
import './Project.css';

function Project({ text, lines, image }) {
  return (
    <div className="project-section">
        <h2>$NWG Launch and Risks</h2>
        <div>
          <p><strong>$NWG</strong> strives for maximal decentralization throughout the entire process, including the ETH funds used for the initial LP setup on the Lynex DEX pool. The project approaches this by establishing a Station on StationX, enabling community members to donate ETH. These donations will support the LP setup, with participants minting soulbound NFTs (SBT) to join the <strong>NotWifGary Station</strong> and support the launch.</p>
          <p>Donations are accepted only in ETH (Linea ETH), with a minimum of 0.01ETH (1 SBT) and a maximum of 0.1ETH (10 SBT) per donor. The donation period remains open until 22nd May, 8AM GMT, with a cap of 10ETH in total contributions. By donating, users:</p>
          <ul>
              <li>Support the launch of the $NWG project.</li>
              <li>Gain the ability to participate in conversations and decision-making processes prior to the establishment of a DAO.</li>
              <li>Receive an $NWG Project Supporter SBT, symbolizing their early support.</li>
          </ul>
          <p><em>Please note, this is not a presale! Joining the $NWG Station does not grant any rights to allocations or supplies of $NWG tokens at launch.</em></p>
          <p>Original Supporters (signatories) of the $NWG Station will hold no control over the $NWG contract. Technically, their only role is to manage the treasury collected from taxes until it reaches $100K, at which point it will be transferred to a properly established DAO. They are committed to refraining from any actions with the treasury until it is officially handed over.</p>

          <h3>$NWG Risks</h3>
          <p>Deploying the full supply into an LP and having no treasury allocations expose users to several risks:</p>
          <ul>
              <li>Lack of Market Maker support could lead to high volatility, with potential financial losses for users.</li>
              <li>Malicious actors could purchase large quantities of $NWG immediately after launch, risking a vampire attack on the token, which could lead to further losses.</li>
          </ul>

          <p>$NWG is initiated as a fun project by its Original Project Supporters. The primary goal is enjoyment, without a formal roadmap, plans, or a dedicated team.</p>

          <p>$NWG aims to launch and inspire a community to form around the narrative and ideals of mocking the SEC and its Chairman.</p>

          <p><strong>LFG!</strong></p>
      </div>
    </div>
  );
}

export default Project;
