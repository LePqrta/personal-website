import React from "react";
import './Projects.css';

const myProjects = [
  {
    name: "Tetris 2048",
    url: "https://github.com/LePqrta/Tetris_2048",
    description: "A fun mashup of Tetris and 2048 built with JavaScript.",
    language: "Python",
    image: "", 
  },
  {
    name: "LinkedIn Clone",
    url: "https://github.com/LePqrta/LinkedIn-Clone",
    description: "A LinkedIn clone web app. Fully functioning user authentication, post creation, likes, comments, and more.",
    language: "Frontend with React, Backend with Spring Boot, Database with PostgreSQL",
    image: "",
  },
  {
    name: "License Plate Recognition",
    url: "https://github.com/LePqrta/License-Place-Recognition-With-Machine-Learning",
    description: "Machine learning project for recognizing license plates. (In Progress)",
    language: "Python",
    image: "",
  },
  {
    name: "LZW Compression",
    url: "https://github.com/LePqrta/LZW-Compression",
    description: "Implementation of the LZW compression algorithm with Images.",
    language: "Python",
    image: "",
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="project-list">
        {myProjects.map((project) => (
          <div className="project-card" key={project.name}>
            <h3>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h3>
            <p>{project.description}</p>
            <div>
              <strong>Language:</strong> {project.language}
            </div>
            {/* Optional: show image if provided */}
            {project.image && (
              <img src={project.image} alt={project.name} className="project-image" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;