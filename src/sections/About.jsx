import React from "react";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div
          className="card rounded-4 p-5 m-4"
          style={{
            minHeight: "530px",
            border: "6px solid rgba(13, 110, 253, 0.1)",
          }}
        >
          <h2 className="fw-bold text-center mb-4">About Me</h2>

          <div className="text-secondary fs-6">
            <p>
              I’m <span className="fw-semibold text-dark">Ramakrishnan J</span>, a passionate tech enthusiast and full-stack developer 
              from <span className="text-dark">Haripad, Kerala</span>, currently based in <span className="text-dark">Kochi</span>. 
              With a strong academic foundation in Computer Applications (<strong>BCA</strong> & <strong>MCA</strong>), 
              I focus on building practical solutions across software development, data science, and artificial intelligence.
            </p>

            <p className="mb-3">
              I’m currently a <strong>Data Science & Machine Learning Intern</strong> at 
              <span className="text-dark"> Luminar Technolab</span>, where I receive hybrid training and work on practical projects 
              involving Python, Data Science, Machine Learning, Generative AI, AWS Cloud, and Power BI.
            </p>

            <p className="mb-3">
              Alongside this, I work as a <strong>Freelance Full-Stack Developer</strong>, having designed and built 
              several complete software solutions — ranging from web applications and system utilities to data-driven tools — 
              using technologies such as PHP, Python, Django, React, Node.js, MySQL, and MongoDB.
            </p>

            <p>
              I am deeply passionate about <strong>AI-powered application development</strong>, 
              <strong>data-driven insights</strong>, and <strong>secure, scalable systems</strong>. 
              My mission is to build intelligent solutions that simplify workflows and drive better decisions.
            </p>
          </div>

          <div className="text-center mt-5 d-flex justify-content-center gap-3">
            <a
              href="https://www.linkedin.com/in/ramakrishnan-16"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary py-2 rounded-3 equal-btn"
            >
              View LinkedIn
            </a>

            <a
              href="#contact"
              className="btn btn-outline-dark py-2 rounded-3 equal-btn"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;