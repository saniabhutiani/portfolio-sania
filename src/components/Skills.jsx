import React from "react";

// Logos imports
import htmlLogo from "../assets/logos/html.png";
import cssLogo from "../assets/logos/css.png";
import jsLogo from "../assets/logos/js.png";
import reactLogo from "../assets/logos/react.png";
import tailwindLogo from "../assets/logos/tailwind.png";
import photoshopLogo from "../assets/logos/photoshop.png";
import canvaLogo from "../assets/logos/canva.png";
import videoLogo from "../assets/logos/video.png";

const Skills = () => {
  const skills = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React", logo: reactLogo },
    { name: "Tailwind CSS", logo: tailwindLogo },
    { name: "Adobe Photoshop", logo: photoshopLogo },
    { name: "Canva", logo: canvaLogo },
    { name: "Basic Video Editing", logo: videoLogo },
  ];

  return (
    <section id="skills">
      <h2>My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            <img src={skill.logo} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
