import { useState, useEffect } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCar,
  faHome,
  faEnvelope,
  faReact,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCar, faHome, faEnvelope);

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">Katana J</div>
          <ul className="nav-menu">
            <li
              onClick={() => smoothScroll("home")}
              className={activeNav === "home" ? "active" : ""}
            >
              Home
            </li>
            <li
              onClick={() => smoothScroll("about")}
              className={activeNav === "about" ? "active" : ""}
            >
              About
            </li>
            <li
              onClick={() => smoothScroll("skills")}
              className={activeNav === "skills" ? "active" : ""}
            >
              Skills
            </li>
            <li
              onClick={() => smoothScroll("projects")}
              className={activeNav === "projects" ? "active" : ""}
            >
              Projects
            </li>
            <li
              onClick={() => smoothScroll("contact")}
              className={activeNav === "contact" ? "active" : ""}
            >
              Contact
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Frontend Developer</h1>
          <p className="hero-subtitle">
            Building bold, creative web experiences with React, JavaScript & CSS
          </p>
          <button
            className="cta-button"
            onClick={() => smoothScroll("projects")}
          >
            View My Work
          </button>
        </div>
        <div
          className="hero-background"
          style={{
            background: "var(--teal)",
            border: "14px solid var(--ink)",
            boxShadow: "22px 22px 0 var(--yellow)",
          }}
        ></div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p className="about-text">
              Hi! I'm John, a passionate frontend developer just starting my
              career. I'm excited about creating beautiful, functional web
              applications that users love. With a strong foundation in
              JavaScript, HTML, CSS, and React, I'm constantly learning and
              pushing the boundaries of what's possible on the web.
            </p>
            <p className="about-text">
              I love solving problems, writing clean code, and collaborating
              with teams to bring ideas to life. When I'm not coding, you'll
              find me exploring new technologies and contributing to open-source
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="section-container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <FontAwesomeIcon icon={faReact} />
              </div>
              <h3>React</h3>
              <p>Component-based architecture, hooks, state management</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon"></div>
              <h3>JavaScript</h3>
              <p>
                ES6+, async/await, DOM manipulation, responsive interactions
              </p>
            </div>
            <div className="skill-card">
              <div className="skill-icon"></div>
              <h3>CSS & HTML</h3>
              <p>Flexbox, Grid, animations, responsive design, accessibility</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon"></div>
              <h3>Tools & DevOps</h3>
              <p>Git, npm, webpack, debugging, browser DevTools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header"></div>
              <div className="project-content">
                <h3>Project Title</h3>
                <p>
                  See you soon! I'm currently working on an exciting project
                  that will showcase my frontend development skills. Stay tuned
                  for updates!
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">JavaScript</span>
                </div>
                <div className="project-links">
                  <a href="#projects" className="project-link">
                    View Project
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header"></div>
              <div className="project-content">
                <h3>7TO7</h3>
                <p>
                  7TO7 is a dynamic web application that allows users to explore
                  and discover new content. With a sleek design and intuitive
                  interface, 7TO7 provides an engaging user experience. Built
                  with JavaScript, HTML, and CSS, this project demonstrates my
                  ability to create responsive and interactive web applications.
                </p>
                <div className="project-tags">
                  <span className="tag">JavaScript</span>
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://7to7.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header"></div>
              <div className="project-content">
                <h3>Asili safaris</h3>
                <p>
                  Asili Safaris is a travel and tourism website that provides
                  information about safari tours and packages. The website is
                  designed to be visually appealing and user-friendly, allowing
                  visitors to easily navigate through the available options and
                  make bookings. Built with JavaScript, HTML, and CSS, this
                  project showcases my skills in creating responsive and
                  interactive web applications.
                </p>
                <div className="project-tags">
                  <span className="tag">JavaScript</span>
                  <span className="tag">HTML/CSS</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://asili-safaris.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="section-container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>First Role - Frontend Developer</h3>
                <p className="timeline-date">Coming Soon</p>
                <p>
                  Seeking opportunities to grow my skills and contribute to
                  innovative projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            I'd love to hear from you! Feel free to reach out.
          </p>
          <div className="contact-methods">
            <a href="mailto:johnkatana624@gmail.com" className="contact-card">
              <span className="contact-icon">📧</span>
              <span>johnkatana624@gmail.com</span>
            </a>
            <a
              href="https://github.com/Katana-Junior"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">🐙</span>
              <span>GitHub</span>
            </a>
            <a
              href="https://wa.me/254707297649"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">💬</span>
              <span>WhatsApp: 0707297649</span>
            </a>
            <a href="#contact" className="contact-card">
              <span className="contact-icon">📄</span>
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 John Katana. All rights reserved.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
