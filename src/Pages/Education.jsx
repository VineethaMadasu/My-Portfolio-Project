import React from "react";
import "./Education.css";
import { motion } from "framer-motion";
import profileImage from "../assets/Image1.jpg";

const Education = () => {

  // Animation Variants
  const imageVariants = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
    visible: {
      opacity: 1,
      x: 0, // Final position
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    visible: {
      opacity: 1,
      x: 0, // Final position
      transition: { duration: 1, ease: "easeOut", delay: 0.1 }, // Slight delay for the text
    },
  };

  return (
    <section id="education" className="education">
      <div className="education-container">
        {/* Left Content: Floating Image */}
        <motion.div
          className="education-image"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.6 }} // Trigger animation every time
          variants={imageVariants}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
           <img src={profileImage} alt="Vineetha" />

        </motion.div>

        {/* Right Content: Sliding Text */}
        <motion.div
          className="education-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }} // Trigger animation every time
          variants={textVariants}
        >
          <h2>Education</h2>
          <p>
          I have graduated from <span className="highlight1">Kennesaw State University</span> with a Master's degree in<span className="highlight1"> Information Technology</span>. Throughout my studies, I had the opportunity
            to work on different projects related to<span className="highlight1"> Software Development</span> and <span className="highlight1">Machine Learning</span>. I learned how
            to build full-stack appliactions and machine learning models to solve real-world problems. 
          I have successfully delivered projects like a <span className="highlight1">GTA Hiring & Management System</span>, enhancing workflows and user interfaces. 
          My strength lies in creating visually appealing, responsive designs 
          and ensuring seamless interaction between the <span className="highlight1">frontend and backend</span>, turning ideas into impactful solutions.
          </p>
          <p>
          My journey wasn’t just about learning technical skills, it also helped me grow as a problem solver and a creative thinker.
           I enjoy tackling challenges and designing user-friendly applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default Education;
