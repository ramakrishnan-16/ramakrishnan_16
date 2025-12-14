import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import '../App.css'

const Home = () => {
  const text = "Ramakrishnan J";
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && index < text.length) {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
        setSpeed(150);
      } else if (isDeleting && index > 0) {
        setDisplayed(text.slice(0, index - 1));
        setIndex(index - 1);
        setSpeed(80);
      } else {
        setIsDeleting(!isDeleting);
        setSpeed(1000);
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, speed]);

  return (
    <section
      id="home"
      className="d-flex justify-content-center align-items-center min-vh-100 bg-dark text-light text-center px-4"
    >
      <div className="w-100" style={{ maxWidth: "800px" }}>
        <h1 className="display-5 fw-bold mb-3">
          Hi, I'm <span className="text-info">{displayed}</span>
          <span className="text-info cursor">|</span>
        </h1>

        <h4 className="mb-4">
          Full Stack Developer | Data Science &amp; Machine Learning Intern
        </h4>
        <p className="lead mb-4">
          Focused on creating efficient web applications and intelligent data-driven solutions.
        </p>

        <div className="d-flex justify-content-center">
          <Button variant="info" size="lg" href="#about" className="rounded-pill px-4">
            <i className="bi bi-person-lines-fill me-2"></i> About Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;