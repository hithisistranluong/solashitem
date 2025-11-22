'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/90 backdrop-blur-sm border-b border-[var(--astro-cosmic-cyan))]/30">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <button onClick={() => scrollToSection('home')} className='cursor-pointer'>TL</button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} 
                    className="text-gray-300 transition-colors cursor-pointer
                              hover:text-[var(--color-primary)] hover:underline hover:underline-offset-6">
              Home
            </button>
            <button onClick={() => scrollToSection('about')}
                    className="text-gray-300 transition-colors cursor-pointer
                              hover:text-[var(--color-primary)] hover:underline hover:underline-offset-6">
              About
            </button>
            <button onClick={() => scrollToSection('skills')}
                    className="text-gray-300 transition-colors cursor-pointer
                              hover:text-[var(--color-primary)] hover:underline hover:underline-offset-6">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')}
                    className="text-gray-300 transition-colors cursor-pointer
                              hover:text-[var(--color-primary)] hover:underline hover:underline-offset-6">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')}
                    className="text-gray-300 transition-colors cursor-pointer
                              hover:text-[var(--color-primary)] hover:underline hover:underline-offset-6">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('home')}
                    className="block text-gray-300 transition-colors cursor-pointer
                              hover:text-[var(--color-primary)] hover:underline hover:underline-offset-6">
              Home
            </button>
            <button onClick={() => scrollToSection('about')}
                    className="block text-gray-300 transition-colors cursor-pointer
                              hover:text-[var(--color-primary)] hover:underline hover:underline-offset-6">
              About
            </button>
            <button onClick={() => scrollToSection('skills')}
                    className="block text-gray-300 transition-colors cursor-pointer
                              hover:text-[var(--color-primary)] hover:underline hover:underline-offset-6">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')}
                    className="block text-gray-300 transition-colors cursor-pointer
                              hover:text-[var(--color-primary)] hover:underline hover:underline-offset-6">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')}
                    className="block text-gray-300 transition-colors cursor-pointer
                              hover:text-[var(--color-primary)] hover:underline hover:underline-offset-6">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
