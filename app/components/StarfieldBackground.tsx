'use client';

import { useEffect, useRef } from 'react';

interface StarfieldInstance {
  destroy?: () => void;
}

declare global {
  interface Window {
    Starfield?: new (canvasId: string, options?: Record<string, unknown>) => StarfieldInstance;
  }
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starfieldRef = useRef<StarfieldInstance | null>(null);

  useEffect(() => {
    // Initialize starfield when component mounts
    if (canvasRef.current && typeof window !== 'undefined') {
      // Wait for Starfield class to be available
      const initStarfield = () => {
        if (window.Starfield) {
          starfieldRef.current = new window.Starfield('starfield-canvas', {
            starCount: 250,
            twinkle: true,
            mouseParallax: true,
            scrollParallax: true,
          });
        }
      };

      // Try immediately or wait for script to load
      if (window.Starfield) {
        initStarfield();
      } else {
        setTimeout(initStarfield, 100);
      }
    }

    // Cleanup on unmount
    return () => {
      if (starfieldRef.current && starfieldRef.current.destroy) {
        starfieldRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="starfield-container">
      <canvas ref={canvasRef} id="starfield-canvas" />
    </div>
  );
}
