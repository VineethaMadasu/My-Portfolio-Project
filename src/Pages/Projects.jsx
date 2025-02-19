import React, { useRef } from "react";
import "./Projects.css";
import { motion } from "framer-motion";

const Projects = () => {
  const projectRef = useRef(null);

  // Card Slide-In Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start below with no opacity
    visible: {
      opacity: 1,
      y: 0, // Ends at original position
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const projectData = [
    {
      title: "GTA Hiring Management System",
      description:
        "Web-based application to streamline hiring and assignment processes for GTAs, increasing accuracy and efficiency.",
      link: "https://github.com/VineethaMadasu/GTA-Hiring-Management-System",
      skills: ["Node.js", "MongoDB", "Express", "React"], // List your skills here
    },
    {
      title: "Task Management System",
      description:
        "Developed a web-based task manager for robust organization, delegation, and monitoring of tasks.",
      link: "https://github.com/VineethaMadasu/Task-Management-System-Development",
      skills: ["Angular", "MongoDB", "HTML", "CSS"], // Skills for this project
    },
    {
      title: "Spam Text Message Detection",
      description:
        "Developed and trained machine learning models to classify SMS messages as spam or legitimate using Logistic Regression, SVM, and Random Forest.",
      link: "https://www.linkedin.com/in/vineetha-madasu/details/projects/",
      skills: ["Python", "Regression", "Google Colab"], // Skills for this project
    },
    {
      title: " Predicting weather Conditions",
      description:
        "Built a machine learning system to classify weather conditions Sunny,Rainy,Cloudy using Random Forest.",
      link: "https://www.linkedin.com/in/vineetha-madasu/details/projects/",
      skills: ["Python", "ML", "Google Colab"], // Skills for this project
    },
  ];

  return (
    <section id="projects" className="projects" ref={projectRef}>
      <h2 className="section-title">Projects</h2>
      <motion.div
        className="projects-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        animate={{ opacity: 1, y: 0 }} // Ensure it animates in smoothly
        variants={cardVariants} // Apply slide-in animation to container
      >
        {projectData.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{
              scale: 1.1, // Enlarges the card on hover
              transition: { duration: 0.3 },
            }}
            variants={cardVariants} // Slide-in animation
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-skills">
              {project.skills.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a> 
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
