'use client';

import { useState } from 'react';
import ProjectCard, { Project } from './ProjectCard';

const projects: Project[] = [
  {
    title: 'Orbital Mechanics Simulator',
    description: 'Interactive web application simulating planetary orbits using Newtonian physics and numerical integration methods.',
    tech: ['Next.js', 'TypeScript', 'Canvas API'],
    categories: ['physics', 'astronomy']
  },
  {
    title: 'Mathematical Visualization Tool',
    description: 'Real-time 3D visualization of complex mathematical functions and fractals with interactive parameter controls.',
    tech: ['React', 'WebGL', 'Math.js'],
    categories: ['math']
  },
  {
    title: 'Spectral Analysis Dashboard',
    description: 'Data analysis platform for astronomical spectroscopy with automated line identification and Doppler shift calculations.',
    tech: ['Python', 'NumPy', 'D3.js'],
    categories: ['astronomy', 'physics']
  },
  {
    title: 'Quantum State Visualizer',
    description: 'Educational tool for visualizing quantum mechanical wavefunctions and probability distributions in various potential wells.',
    tech: ['TypeScript', 'Three.js', 'Web Workers'],
    categories: ['physics']
  },
  {
    title: 'Number Theory Explorer',
    description: 'Interactive exploration of prime numbers, modular arithmetic, and cryptographic algorithms with step-by-step explanations.',
    tech: ['React', 'TypeScript', 'KaTeX'],
    categories: ['math']
  },
  {
    title: 'Celestial Navigation Calculator',
    description: 'Traditional celestial navigation calculations combined with modern astronomical data for educational purposes.',
    tech: ['Next.js', 'Astronomy APIs', 'Leaflet'],
    categories: ['astronomy', 'math']
  }
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'astronomy' | 'math' | 'physics'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.categories?.includes(filter));

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

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center text-gray-400 py-12">
          No projects found in this category.
        </div>
      )}
    </>
  );
}
