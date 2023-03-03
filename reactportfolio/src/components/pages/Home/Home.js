import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Leanne Annable:  Portfolio</h1>
      {/* Home page:

This should be a welcome landing page that contains:

Your Name

A headshot of you (or an avatar)

Your brand statement

Some indication that this is your portfolio site */}
      <p className="brandStatement">
      "As a driven and focused individual with a passion for learning, I am excited to pursue a career in coding. <br/>
      Despite only starting a few months ago, <br/>
      I have already developed a strong foundation in HTML, CSS, JavaScript, jQuery, React, and Node.js, 
      allowing me to create a variety of web applications.<br/> 
      My ability to adapt quickly to new challenges and eagerness to learn new skills enables me to excel in a fast-paced environment. <br/>
      As I embark on this new career path, I am committed to delivering high-quality work that reflects my passion and dedication to the field."
      {/* "As a junior coder, I have a strong passion for creating web applications that solve problems and make a difference. With a focus on continuous learning and improvement, I thrive on exploring new coding techniques and technologies. My adaptability and drive allow me to work effectively in fast-paced environments, and I'm constantly seeking out new challenges to expand my skills. Through my work, I aim to bring innovation and value to the projects I work on, while delivering results that exceed expectations." */}
      </p>
    </div>
  );
}

export default Home;
