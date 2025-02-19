import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu

  // Handle menu toggle
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  // Reset menuOpen when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Ensure nav-links show on desktop view
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);

  // Observe section visibility to set the active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Update active section
          }
        });
      },
      {
        threshold: 0.3, // Adjust visibility threshold
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <motion.nav className="navbar">
      <div className="logo">Vineetha</div>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {["home", "education", "projects", "experience", "skills", "contact"].map((item) => (
          <li key={item} className={activeSection === item ? "active" : ""}>
            <a
              href={`#${item}`}
              onClick={() => setMenuOpen(false)} // Close menu after clicking a link
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
