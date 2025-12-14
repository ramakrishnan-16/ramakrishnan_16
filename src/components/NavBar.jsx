import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../App.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY + window.innerHeight / 3;
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "contact",
    ];

    let current = "home";

    for (let id of sections) {
      const section = document.getElementById(id);
      if (
        section &&
        scrollY >= section.offsetTop &&
        scrollY < section.offsetTop + section.offsetHeight
      ) {
        current = id;
        break;
      }
    }

    const qualifications = document.getElementById("qualifications");
    const achievements = document.getElementById("achievements");

    if (
      (qualifications &&
        scrollY >= qualifications.offsetTop &&
        scrollY < qualifications.offsetTop + qualifications.offsetHeight) ||
      (achievements &&
        scrollY >= achievements.offsetTop &&
        scrollY < achievements.offsetTop + achievements.offsetHeight)
    ) {
      current = "about";
    }

    setActiveSection(current);
    setScrolled(current !== "home");
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`shadow-sm py-3 ${!scrolled ? "bg-dark navbar-dark" : ""}`}
      style={{
        background: scrolled ? "rgba(255, 255, 255, 0.97)" : "",
        backdropFilter: scrolled ? "blur(10px)" : "",
        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.05)"
          : "1px solid rgba(255,255,255,0.1)",
        transition: "all 0.4s ease",
      }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className="fw-bold text-uppercase"
          onClick={() => setExpanded(false)}
          style={{
            color: scrolled ? "#0d6efd" : "#fff",
            fontSize: "1.3rem",
            letterSpacing: "1px",
            transition: "color 0.4s ease",
          }}
        >
          ramakrishnan_16
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          style={{
            background: scrolled ? "#0d6efd" : "#fff",
          }}
        />

        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="text-center">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <Nav.Link
                key={item.href}
                href={item.href}
                onClick={() => setExpanded(false)}
                className={`mx-2 fw-semibold position-relative ${
                  activeSection === item.href.substring(1) ? "active-section" : ""
                }`}
                style={{
                  color: scrolled ? "#0d6efd" : "#f8f9fa",
                  transition: "color 0.3s ease",
                }}
              >
                {item.label}
                <span
                  className="underline"
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    height: "2px",
                    width:
                      activeSection === item.href.substring(1) ? "100%" : "0%",
                    background: scrolled ? "#0d6efd" : "#fff",
                    transition: "width 0.3s ease",
                  }}
                ></span>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;