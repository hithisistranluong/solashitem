'use client';

import Image from 'next/image';
import { useEffect } from 'react';

interface Planet {
  name: string;
  image: string;
  section: string;
  orbitClass: string;
  color: string;
  radius: number;
}

const planets: Planet[] = [
  { 
    name: 'About', 
    image: '/assets/img/planets/mercury.svg', 
    section: 'about',
    orbitClass: 'orbit-1',
    color: '#c9c9c9',
    radius: 90
  },
  { 
    name: 'Skills', 
    image: '/assets/img/planets/venus.svg', 
    section: 'skills',
    orbitClass: 'orbit-2',
    color: '#ffd89b',
    radius: 140
  },
  { 
    name: 'Projects', 
    image: '/assets/img/planets/earth.svg', 
    section: 'projects',
    orbitClass: 'orbit-3',
    color: '#6eb5ff',
    radius: 190
  },
  { 
    name: 'Contact', 
    image: '/assets/img/planets/mars.svg', 
    section: 'contact',
    orbitClass: 'orbit-4',
    color: '#ff6b4a',
    radius: 240
  },
];

export default function SolarSystem() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/assets/js/solar-orbits.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="solar-system-container">
      {/* Central Sun */}
      <div 
        className="central-sun" 
        role="img" 
        aria-label="Sun - Home"
        title="Home"
      />
      
      {/* Orbital paths */}
      {planets.map((planet) => (
        <div 
          key={planet.name} 
          className={`orbit ${planet.orbitClass}`}
          data-radius={planet.radius}
          aria-hidden="true"
        >
          <button
            className="planet orbit-planet"
            onClick={() => scrollToSection(planet.section)}
            aria-label={`Navigate to ${planet.name} section`}
            title={planet.name}
            style={{ color: planet.color }}
          >
            <Image
              src={planet.image}
              alt={planet.name}
              width={50}
              height={50}
              priority
            />
          </button>
        </div>
      ))}
      
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm text-gray-400">
          Click planets to navigate
        </p>
      </div>
    </div>
  );
}
