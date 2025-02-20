import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
import { motion } from "framer-motion";
import profileImage from "../assets/About.jpg";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        {/* Text Section */}
        <motion.div
          className="home-text"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Hey! I'm Vineetha Madasu
          </h1>
          <div className="highlight">
            {/* Separate line for Full-Stack Developer */}
            <span className="typewriter">
             F<Typewriter
                words={["ULL-STACK DEVELOPER"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
              />
            </span>
          </div>
          <p>
            Actively seeking for Web Developer, Front-End Developer, Back-End Developer, Software Developer or Full-Stack Developer roles
            with over <span className="highlight2">2 years of experience</span>.
          </p>
          <p>
            Proficient in{" "}
            <span className="highlight2">
              Python, JavaScript, HTML, CSS, SQL, and Docker
            </span>
            .
          </p>
          <p>
            Passionate about learning and excited to apply my skills to create
            impactful solutions and grow.
          </p>
          <div className="buttons">
            
            <motion.a
              href="/My-Portfolio-Project/Vineetha_Madasu_SDE.pdf"
              className="btn outline"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="home-image"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <img src={profileImage} alt="Vineetha Madasu" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
