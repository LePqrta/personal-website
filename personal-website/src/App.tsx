import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">Onat Kaan Atılgan</div>
        <ul className="navbar-links">
          <li><a href="https://github.com/LePqrta">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/onat-kaan-atilgan/">LinkedIn</a></li>
        </ul>
      </nav>
      <main className="main-content">
        <section className="intro-section" id="home">
          <h1>About Me</h1>
          <p>
            Hi! I am Onat Kaan Atılgan, a senior computer engineering student at MEF University. 
            I am experienced in full-stack web development with experiences in both big enterprises and smaller companies.
            I am very eager to learn and work on projects and I am actively working on personal projects to improve my skills.
            
          </p>
          <div className="experiences">
            <strong>Languages:</strong> Java, Python, JavaScript, HTML, CSS, SQL<br />
            <strong>Frameworks:</strong> React, ASP.NET, Spring Boot<br />
            <strong>Tools:</strong> Git/GitHub, Postman, Vercel, Docker
          </div>
        </section>
<section className="experiences-section" id="experiences">
  <h2>My Experiences</h2>
  <div className="experience-card">
    <div className="experience-title">
      <strong>Software Development Intern at</strong>
      <span className="company">
        <a href="https://www.mintyfi.com" target="_blank" rel="noopener noreferrer">Mintyfi Software Technologies
  </a></span>
      <span className="dates">(August 2024 - September 2024)</span>
    </div>
    <ul className="experience-list">
      <li>Developed a backend-focused library management application using Spring Boot</li>
      <li>Implemented features such as authorization, authentication, dockerizing, and database integration</li>
    </ul>
  </div>
      <div className="experience-card">
    <div className="experience-title">
      <strong>Student Teaching Assistant at</strong>
      <span className="company">
        <a href="https://www.mef.edu.tr" target="_blank" rel="noopener noreferrer">MEF University
  </a></span>
      <span className="dates">(February 2025-June 2025)</span>
    </div>
    <ul className="experience-list">
      <li>Assisted students in understanding and implementing algorithms used in projects</li>
      <li>Provided technical support in labs for the development of the projects developed by students</li>
    </ul>
  </div>
      <div className="experience-card">
    <div className="experience-title">
      <strong>Freelance Software Development at</strong>
      <span className="company">
        <a href="https://www.diaistanbul.tr" target="_blank" rel="noopener noreferrer">Kompitürk Bilgisayar
  </a></span>
      <span className="dates">(May 2025-August 2025)</span>
    </div>
    <ul className="experience-list">
      <li>Assisted in the development of web applications using ASP.NET, Node.Js and React</li>
      <li>Contributed to both frontend and backend tasks</li>
    </ul>
  </div>
        <div className="experience-card">
    <div className="experience-title">
      <strong>Software Development Intern at</strong>
      <span className="company">
        <a href="https://www.zorlu.com" target="_blank" rel="noopener noreferrer">Zorlu Holding
  </a></span>
      <span className="dates">(August 2025-September 2025)</span>
    </div>
    <ul className="experience-list">
      <li>Contributed to the development of web applications that are used actively across Zorlu Holding companies and thousands of employees.</li>
      <li>Worked with ASP.NET, React, Razor (CSHTML) to add functionalities to applications.</li>
      <li>Gained experience in a corporate software development environment.</li>
    </ul>
  </div>
    <div className="experience-card">
    <div className="experience-title">
      <strong>IT Intern at</strong>
      <span className="company">
        <a href="https://socialofficetr.com/" target="_blank" rel="noopener noreferrer">Social Office
  </a></span>
      <span className="dates">(October 2025-Ongoing)</span>
    </div>
    <ul className="experience-list">
      <li>Contributed to the development of web applications that are used actively across Zorlu Holding companies and thousands of employees.</li>
      <li>Worked with ASP.NET, React, Razor (CSHTML) to add functionalities to applications.</li>
      <li>Gained experience in a corporate software development environment.</li>
    </ul>
  </div>
</section>
      </main>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Onat Kaan Atılgan
      </footer>
    </div>
  );
}

export default App;