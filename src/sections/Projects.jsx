import React from "react";
import { Button } from "react-bootstrap";

const Projects = () => {
  const projects = [
    {
      title: "Device Health Prediction",
      description:
        "A Python–Streamlit application that monitors hardware performance metrics and predicts device health using machine learning. It preprocesses data with Pandas and NumPy, and trains models using Scikit-learn. Joblib enables fast model deployment, while WMI, PyUSB, PyWinUSB, and PyWin32 support real-time system and sensor data collection for accurate health predictions.",
      tech: "Python, Streamlit, Pandas, NumPy, Scikit-learn, Joblib",
      github: "https://github.com/ramakrishnan-16/device-health-prediction-system",
    },
    {
      title: "ATM Simulator System",
      description:
        "A Python-based ATM system with admin and user roles. Admins can add, view, or delete users, each assigned a random account number stored in CSV-style text file (users.txt). Users set their PIN on first login and can check balance, deposit, or withdraw. Account numbers are masked for security, with all updates saved persistently.",
      tech: "Python",
      github: "https://github.com/ramakrishnan-16/atm-simulator",
    },
    {
      title: "Vehicle Parking Management System",
      description:
        "A web-based PHP application to manage vehicle parking slots efficiently. Users can register, log in, book slots, and make payments via card or cash. The system ensures time-based slot validation, user role access, and profile management.",
      tech: "PHP, MySQL, HTML, CSS (Bootstrap), JavaScript",
      github: "https://github.com/ramakrishnan-16/vehicle-parking-management-system",
    },
    {
      title: "Auction Site",
      description:
        "A full-stack web application that enables users to create, manage, and participate in online auctions. The platform supports real-time auction listings, bidding, and user authentication. The backend is powered by Node.js, Express, and MongoDB, while the frontend is built with React (Vite) and styled using Bootstrap for a responsive UI.",
      tech: "MongoDB, Express.js, React.js, Node.js, Bootstrap",
      github: "https://github.com/ramakrishnan-16/auction-site",
    },
    {
      title: "File Encryption and Decryption Tool using C",
      description:
        "File Encryption and Decryption Tool in C, A simple command-line tool for encrypting and decrypting files using Caesar and XOR ciphers. Includes interactive prompts, file handling, and customizable keys for secure text file operations.",
      tech: "C Programming",
      github: "https://github.com/ramakrishnan-16/file-encryption-tool",
    },
    {
      title: "Face Authentication System",
      description:
        "The face authentication system is a main project of MCA curriculum. A face authentication system built using Python and Django, integrating machine learning for real-time facial recognition and MySQL for data storage. It offers a reliable and modern alternative to traditional login methods.",
      tech: "Python, Django, MySQL, Machine Learning (Real-Time Facial Recognition), OpenCV, HTML, CSS, JavaScript.",
      github: "https://github.com/ramakrishnan-16/face-authentication-system",
    },
    {
      title: "Tourism Management System",
      description:
        "The Tourism Management System is a mini project for the MCA program, designed to streamline the management of tourism-related operations. This system offers a comprehensive solution for managing tour packages, bookings, and customer interactions, providing an efficient platform for both administrators and users to handle various aspects of tourism management.",
      tech: "HTML5, CSS3, Javascript, PHP, MySQL",
      github: "https://github.com/ramakrishnan-16/tourism-management-system",
    },
    {
      title: "Attendance Management System",
      description:
        "The Attendance Management System is a web-based application developed using PHP with the Laravel framework and MySQL for the second semester of the MCA program. This project is designed to manage and track attendance records for employees efficiently. It provides a comprehensive solution for recording, monitoring, and reporting attendance data, streamlining the attendance management process.",
      tech: "HTML5, CSS3, Javascript, PHP, Laravel, MySQL",
      github: "#",
    },
    {
      title: "Task Management System",
      description:
        "The Task Management System is a desktop application developed using Java Swing for the second semester of the MCA program. This Project aims to helping users efficiently organize and track their tasks and projects. This system provides a graphical user interface (GUI) for managing tasks, setting deadlines, and tracking progress. It serves as a practical tool for individuals or teams to enhance productivity and stay organized.",
      tech: "Java, Java Swing",
      github: "https://github.com/ramakrishnan-16/task-management-system",
    },
    {
      title: "Banking System using C",
      description:
        "The Banking System project is a foundational software developed during the first semester of the MCA program. Designed to manage basic banking operations, this project introduces students to core programming concepts and practical application development using C language.",
      tech: "C Programming",
      github: "https://github.com/ramakrishnan-16/banking-system",
    },
    {
      title: "Personality Prediction with CV analysis using Machine Learning",
      description:
        "The Personality Prediction using Machine Learning project is a main project of BCA curriculum. It aims to analyze and predict an individual's personality traits based on their behavior and responses. Utilizing advanced machine learning algorithms, the system processes various data inputs to identify patterns and determine personality types.",
      tech: "Python, Django, SQLite, HTML, CSS",
      github: "https://github.com/ramakrishnan-16/personality-prediction-with-cv-analysis",
    },
    {
      title: "Garage Management System",
      description:
        "The Garage Management System is my mini project for BCA curriculum. This system is designed to streamline and automate various operations in a garage, enhancing efficiency and management. Key features include vehicle management, service scheduling, inventory management, and billing. The system aims to provide a user-friendly interface, ensuring smooth and organized garage operations.",
      tech: "HTML5, CSS3, Javascript, PHP, MySQL",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-4 bg-light">
      <div className="container">
        <div className="p-4 rounded-4">
          <h2 className="text-center fw-bold mb-3 text-black">
            Projects
          </h2>

          <div
            style={{
              maxHeight: "500px",
              overflowY: projects.length > 3 ? "auto" : "visible",
              scrollbarWidth: "thin",
              scrollbarColor: "#0d6efd #f1f1f1",
              paddingRight: "6px",
              paddingTop: "24px",
              paddingBottom: "24px",
            }}
          >
            <div className="row g-3">
              {projects.map((project, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div
                    className="card h-100 border-0 rounded-4 overflow-hidden p-3 d-flex flex-column justify-content-between shadow"
                    style={{
                      backgroundColor: "#ffffff",
                      textAlign: "left",
                      transition:
                        "transform 0.3s ease, box-shadow 0.3s ease",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-6px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 24px rgba(0, 123, 255, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0,0,0,0.1)";
                    }}
                  >
                    <div className="flex-grow-1 d-flex flex-column">
                      <h6 className="fw-semibold mb-2 text-dark text-center">
                        {project.title}
                      </h6>

                      <p
                        className="text-secondary small mb-3 flex-grow-1"
                        style={{
                          textAlign: "justify",
                          lineHeight: "1.5",
                          minHeight: "110px",
                        }}
                      >
                        {project.description}
                      </p>

                      <p className="text-muted small mb-3 text-center mt-auto">
                        <strong>Tech Stack:</strong> {project.tech}
                      </p>
                    </div>

                    <div className="text-center">
                      <Button
                        variant="outline-primary"
                        size="sm"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-pill px-3 mt-auto"
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;