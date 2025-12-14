import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-5 pb-5 bg-light"
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <div className="container py-3">
        <div
          className="p-4 rounded-4 shadow-sm mx-auto"
          style={{
            background: "#ffffff",
            border: "6px solid rgba(13, 110, 253, 0.1)",
            maxWidth: "900px",
          }}
        >
          <h2
            className="text-center text-dark fw-bold mb-3"
          >
            Get in Touch
          </h2>
          <p
            className="text-center text-secondary mb-4"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            Have a project idea, collaboration, or just want to say hello? I’d love to
            hear from you!
          </p>

          <div className="row g-3 align-items-stretch">
            <div className="col-lg-5">
              <div
                className="h-100 p-3 bg-primary text-white rounded-4 shadow-sm"
              >
                <h5 className="fw-bold mb-3">Contact Information</h5>

                <ul className="list-unstyled mb-3">
                  <li className="mb-2 d-flex align-items-center">
                    <i className="bi bi-envelope-fill fs-5 me-3"></i>
                    <span>ramakrishnan.dev16@gmail.com</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <i className="bi bi-telephone-fill fs-5 me-3"></i>
                    <span>+91 8281346945</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <i className="bi bi-geo-alt-fill fs-5 me-3"></i>
                    <span>Haripad, Kerala, India</span>
                  </li>
                </ul>

                <h5 className="fw-bold mb-3">Connect With Me</h5>
                <div className="d-flex gap-3 fs-4">
                  <a
                    href="https://github.com/ramakrishnan-16"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <i className="
                    bi bi-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ramakrishnan-16"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <form
                className="p-3 rounded-4 h-100"
                style={{
                  background: "#f8faff",
                  border: "1px solid rgba(13, 110, 253, 0.1)",
                }}
              >
                <div className="mb-2">
                  <label className="form-label fw-semibold text-primary">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control p-2 rounded-3 border-0 shadow-sm"
                    placeholder="Enter your full name"
                    style={{ backgroundColor: "#fff" }}
                    disabled
                    required
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label fw-semibold text-primary">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control p-2 rounded-3 border-0 shadow-sm"
                    placeholder="Enter your email"
                    style={{ backgroundColor: "#fff" }}
                    disabled
                    required
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label fw-semibold text-primary">
                    Message
                  </label>
                  <textarea
                    className="form-control p-2 rounded-3 border-0 shadow-sm"
                    rows="2"
                    placeholder="Write your message..."
                    style={{ backgroundColor: "#fff" }}
                    disabled
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary px-3 py-2 rounded-3 fw-semibold shadow-sm w-100 mt-2"
                  style={{
                    background: "linear-gradient(90deg, #0d6efd 0%, #3b82f6 100%)",
                    border: "none",
                  }}
                  disabled
                >
                  Send Message <i className="bi bi-send ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;