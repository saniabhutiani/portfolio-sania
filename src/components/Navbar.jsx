import React from "react";
import resume from "../assets/resume.pdf"; // <-- your resume path

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-purple-800 via-pink-700 to-pink-500 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-lg rounded-b-lg">
      <h1 className="text-xl font-bold cursor-pointer hover:tracking-wide transition-all duration-300">
        Sania Bhutiani
      </h1>
      <nav className="flex items-center">
        <a href="#hero" className="mx-2 hover:text-pink-300 transition-colors duration-300">Home</a>
        <a href="#about" className="mx-2 hover:text-pink-300 transition-colors duration-300">About</a>
        <a href="#skills" className="mx-2 hover:text-pink-300 transition-colors duration-300">Skills</a>
        <a href="#projects" className="mx-2 hover:text-pink-300 transition-colors duration-300">Projects</a>
        <a href="#contact" className="mx-2 hover:text-pink-300 transition-colors duration-300">Contact</a>
        <a 
          href={resume} 
          download="Sania_Bhutiani_CV.pdf"
          className="ml-4 px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white font-bold rounded-full transition-all duration-300"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
