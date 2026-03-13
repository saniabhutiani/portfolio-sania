import React from "react";
import { useParams, Link } from "react-router-dom";
import htmlLogo from "../assets/logos/html.png";
import cssLogo from "../assets/logos/css.png";
import jsLogo from "../assets/logos/js.png";
import reactLogo from "../assets/logos/react.png";
import tailwindLogo from "../assets/logos/tailwind.png";
import photoshopLogo from "../assets/logos/photoshop.png";
import canvaLogo from "../assets/logos/canva.png";
import videoLogo from "../assets/logos/video.png";

/* SKILL ORDER (navigation next button) */

const skillOrder = [
  "html",
  "css",
  "javascript",
  "react",
  "tailwind",
  "photoshop",
  "canva",
  "video"
];

/* SKILL DATA */

const skillData = {
  html: {
    title: "HTML",
    logo: htmlLogo,
    desc: "HTML is used to structure modern, semantic, and accessible web pages.",
    features: [
      "Semantic markup",
      "SEO-friendly structure",
      "Forms & accessibility",
      "Responsive layout foundation"
    ],
    projects: "Portfolio websites, landing pages, dashboards",
    level: "Advanced"
  },

  css: {
    title: "CSS",
    logo: cssLogo,
    desc: "CSS is used to style websites, layouts, and animations.",
    features: [
      "Flexbox & Grid",
      "Responsive design",
      "Animations & transitions",
      "Modern UI layouts"
    ],
    projects: "UI designs and responsive layouts",
    level: "Advanced"
  },

  javascript: {
    title: "JavaScript",
    logo: jsLogo,
    desc: "JavaScript adds interactivity and dynamic behavior to applications.",
    features: [
      "DOM manipulation",
      "API integration",
      "Event handling",
      "Dynamic content"
    ],
    projects: "Interactive web apps",
    level: "Intermediate"
  },

  react: {
    title: "React",
    logo: reactLogo,
    desc: "React is used to build scalable component-based interfaces.",
    features: [
      "Reusable components",
      "Hooks & state management",
      "Single Page Applications",
      "Performance optimization"
    ],
    projects: "MERN stack applications",
    level: "Intermediate"
  },

  tailwind : {
    title: "Tailwind CSS",
    logo: tailwindLogo,
    desc: "Utility-first CSS framework for modern UI design.",
    features: [
      "Rapid UI development",
      "Responsive utilities",
      "Clean design system",
      "Custom components"
    ],
    projects: "Modern UI projects",
    level: "Intermediate"
  },

  photoshop: {
    title: "Adobe Photoshop",
    logo: photoshopLogo,
    desc: "Adobe Photoshop is used for image editing and graphic design.",
    features: [
      "Image retouching",
      "Graphic design",
      "Layer management",
      "Advanced editing tools"
    ],
    projects: "Logo designs, photo editing projects",
    level: "Intermediate"
  },

  canva: {
    title: "Canva",
    logo: canvaLogo,
    desc: "Canva is a user-friendly design tool for creating graphics.",
    features: [
      "Easy-to-use interface",
      "Templates & assets",
      "Collaboration features",
      "Social media graphics"
    ],
    projects: "Social media posts, presentations, flyers",
    level: "Beginner"
  },

  video: {
    title: "Basic Video Editing",
    logo: videoLogo,
    desc: "Basic video editing skills for creating engaging content.",
    features: [
      "Cutting & trimming clips",
      "Adding transitions",
      "Audio adjustments",
      "Exporting videos"
    ],
    projects: "Short promotional videos, tutorials",
    level: "Beginner"
  }
};

const SkillDetail = () => {

  const { name } = useParams();

  const skill = skillData[name];

  if (!skill) {
    return <h2 style={{color:"white",padding:"100px"}}>Skill not found</h2>;
  }

  const currentIndex = skillOrder.indexOf(name);

  const nextSkill =
    currentIndex !== -1 && currentIndex < skillOrder.length - 1
      ? skillOrder[currentIndex + 1]
      : null;

  return (

    <section className="skill-detail">

      {/* HEADER */}

      <div className="skill-header">
        <img src={skill.logo} alt={skill.title} />
        <h1>{skill.title}</h1>
      </div>


      {/* CARDS */}

      <div className="cards-container">

        <div className="info-card">
          <h3>About {skill.title}</h3>
          <p>{skill.desc}</p>
        </div>

        <div className="info-card">
          <h3>What I Can Do</h3>
          <ul>
            {skill.features.map((item,i)=>(
              <li key={i}>✔ {item}</li>
            ))}
          </ul>
        </div>

        <div className="info-card">
          <h3>Experience</h3>
          <p>I have practical experience working with {skill.title}.</p>
          <p><strong>Level:</strong> {skill.level}</p>
        </div>

        <div className="info-card">
          <h3>Projects</h3>
          <p>{skill.projects}</p>
        </div>
       <div className="info-card">
         <h3>Tools & Technologies</h3>
         <p>
        I regularly use modern development tools to build structured
        and maintainable websites.
        </p>
        <ul>
        <li>VS Code for development</li>
        <li>Git & GitHub for version control</li>
        <li>Browser DevTools for debugging</li>
        <li>Responsive design testing tools</li>
       </ul> 
   </div> 
         <div className="info-card">
         <h3>Learning & Growth</h3>
        <p> 
        I continuously improve my HTML skills by exploring modern
        web standards and accessibility practices.
        </p>
       <ul>
       <li>Learning advanced semantic HTML</li>
       <li>Improving accessibility (ARIA)</li>
       <li>Optimizing SEO structure</li>
        <li>Building scalable UI layouts</li>
     </ul>
</div>
      </div>

      {/* NAVIGATION */}
      <div className="nav-buttons">
        <Link to="/#skills" className="back-btn">
          ← Back
        </Link>
        {nextSkill && (
          <Link to={`/skills/${nextSkill}`} className="next-btn">
            Next → {skillData[nextSkill].title}
          </Link>
        )}
      </div>
    </section>
  );
};

export default SkillDetail;