import React from "react";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
  return (
    <header className="bg-black text-white px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">

      {/* Logo */}
      <h1 className="text-2xl font-bold cursor-pointer hover:tracking-wider transition-all duration-300">
        Sania Bhutiani
      </h1>

      {/* Navigation */}
      <nav className="flex items-center gap-4">

        <a
          href="#hero"
          className="px-4 py-2 border border-pink-500 rounded-full hover:bg-pink-600 transition"
        >
          Home
        </a>

        <a
          href="#about"
          className="px-4 py-2 border border-pink-500 rounded-full hover:bg-pink-600 transition"
        >
          About
        </a>

        <a
          href="#skills"
          className="px-4 py-2 border border-pink-500 rounded-full hover:bg-pink-600 transition"
        >
          Skills
        </a>

        <a
          href="#projects"
          className="px-4 py-2 border border-pink-500 rounded-full hover:bg-pink-600 transition"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="px-4 py-2 border border-pink-500 rounded-full hover:bg-pink-600 transition"
        >
          Contact
        </a>

        <ResumeButton />

      </nav>
    </header>
  );
};

export default Navbar;