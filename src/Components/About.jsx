import React from "react";

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>

      <div className="about-cards">
        <div className="about-card profile-card card">
          <img 
            src="/Profile.jpeg" 
            alt="Bidhan K.C" 
            className="profile-image" 
          />
          <h3>Who I Am</h3>
          <p>
            I am Bidhan K.C, a motivated fresher from Kathmandu, Nepal, with a strong curiosity and eagerness to learn.  
            I enjoy problem-solving, building projects, and exploring new technologies.
          </p>
        </div>

        <div className="about-card card">
          <h3>Education</h3>
          <p>
            1. Schooling: Whiz-Kid's International School, Kathmandu<br />
            2. +2 (11th & 12th): Bagmati College<br />
            3. Bachelor’s: Currently pursuing from Sunway College
          </p>
        </div>

        <div className="about-card card">
          <h3>Interests</h3>
          <p>
            I love exploring AI, web development, open-source projects, and building real-world solutions.  
            Team collaboration and continuous learning are my priorities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
