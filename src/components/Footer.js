import React from "react";

import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/" target="_blank">
          {" "}
          <BsInstagram />
        </a>

        <BsTwitter />

        <a href="https://twitter.com/?lang=en-in" target="_blank">
          {" "}
          <AiFillFacebook />
        </a>

        <a
          href="https://www.linkedin.com/in/rajat-agrawal-22568a244/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
      <p> &copy;2023 @rajat</p>
    </div>
  );
}

export default Footer;
