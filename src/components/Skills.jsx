import { Link } from "react-router-dom";
import htmlLogo from "../assets/logos/html.png";
import cssLogo from "../assets/logos/css.png";
import jsLogo from "../assets/logos/js.png";
import reactLogo from "../assets/logos/react.png";
import tailwindLogo from "../assets/logos/tailwind.png";
import photoshopLogo from "../assets/logos/photoshop.png";
import canvaLogo from "../assets/logos/canva.png";
import videoLogo from "../assets/logos/video.png";

const skills = [
  { name: "HTML", logo: htmlLogo, link: "/skills/html" },
  { name: "CSS", logo: cssLogo, link: "/skills/css" },
  { name: "JavaScript", logo: jsLogo, link: "/skills/javascript" },
  { name: "React", logo: reactLogo, link: "/skills/react" },
  { name: "Tailwind CSS", logo: tailwindLogo, link: "/skills/tailwind" },
  { name: "Adobe Photoshop", logo: photoshopLogo, link: "/skills/photoshop" },
  { name: "Canva", logo: canvaLogo, link: "/skills/canva" },
  { name: "Basic Video Editing", logo: videoLogo, link: "/skills/video" }
];

const Skills = () => {
  return (
    <section id="skills">

      <div className="container">
        <h2>My Skills</h2>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <Link to={skill.link} className="skill-card" key={index}>
              <img src={skill.logo} alt={skill.name} />
              <h3>{skill.name}</h3>
            </Link>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Skills;