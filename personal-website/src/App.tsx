import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">Onat Kaan Atılgan</div>
        <ul className="navbar-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Contact</a></li>
        </ul>
      </nav>
      <main className="main-content">
        <section className="intro-section" id="home">
          <h1>About Me</h1>
          <p>
            Hi! I am Onat Kaan Atılgan, a senior computer engineering student at MEF University. 
            I am experienced in full-stack web development with experiences in both big enterprises and smaller companies.
            I currently work on personal projects about machine learning such as a licence plate recognition system.
          </p>
          <div className="experiences">
            <strong>Languages:</strong> Java, Python, JavaScript, HTML, CSS, SQL<br />
            <strong>Frameworks:</strong> React, ASP.NET, Spring Boot<br />
            <strong>Tools:</strong> Git/GitHub, Postman, Vercel, Docker
          </div>
        </section>
        <section className="experiences-section" id="experiences">
          <h2>Experience</h2>
          {/* Add your projects here */}
        </section>
      </main>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Onat Kaan Atılgan
      </footer>
    </div>
  );
}

export default App;