import React from "react";
import logo from "../assets/images/logo.png";
import "../App.css";
import "react-slideshow-image/dist/styles.css";
import discord2 from "../assets/images/bluediscord.png";
import twiter from "../assets/images/twitter.png";
import discord from "../assets/images/discord.png";
import { members } from "../mockup";

const Footer = () => {
  return (
    <>
      
      <div className="light-footer">
        <div className="page-description">
          <div>
            <img src={logo} alt="logo" className="description-img" />
            <p>LIGHT BODIES</p>
          </div>
          <br />
          {/* <p className="description">
            A collection of 10,000 apes born on Ethereum and censored on Solana
            despite having a completely unique combination of traits from the
            original bored apes.{" "}
          </p> */}
          <div className="link-icon">
            <a href="https://twitter.com">
              <img src={twiter} alt="twitter" />
            </a>
            <a href="https://discord.com/channels/895500595090325504/895500832743751720">
              <img src={discord} alt="discord" />
            </a>
          </div>
        </div>
          <div>        
            <p className="description">
              Copyright © PENTEST Light Bodies All rights reserved
            </p>
        </div>
        {/* <div className="page-footer-link">
          <p className="useful-link">useful Link</p>
          <p>Home</p>
          <p>Minting app</p>
          <p>attributes</p>
          <p>Support</p>
        </div> */}
        {/* <div className="discord-member">
          <div className="discord-member-header">
            <img src={discord2} alt="discord" />
            <p>42425 member online</p>
          </div>
          <div className="discord-member-body">
            <p>Member Online</p>
            <ul>
              {members.map((men, index) => {
                return (
                  <li key={`men-${index}`}>
                    <img src={men.avatar} alt="avatar" />
                    <p>{men.discord_name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Footer;
