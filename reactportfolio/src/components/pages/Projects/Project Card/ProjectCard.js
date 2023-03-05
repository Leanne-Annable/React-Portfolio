import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.name}
          src={props.img}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
        </ul>  
      </div>
      <div className="webLink">
        <a href={props.link} target="_blank"  rel="noopener noreferrer"><strong>Click here for the live web page.</strong></a>
        </div>
    </div>
  )
}

export default ProjectCard;