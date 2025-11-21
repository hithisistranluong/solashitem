'use client';

import Image from 'next/image';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  categories?: ('astronomy' | 'math' | 'physics')[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3 className="text-2xl font-bold text-white mb-3">
        {project.title}
      </h3>
      <p className="text-gray-300 mb-4">
        {project.description}
      </p>
      
      {/* Technology tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="bg-blue-900/30 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-700/50"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Category tags */}
      {project.categories && project.categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {project.categories.map((category) => (
            <span
              key={category}
              className={`category-tag ${category}`}
            >
              <Image
                src="/assets/img/orbital-icon.svg"
                alt=""
                width={16}
                height={16}
                className="orbital-icon"
              />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
