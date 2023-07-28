import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, my name is Brandon</h2>
        <div className="prompt">
          <p> A Love to learn</p>
          <LinkedInIcon />
          <GitHubIcon />
          <FacebookIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              HTML, CSS, ReactJS, MaterialUI, Bootstrap, TailwindCSS.......
            </span>
          </li>
        </ol>
        <ol className="list">
          <li className="item">
            <h2>Back-End</h2>
            <span>HTML, CSS, ReactJS,.......</span>
          </li>
        </ol>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>HTML, CSS, ReactJS,.......</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
