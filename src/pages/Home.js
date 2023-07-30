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
        <div className="hello-container">
          <h2 className="hello-1"> Hi, my name is</h2>
          <h2 className="hello-2"> Brandon!</h2>
        </div>
        {/* <div className="prompt">
        

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
      </div> */}
        {/* <div className="skills">
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
      </div> */}
      </div>
    </div>
  );
}

export default Home;
