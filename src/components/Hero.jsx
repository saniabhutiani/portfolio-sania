import React from "react";
import Typewriter from "typewriter-effect";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="hero">
      <div class = "container">
      <div className="hero-box">

        <img src={profile} alt="Sania" />

        <h2>
          <Typewriter
            options={{
              strings: [
                "Hello, I'm Sania 👋",
                "Frontend Developer",
                "MERN Stack Developer"
              ],
              autoStart: true,
              loop: true,
              delay: 70,
            }}
          />
        </h2>

        <p>
          I am a MERN Stack Developer specializing in building modern,
          responsive, and user-friendly web applications using HTML, CSS,
          JavaScript, React, Tailwind CSS, MongoDB, Express.js and Node.js.
        </p>

      </div>
</div>
    </section>
  );
};

export default Hero;