import React from "react";
import "./Projects.css"

function Projects() {
  return (
    <div className="projects">
      <h1>Projects Page</h1>
      <p>
        This is a selection of my previous Challenges that I created during my bootcamp
      </p>
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
