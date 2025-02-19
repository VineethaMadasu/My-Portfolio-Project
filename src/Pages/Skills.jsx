import React from "react";
import "./Skills.css";
import { easeOut, motion } from "framer-motion";

const skillsData = [
  { name: "HTML", icon: "fa-brands fa-html5" },
  { name: "CSS", icon: "fa-brands fa-css3-alt" },
  { name: "JavaScript", icon: "fa-brands fa-js-square" },
  { name: "React", icon: "fa-brands fa-react" },
  { name: "Node.js", icon: "fa-brands fa-node" },
  { name: "SQL", icon: "fa-solid fa-database" },
  { name: "MongoDB", icon: "fa-solid fa-database" },
  { name: "Python", icon: "fa-brands fa-python" },
  { name: "Java", icon: "fa-brands fa-java" },
  { name: "Git", icon: "fa-brands fa-github" },
  { name: "AWS", icon: "fa-solid fa-cloud" },
  { name: "Google API", icon: "fa-brands fa-google" },
  { name: "Docker", icon: "fa-brands fa-docker" },
];

const containerVariants = {
  hidden: { opacity: 0, x: -50 }, // Fully hidden initially
  visible: {
    opacity: 1,
    x: 0, // Move to the original position
    transition: {
      staggerChildren: 0.2, // Stagger the children (cards)
      duration: 1, // Overall duration
    },
  },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5 } }, // Slide out
};


const cardVariants = {
  hidden: { opacity: 0, y: 30 }, // Cards start slightly below and invisible
  visible: {
    opacity: 1,
    y: 0, // Move to the original position
    transition: { duration: 0.5 , ease: "easeOut"}, // Duration for individual cards
  },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      variants={containerVariants}
      viewport={{ once: false, amount: 0.2 }} // Trigger animation when in view
    >
      <h2 className="section-title">Skills</h2>
      <motion.div className="skills-container">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            variants={cardVariants} // Apply individual card animations
            whileHover={{
              scale: 1.1, // Enlarge the card
              boxShadow: "0 8px 20px rgba(255, 255, 255, 0.8)", // Add glow effect
              transition: { duration: 0.3 },
            }}
          >
            <i className={`skill-icon ${skill.icon}`} aria-hidden="true"></i>
            <h3 className="skill-name">{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
