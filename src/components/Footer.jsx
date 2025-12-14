import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

const Footer = () => {
  return (
    <footer className="text-light bg-dark pt-5 pb-3">
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-between">

          <div className="col-lg-4 text-lg-start text-center">
            <h4 className="fw-bold mb-2 text-primary">
              <a
                href="https://www.linkedin.com/in/ramakrishnan-16"
                className="element-hover text-primary fw-semibold text-decoration-none"
              >
                Ramakrishnan J
              </a>
            </h4>
            <p className="text-secondary small mb-0">
              Full-Stack Developer | Data Science Intern
            </p>
          </div>

          <div className="col-12 col-lg-4 text-center my-3 my-lg-0">
            <ul className="list-inline mb-0 d-flex justify-content-center flex-wrap gap-2">
              {["home", "about", "skills", "projects", "contact"].map((link) => (
                <li key={link} className="list-inline-item">
                  <a
                    href={`#${link}`}
                    className="element-hover text-light text-decoration-none fw-semibold"
                    style={{ transition: "color 0.3s" }}
                    onMouseOver={(e) => (e.target.style.color = "#0d6efd")}
                    onMouseOut={(e) => (e.target.style.color = "#ffffff")}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4 text-lg-end text-center">
            <div className="d-flex justify-content-lg-end justify-content-center gap-3 fs-5">
              <a
                href="https://github.com/ramakrishnan-16"
                target="_blank"
                rel="noreferrer"
                className="text-light element-hover"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/ramakrishnan-16"
                target="_blank"
                rel="noreferrer"
                className="text-light element-hover"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

        </div>

        <hr className="text-secondary mt-4 mb-3" />

        <div className="text-center small text-secondary">
          Portfolio Website |{" "}
          <a
            href="https://www.linkedin.com/in/ramakrishnan-16"
            className="element-hover text-primary fw-semibold text-decoration-none"
            style={{ transition: "color 0.3s" }}
          >
            ramakrishnan_16
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;