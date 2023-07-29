import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1 className="project-name"> {project.name}</h1>
      <img src={project.image} alt={project.name} />
      <div className="text-container">
        <p className="project-skills">{project.description}</p>
      </div>

      <a target="_blank" rel="noreferrer" href={project.url}>
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
