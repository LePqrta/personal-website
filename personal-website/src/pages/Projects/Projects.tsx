import React from "react";
import './Projects.css';
import data from '../../data/projects.json';

type Project = {
  name: string;
  url: string;
  description: string;
  language: string;
  image?: string;
};

type ProjectData = {
  projects: Project[];
};

function Projects() {
  // Safely cast the imported JSON to our Type
  const projects = (data as ProjectData).projects ?? [];

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
            {/* Only render the image tag if an image string actually exists */}
            {project.image && (
                <img src={project.image} alt={project.name} className="project-image" />
            )}
            </a>
        ))}
        </div>
    </section>
  );
}

export default Projects;