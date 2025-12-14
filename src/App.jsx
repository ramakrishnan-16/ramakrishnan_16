import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./sections/Home";
import About from "./sections/About";
import Qualification from "./sections/Qualifications";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const updateTitle = () => {
      let currentSection = "Home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          currentSection = section.id;
        }
      });

      document.title =
        "Ramakrishnan J | " +
        currentSection.charAt(0).toUpperCase() +
        currentSection.slice(1);
    };

    window.addEventListener("scroll", updateTitle);
    updateTitle();

    return () => window.removeEventListener("scroll", updateTitle);
  }, []);

  return (
    <>
      <NavBar />

      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="qualification"><Qualification /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>

      <Footer />
    </>
  );
}

export default App;