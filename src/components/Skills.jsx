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
  { name: "JavaScript", logo: jsLogo, link: "/skills/js" },
  { name: "React", logo: reactLogo, link: "/skills/react" },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "Adobe Photoshop", logo: photoshopLogo },
  { name: "Canva", logo: canvaLogo },
  { name: "Basic Video Editing", logo: videoLogo }
];
const Skills = () => {
  return (
    <section id="skills">

         <div class="container">
      <h2>My Skills</h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          skill.link ? (
            <Link to={skill.link} className="skill-card" key={index}>
              <img src={skill.logo} alt={skill.name} />
              <h3>{skill.name}</h3>
            </Link>
          ) : (
            <div className="skill-card" key={index}>
              <img src={skill.logo} alt={skill.name} />
              <h3>{skill.name}</h3>
            </div>
          )
        ))}

      </div>
      </div>

    </section>
  );
};

export default Skills;