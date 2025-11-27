import React from "react";
import resume from "../assets/Resume.pdf";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Download My CV</h2>
      <a
        href={resume}
        download
        className="px-6 py-3 bg-yellow-400 text-gray-800 font-bold rounded hover:bg-yellow-500 transition"
      >
        Download CV
      </a>
    </section>
  );
};

export default Resume;
