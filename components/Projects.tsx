'use client';

import React from 'react';

interface Project {
  name: string;
  description: string;
  tech: string[];
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  // Use manifest images for projects, alternating if multiple images available
  const projectImages = [
    '/assets/images/img_rectangle_369.png',
    '/assets/images/img_rectangle_369_1.png',
    '/assets/images/img_rectangle_369_396x836.png' // Additional for variety
  ];

  return (
    <section id="works" className="section-padding bg-background text-text">
      <div className="max-w-1100px mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-12">My Works</h2>

        {projects.map((project, index) => (
          <div key={index} className="border-t border-border py-12 grid md:grid-cols-2 gap-8 items-center first:border-t-0">
            {/* Left: project title, keywords */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-3xl font-bold uppercase tracking-wide">
                {project.name}
              </h3>
              <p className="text-lg leading-relaxed text-secondary">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((techItem, techIndex) => (
                  <span key={techIndex} className="bg-pageBackground text-secondary text-sm px-3 py-1 rounded-full border border-border">
                    {techItem}
                  </span>
                ))}
              </div>
              {/* Optional: Add a button for "View Project" */}
              {/* <button className="mt-6 px-6 py-3 bg-primary text-white rounded-8px font-semibold hover:bg-accent transition-colors self-start">
                View Project
              </button> */}
            </div>

            {/* Right: wide image block */}
            <div>
              <img
                src={projectImages[index % projectImages.length]}
                alt={project.name}
                className="w-full h-auto object-cover rounded-12px shadow-adizen-shadow min-h-400px border border-border"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;