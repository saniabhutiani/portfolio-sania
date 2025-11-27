import React from "react";
import Card from "./Card";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        <Card img={project1} title="Portfolio Website" />
        <Card img={project2} title="HTML, CSS, Institute Website" />
        <Card img={project3} title="News App Website Using React" />
      </div>
    </section>
  );
};

export default Projects;
