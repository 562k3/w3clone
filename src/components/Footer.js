import React from "react";
import "../App.css";
import { AiFillFacebook } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <a href="https://discord.com/channels/@me">
          <BsDiscord />
        </a>
        <a href="https://www.linkedin.com/in/harshitarajput/">
          <AiFillLinkedin />
        </a>
        
      </div>
      <div className="copyright">
        Copyright &#169; 
      </div>
    </div>
  );
};

export default Footer;
