import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Social Links */}
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/vineetha-madasu" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin footer-icon"></i>
                    </a>
                    <a href="https://github.com/VineethaMadasu"  title="GitHub" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github footer-icon"></i>
                    </a>
                    <a href="https://linktr.ee/vineetha_madasu" title="Linktree" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-link footer-icon"></i>
                    </a>
                    <div className="footer-copyright">
                    &copy; {new Date().getFullYear()} Vineetha Madasu All Rights Reserved.
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
