import React from "react";
import Typewriter from "typewriter-effect";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about">
    <div class="container">
      <div className="about-container">

        <img src={profile} alt="Sania" className="about-img" />

        <h2 className="about-heading">
          <Typewriter
            options={{
              strings: ["About Me"],
              autoStart: true,
              loop: true,
              delay: 70,
            }}
          />
        </h2>

        <p className="about-text">
          I am a dedicated MERN Stack Developer with a passion for building fast,
          scalable, and visually appealing web applications. I combine technical
          expertise with modern design principles to deliver seamless user experiences.
        </p>

        <p className="about-text">
          I specialize in building responsive websites, admin dashboards,
          and full-stack web applications.
        </p>
      <h3 className="skills-title">Technologies I Work With</h3>
        <div className="skills-badges">
          <span className="badge html">HTML</span>
          <span className="badge css">CSS</span>
          <span className="badge js">JavaScript</span>
          <span className="badge react">React</span>
          <span className="badge tailwind">Tailwind CSS</span>
          <span className="badge mongo">MongoDB</span>
          <span className="badge express">Express</span>
          <span className="badge node">Node.js</span>
        </div>

      </div>
</div>
    </section>
  );
};

export default About;