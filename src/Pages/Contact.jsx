import React from "react";
import "./Contact.css";
import { Typewriter } from "react-simple-typewriter";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Contact Info Card */}
        <div className="contact-info">
      
          <h2>
            <span className="highlight">
              <span className="typewriter">
              
                L<Typewriter
                
                  words={["et's Connect!"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                />
              </span>
            </span>
          </h2>
          <p>Thanks for taking your time to visit my portfolio :) </p>
          <p>Seeking Full-Time Full-Stack Developer Roles. Feel free to connect!</p>

          {/* Social Links */}
          <div className="social-links">
            <a href="mailto:vmadasu20@gmail.com" title="Send Email">
              <i className="fa-solid fa-envelope contact-icon"></i>
            </a>
            <a href="tel:+14049538580" title="Call Now">
              <i className="fa-solid fa-phone contact-icon"></i>
            </a>
            <a href="https://github.com/VineethaMadasu"target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/vineetha-madasu" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://linktr.ee/vineetha_madasu"title="Linktree" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
