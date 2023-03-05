import React from "react";
import "./Projects.css"
import ProjectCard from "./Project Card/ProjectCard";
import projects from "../../../Projects.json";

function Projects() {
  return (
    <div className="projectsMain container">
      <h1>Projects Page</h1>
      <p>
        This is a selection of my previous Challenges that I created during my bootcamp using the following skills:
      </p>
      <div className="skillList">
      <ul>
        <li><i className="fab fa-html5 fa-x"> HTML</i></li>
        <li><i className="fab fa-css3-alt fa-x"> CSS</i></li>
        <li><i className="fab fa-js-square fa-x"> JavaScript</i></li>
        <li><i className="fab fa-node-js fa-x"> Node</i></li>
        <li><i className="fab fa-react fa-x"> React</i></li>
      </ul>
      </div>
      <div>
        <h3 className="projectsTitle">Projects:</h3>
        <div className="projects">
        {projects.map(p => <ProjectCard name={p.name} description={p.description} img={p.image} />)}
      </div>
      </div>
      {/* need six links to six challenge projects
Must render six instances of the Project component dynamically

Be sure to store your project details data in a JSON file and import it into your project (spongebob project)

Project:

Must be a reusable component that ingests JSON data as props and renders a single instance for each project

Must utilize Router props to properly render the right project based on user selection

Must render the following info:

Project title

Link to the deployed version

Link to the GitHub repository

GIF or screenshot of the deployed application */}
    </div>
  );
}

export default Projects;
