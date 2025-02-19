import React from "react";
import './index.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Education/>
      <Projects />
      <Experience/>
      <Skills/>
      <Contact />
      <Footer/>
    </>
  );
};

export default App;
