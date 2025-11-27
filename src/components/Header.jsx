import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      <h1 className="text-xl font-bold">Sania Bhutiani</h1>
      <nav>
        <a href="#about" className="mx-2 hover:text-yellow-400 transition">Home</a>
        <a href="#about" className="mx-2 hover:text-yellow-400 transition">About</a>
        <a href="#about" className="mx-2 hover:text-yellow-400 transition">Skills</a>
        <a href="#projects" className="mx-2 hover:text-yellow-400 transition">Projects</a>
        <a href="#contact" className="mx-2 hover:text-yellow-400 transition">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
