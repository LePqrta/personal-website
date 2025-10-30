import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Experiences from "./Experiences";
import './App.css';

function Home() {
  return (
    <section className="intro-section" id="home">
      <div className="experience-card">
        <h1>Hi, I am Onat!</h1>
        <p>
          Senior Computer Engineering Student at MEF University with experience in backend-focused web development,
          complemented by frontend work, across both startups and corporate environments. Interested in AI, Cloud, IoT, and NLP.
        </p>
      </div>
            <div className="experience-card">
        <h2>About Me</h2>
      <p>
        I am an ambitious and dedicated senior computer engineering student with a passion for software development. I had experiences working at different sizes of companies. This helped me to observe
        and get more experience in different work environments. Most of my experience is in web development, especially backend.
        However, I am currently working on my AI/ML skills with courses from my university and from personal projects. I look forward to applying my skills in real-world projects!
      </p>
      </div>
      <div className="experience-card">
      <h3>Skills</h3>
        <div className="skills">
          <strong>Languages:</strong> Java, Python, JavaScript, HTML, CSS, SQL<br />
          <strong>Frameworks:</strong> React, ASP.NET, Spring Boot<br />
          <strong>Tools:</strong> Git/GitHub, Postman, Vercel, Docker
        </div>
        </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-brand">Onat Kaan Atılgan</div>
          <ul className="navbar-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "active" : ""}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experiences"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Experiences
              </NavLink>
            </li>
            <li>
              <a href="https://github.com/LePqrta" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/onat-kaan-atilgan/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiences" element={<Experiences />} />
          </Routes>
        </main>
        <footer className="footer">
          &copy; {new Date().getFullYear()} Onat Kaan Atılgan
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;