import React from "react";

const Card = ({ img, title, link }) => {
  return (
   <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
   <img src={img} alt={title} />
   <h3>{title}</h3>

</a>
  );
};

export default Card;