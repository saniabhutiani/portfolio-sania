import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SkillDetail from "./components/SkillDetail";
import "./App.css";

// HOME PAGE
function Home() {
  return (
    <>
      <Navbar />

     <section id="hero" className="container">
        <Hero />
      </section>

     <section id="about" className="container">
        <About />
      </section>

      <section id="services" className="container">
        <Skills />
      </section>

      <section id="projects" className="container">
        <Projects />
      </section>

      <section id="contact" className="container">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/skills/:name" element={<SkillDetail />} />
      </Routes>
    </Router>
  );
}

export default App;