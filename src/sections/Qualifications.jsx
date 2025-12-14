import React from 'react';
import nptelCert from "../assets/certificates/nptel_certificate.jpg";

const Qualification = () => {
  const certificates = [
    {
      title: "Big Data Computing",
      org: "NPTEL Online Certification | IIT Kanpur",
      link: nptelCert,
      type: "image",
    },
    {
      title: "Machine Learning with Python: Foundations",
      org: "LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/dc9ddb62321d2bc8cf3155eee5fcae9c2510ee48882b27ffeebf37e6e78508d9",
      type: "link",
    },
    {
      title: "Python for Data Science and Machine Learning Essential Training Part 1",
      org: "LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/53727ad6e707cdfb3e92d5ea8f0d65eb89cdf09330e707d5ed784f4d63f6d314",
      type: "link",
    },
    {
      title: "Python for Data Science and Machine Learning Essential Training Part 2",
      org: "LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/ec2670eff25aa90af96a0d2c412c4173cb9a6988befa6a73a8301c5125c0bb31",
      type: "link",
    },
    {
      title: "NLP with Python for Machine Learning Essential Training",
      org: "LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/5d29876d5943400e1ec90d4d9f6f667fd2a5c77673015034d4b3c250e9e0828c",
      type: "link",
    },
    {
      title: "Artificial Intelligence Foundations: Machine Learning",
      org: "LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/61d864592af738bb7318381d39297dc1915f3eb4519d53167df71a8bd8a49f40",
      type: "link",
    },
    {
      title: "AI-Powered Time Series Forecasting with Python",
      org: "LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/303e876de66b49f58590a7ca327a365cb575b4862b0d294447c3f99fdbf028ff",
      type: "link",
    },
  ];

  return (
    <section id="qualifications" className="py-5 bg-light">
      <div className="container">
        <div
          className="card rounded-4 p-5 m-4"
          style={{
            minHeight: "530px",
            border: "6px solid rgba(13, 110, 253, 0.1)",
          }}
        >
          <h2 className="text-center fw-bold mb-5">Qualifications</h2>

          <div className="mb-5">
            <h4 className="fw-semibold text-primary mb-4">Experience</h4>
            <div className="position-relative ps-4">
              <div className="border-start border-3 border-secondary position-absolute top-0 start-0 h-100"></div>

              <div className="mb-4 ps-4">
                <h6 className="fw-bold mb-1">Data Science &amp; Machine Learning Intern</h6>
                <p className="text-secondary mb-1">
                  July 2025 - Present |{" "}
                  <a
                    href="https://www.luminartechnolab.com"
                    target="_blank"
                    rel="noreferrer"
                    className="element-hover text-decoration-none fw-semibold text-primary"
                  >
                    Luminar Technolab
                  </a>
                </p>
                <p className="text-secondary small mb-0">
                  Currently undergoing an internship at Luminar Technolab, gaining hands-on experience in Python, Data Science,
                  Machine Learning, AI, Generative AI, AWS Cloud, and PowerBI through hybrid training.
                </p>
              </div>

              <div className="mb-4 ps-4">
                <h6 className="fw-bold mb-1">Freelance Full-Stack Developer</h6>
                <p className="text-secondary mb-1">
                  July 2023 – Present |{" "}
                  <a
                    href="https://github.com/ramakrishnan-16"
                    target="_blank"
                    rel="noreferrer"
                    className="element-hover text-decoration-none fw-semibold text-primary"
                  >
                    Self-Employed
                  </a>
                </p>
                <p className="text-secondary small mb-0">
                  Designed and developed multiple web application projects using PHP, Python, Django, React, Node.js,
                  MySQL, MongoDB, C, and Java. Handled architecture, APIs, full-stack implementation, and deployments.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <h4 className="fw-semibold text-primary mb-4">Education</h4>
            <div className="position-relative ps-4">
              <div className="border-start border-3 border-secondary position-absolute top-0 start-0 h-100"></div>

              <div className="mb-4 ps-4">
                <h6 className="fw-bold mb-1">Master of Computer Applications</h6>
                <p className="text-secondary mb-0">
                  Mahatma Gandhi University | Batch: 2023 – 2025
                </p>
              </div>

              <div className="ps-4">
                <h6 className="fw-bold mb-1">Bachelor of Computer Applications</h6>
                <p className="text-secondary mb-0">
                  Mahatma Gandhi University | Batch: 2020 – 2023
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="fw-semibold text-primary mb-4">Certificates</h4>
            <div className="position-relative ps-4">
              <div className="border-start border-3 border-secondary position-absolute top-0 start-0 h-100"></div>

              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="ps-4 bg-light p-3 rounded-3 d-flex justify-content-between align-items-center shadow-sm mb-3"
                >
                  <div>
                    <h6 className="fw-bold mb-1">{cert.title}</h6>
                    <p className="text-secondary mb-0">{cert.org}</p>
                  </div>

                  {cert.type === "image" ? (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        const url = cert.link;
                        const newWindow = window.open(
                          "",
                          "_blank",
                          "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=900,height=600"
                        );
                        newWindow.document.write(`
                          <html>
                            <head>
                              <title>Certificate</title>
                              <style>
                                body {
                                  margin:0;
                                  display:flex;
                                  justify-content:center;
                                  align-items:center;
                                  height:100vh;
                                  background:#f0f0f0;
                                }
                                img {
                                  max-width:90%;
                                  max-height:90%;
                                  pointer-events:none;
                                }
                              </style>
                            </head>
                            <body oncontextmenu="return false;">
                              <img src="${url}" alt="Certificate" />
                            </body>
                          </html>
                        `);
                        newWindow.document.close();
                      }}
                      className="btn btn-outline-primary btn-sm d-flex align-items-center gap-1"
                    >
                      View <i className="bi bi-arrow-right ms-1"></i>
                    </a>
                  ) : (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary btn-sm d-flex align-items-center gap-1"
                    >
                      View <i className="bi bi-arrow-right ms-1"></i>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;