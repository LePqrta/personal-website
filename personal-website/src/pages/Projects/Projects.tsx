import React from 'react';
import { motion } from 'framer-motion';
import Card from '../../components/UI/Card';
import { Github, ExternalLink } from 'lucide-react';
import { getProjects } from '../../services/data';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { Project } from '../../types';

export default function Projects() {
  useDocumentTitle('Projects | Onat Kaan Atılgan');
  const projects: Project[] = getProjects();

  return (
    <div className="py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-secondary">Projects</span></h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Selected work from full-stack development, mobile applications, AI/ML, and algorithmic projects.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full min-h-[280px] flex flex-col group hover:-translate-y-2 transition-transform duration-300">
              <div className="flex-grow flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-secondary">
                    <Github size={24} />
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 border border-white/10 text-text-muted hover:bg-secondary hover:text-dark transition-colors"
                      title="View repository"
                      aria-label={`View ${project.name} repository`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.name}</h3>
                <p className="text-text-muted text-sm mb-5 leading-relaxed flex-grow bg-transparent">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-primary border border-white/5">
                    {project.language}
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
