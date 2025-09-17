import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <div className="contact-cards">
        {/* Email Card */}
        <div className="contact-card">
          <h3>Email</h3>
          <p>
            <a href="mailto:bidhankc989@gmail.com">bidhankc989@gmail.com</a>
          </p>
        </div>

        {/* GitHub Card */}
        <div className="contact-card">
          <h3>GitHub</h3>
          <p>
            <a 
              href="https://github.com/Bidhan989" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              github.com/Bidhan989
            </a>
          </p>
        </div>

        {/* LinkedIn Card */}
        <div className="contact-card">
          <h3>LinkedIn</h3>
          <p>
            <a 
              href="https://www.linkedin.com/in/bidhan-kc/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              linkedin.com/in/bidhan-kc
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
