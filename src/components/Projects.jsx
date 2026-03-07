import React from "react";
import Card from "./Card";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">

        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">

          <Card
            img={project1}
            title="HTML, CSS Portfolio Website"
            link="http://127.0.0.1:60658/portfoliopractice.html"
          />

          <Card
            img={project2}
            title="HTML, CSS Institute Website"
            link="http://127.0.0.1:60658/minorproject1-homepage.html"
          />

          <Card
            img={project3}
            title="Client Portfolio Using React"
            link="https://client-portfolio-weld.vercel.app/"
          />

          <Card
            img={project4}
            title="News App Using React"
            link="http://localhosthttp://localhost:5174/:5174/"
          />

          <Card
            img={project5}
            title="MERN Stack Real Estate Website"
            link="https://real-fronthend.vercel.app/"
          />

        </div>

      </div>
    </section>
  );
};

export default Projects;