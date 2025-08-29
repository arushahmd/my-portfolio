import React from "react";
import styles from "../css/BaseComponent.module.css";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
// import Projects from "./pages/Projects";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Tools from "./pages/Tools";

const BaseComponent = () => {
  return (
    <Router>
      <div className={styles["main-section"]}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles["main-content"]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            {/* <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tools" element={<Tools />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default BaseComponent;
