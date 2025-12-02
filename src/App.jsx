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


function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects /> 
   
      <Contact />
      <Footer />
      <Card />
      
    </div>
  );
}

export default App;
