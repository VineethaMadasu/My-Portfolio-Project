import React from "react";
import "./Experience.css";

const experienceData = [
  {
    logo: "https://iteach.kennesaw.edu/images/MB_Vert_3Clr.png",
    title: "Front-end Developer | Graduate Research Assistant",
    company: "Kennesaw State University",
    duration: "Aug 2024 - Dec 2024",
    location: "Marietta, GA, USA",
    description:
      "Developed scalable full-stack applications using Python (Flask), HTML, CSS, SQL, and MongoDB, optimizing backend performance and reducing load times by 45%. Designed and integrated React.js and AngularJS frontend components, ensuring seamless user interaction.",
  },
  {
    logo: "https://iteach.kennesaw.edu/images/MB_Vert_3Clr.png",
    title: "Team Lead | Capstone",
    company: "Kennesaw State University",
    duration: "Aug 2024 - Dec 2024",
    location: "Marietta, GA, USA",
    description:
      "Led a hands-on capstone project, managing a team to successfully develop and deliver a full-stack solution on time. Oversaw task delegation, collaboration, and time management to ensure smooth project execution. Managed technical implementation, troubleshooting, and final delivery, aligning with project goals.",
  },
  
  {
    logo: "https://iteach.kennesaw.edu/images/MB_Vert_3Clr.png",
    title: "Full-Stack Developer | Student Assistant",
    company: "Kennesaw State University",
    duration: "Mar 2024 - June 2024",
    location: "Marietta, GA, USA",
    description:"Conducted hands-on web application workshops using HTML5, JavaScript, and MongoDB, improving student project completion rates by 30%. Enforced best coding practices, enhancing code quality and maintainability."
    
  },
  
  {
    logo: "https://www.connecting-software.com/wp-content/uploads/2018/04/DXC-Partner-Logo.png",
    title: "Full - Stack Developer",
    company: "DXC Technology",
    duration: "Feb 2022 - July 2023",
    location: "Bangalore, India",
    description:
      "Designed and deployed scalable web applications using Java, Python, SQL, MongoDB, and JavaScript, integrating RESTful APIs for seamless client-server communication. Developed responsive frontend interfaces, optimized database queries, and maintained projects on GitHub, ensuring efficient collaboration.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experienceData.map((experience, index) => (
          <div key={index} className="timeline-item">
            {/* Left side - Logo */}
            <div className="timeline-logo">
              <img src={experience.logo} alt={experience.company} />
            </div>

            {/* Center - Connector Line */}
            <div className="timeline-line"></div>

            {/* Right side - Content */}
            <div className="timeline-content">
              <h3 className="experience-title">{experience.title}</h3>
              <h4 className="company-name">{experience.company}</h4>
              <p className="experience-duration">
                {experience.duration} <br />
                {experience.location}
              </p>
              <p className="experience-description">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
