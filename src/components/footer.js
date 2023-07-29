import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/brandon-knight-21940a206/"
        >
          <LinkedInIcon />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/blksmk8483"
        >
          <GitHubIcon />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/brandon.knight.5815"
        >
          <FacebookIcon />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:knightbrandon1984@gmail.com"
        >
          <EmailIcon />
        </a>
      </div>
      <p>
        <a className="footer-a" href="/about">
          &copy; 2023 knighttechdesigns.com
        </a>
      </p>
    </div>
  );
}

export default Footer;
