import React from "react";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center justify-center gap-8 py-20 bg-gray-100">
      <img src={profile} alt="Sania" className="w-44 h-44 rounded-full border-4 border-yellow-400 hover:scale-110 transition-transform duration-500" />
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-bold mb-2">Hello, I'm Sania!</h2>
        <p className="text-gray-700 text-lg mb-4">I am a web designer & front-end developer creating beautiful websites.</p>
      </div>
    </section>
  );
};

export default Hero;
