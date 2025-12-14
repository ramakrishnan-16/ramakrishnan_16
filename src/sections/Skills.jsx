import React from "react";

const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      items: [
        "HTML5",
        "Cascading Style Sheets (CSS)",
        "JavaScript",
        "React.js",
        "Bootstrap",
        "Flutter",
      ],
      icon: "bi-laptop",
    },
    {
      title: "Backend Development",
      items: ["Node.js", "Express.js", "Next.js", "Nest.js", "PHP", "Django", "REST APIs", "API Development"],
      icon: "bi-cpu",
    },
    {
      title: "Authentication",
      items: ["JWT"],
      icon: "bi-shield-lock",
    },
    {
      title: "Programming Languages",
      items: ["C", "C++", "C#", "Java", "Python", "Dart", "Bash"],
      icon: "bi-terminal",
    },
    {
      title: "Database & Cloud",
      items: ["MySQL", "MongoDB", "AWS Cloud"],
      icon: "bi-cloud",
    },
    {
      title: "Version Control",
      items: ["Git", "GitHub", "Gitlab"],
      icon: "bi-git",
    },
    {
      title: "Tools & Platforms",
      items: [
        "Microsoft Visual Studio Code",
        "Figma",
        "Data Science",
        "Machine Learning",
        "NumPy",
        "Pandas",
        "Scikit-Learn",
        "Matplotlib",
        "Seaborn",
        "Excel",
        "Word"
      ],
      icon: "bi-tools",
    },
    {
      title: "Team & Leadership",
      items: ["Team Leadership", "Team Building", "Team Management", "Teamwork"],
      icon: "bi-people-fill",
    },
  ];

  return (
    <section id="skills" className="text-dark bg-light pt-4 pb-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-3 text-dark">Skills</h2>

        <div className="row g-3">
          {skills.map((category, index) => (
            <div key={index} className="col-lg-6 col-md-6">
              <div
                className="p-4 rounded-4 position-relative h-100"
                style={{
                  background: "linear-gradient(145deg, #ffffff 0%, #f0f6ff 100%)",
                  border: "1px solid rgba(13, 110, 253, 0.15)",
                  boxShadow: "0 3px 6px rgba(0, 0, 0, 0.04)",
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 14px rgba(13, 110, 253, 0.18)";
                  e.currentTarget.style.border =
                    "1px solid rgba(13, 110, 253, 0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 3px 6px rgba(0, 0, 0, 0.04)";
                  e.currentTarget.style.border =
                    "1px solid rgba(13, 110, 253, 0.15)";
                }}
              >
                <div className="d-flex align-items-center mb-2">
                  <i className={`bi ${category.icon} text-primary fs-5 me-2`}></i>
                  <h5 className="fw-semibold mb-0">{category.title}</h5>
                </div>

                <div className="d-flex flex-wrap gap-3">
                  {category.items.map((skill, i) => (
                    <span
                      key={i}
                      className="badge bg-light text-dark small px-2 py-1"
                      style={{
                        border: "1px solid rgba(13, 110, 253, 0.25)",
                        borderRadius: "10px",
                        transition: "all 0.3s ease",
                        fontSize: "0.72rem",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "rgba(13, 110, 253, 0.12)";
                        e.currentTarget.style.color = "#0d6efd";
                        e.currentTarget.style.border =
                          "1px solid rgba(13, 110, 253, 0.6)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#f8faff";
                        e.currentTarget.style.color = "#212529";
                        e.currentTarget.style.border =
                          "1px solid rgba(13, 110, 253, 0.25)";
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;