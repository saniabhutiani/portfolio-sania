import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Card from "./components/Card";
import ResumeButton from "./components/Resumebutton";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects /> 
     <ResumeButton/>
     {/* changed here */}
      <Contact />
      <Footer />
      <Card />
    </div>
  );
}

export default App;
