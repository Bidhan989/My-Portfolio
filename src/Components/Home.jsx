import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="hero">
      <h1>Hello, I’m <span className="highlight">Bidhan K.C</span></h1>
      <p className="subtitle">
        A passionate fresher from Kathmandu, Nepal with a foundation in 
        <span className="skill"> Python</span>, 
        <span className="skill"> React</span>, 
        <span className="skill"> Web Design</span>, and 
        <span className="skill"> GitHub</span>.  
        I enjoy solving problems, building projects, and exploring new technologies.
      </p>
      <div className="hero-buttons">
        <Link to="/projects" className="btn">View Projects</Link>
        <Link to="/contact" className="btn btn-outline">Contact Me</Link>
      </div>
    </section>
  );
};

export default Home;
