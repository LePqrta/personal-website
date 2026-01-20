import React from "react";
import './Projects.css';
import projectData from '../../data/projects.json';
import { Project } from '../../types'; 
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

function Projects() {
  useDocumentTitle('Projects | Onat Kaan Atılgan');
  const projects: Project[] = projectData.projects;

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={project.name}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div>
              <strong>Language:</strong> {project.language}
            </div>
            {project.image && (
              <img 
                src={project.image} 
                alt={project.altText || `Screenshot of ${project.name}`} 
                className="project-image"
                loading="lazy"
              />
            )}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;