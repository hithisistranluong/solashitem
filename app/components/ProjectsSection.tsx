'use client';

import { useState } from 'react';
import useSWR from 'swr';
import ProjectCard, { Project } from './ProjectCard';

// Fetcher function for SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'astronomy' | 'math' | 'physics'>('all');

  // Fetch projects from API with SWR
  const { data: response, error, isLoading } = useSWR(
    `/api/projects?category=${filter}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const projects: Project[] = response?.data || [];

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {(['all', 'astronomy', 'math', 'physics'] as const).map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all cursor-pointer border ${
              filter === category
                ? 'bg-blue-900/30 border-[rgba(0,217,255,0.8)] text-white'
                : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20'
            }`}
            style={filter === category ? { boxShadow: 'var(--shadow-glow-cyan)' } : {}}
          >
            {category === 'all' ? 'All Projects' : category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="text-center text-gray-400 py-12">
          Loading projects...
        </div>
      )}

      {/* Error State */}
      {error && !isLoading && (
        <div className="text-center text-red-400 py-12">
          Failed to load projects. Please try again later.
        </div>
      )}

      {/* Project Grid */}
      {!isLoading && !error && projects.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id || index} project={project} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !error && projects.length === 0 && (
        <div className="text-center text-gray-400 py-12">
          No projects found in this category.
        </div>
      )}
    </>
  );
}
