import React from "react";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <img src="/water_monitor.png" alt="Smart Water Usage Monitor" />
          <h3>Smart Water Usage Monitor</h3>
          <a 
            href="https://github.com/Bidhan989/smart-water-usage-monitor" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <img src="/Anime-website.png" alt="Anime Website" />
          <h3>Anime Website</h3>
          <a 
            href="https://github.com/Bidhan989/Anime-Website" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <img src="/Hospital-management.png" alt="Hospital Management System" />
          <h3>Hospital Management System</h3>
          <a 
            href="https://github.com/Bidhan989/Hospital-management" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
