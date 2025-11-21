/**
 * Solar Orbits
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    baseRadius: 90,
    basePeriod: 20,
    keplerExponent: 1.5,
    phaseRandomness: 45,
    minPeriod: 10,
    maxPeriod: 120,
  };

  /**
   * Orbital period
   */
  function computeOrbitalPeriod(radius) {
    const ratio = radius / CONFIG.baseRadius;
    const period = CONFIG.basePeriod * Math.pow(ratio, CONFIG.keplerExponent);
    
    return Math.max(CONFIG.minPeriod, Math.min(CONFIG.maxPeriod, period));
  }

  /**
   * Generate a random phase offset to avoid perfect alignment
   */
  function generatePhaseOffset() {
    return Math.random() * CONFIG.phaseRandomness;
  }

  /**
   * Check if user prefers reduced motion
   */
  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Detect low-end devices
   */
  function isLowEndDevice() {
    // Only check for very low memory
    if (navigator.deviceMemory && navigator.deviceMemory < 1) {
      return true;
    }
    
    return false;
  }

  /**
   * Initialize orbital mechanics for all .orbit elements
   */
  function initializeOrbits() {
    const orbits = document.querySelectorAll('.orbit');
    
    if (orbits.length === 0) {
      console.warn('No .orbit elements found');
      return;
    }

    // Check if animations should be disabled
    const shouldDisableAnimations = prefersReducedMotion() || isLowEndDevice();
    
    orbits.forEach((orbit, index) => {
      // Get radius from data attribute or compute from orbit size
      let radius;
      if (orbit.hasAttribute('data-radius')) {
        radius = parseFloat(orbit.getAttribute('data-radius'));
      } else if (orbit.hasAttribute('data-semimajor')) {
        radius = parseFloat(orbit.getAttribute('data-semimajor'));
      } else {
        // Compute from orbit element's width
        const orbitWidth = orbit.offsetWidth;
        radius = orbitWidth / 2;
      }

      // Compute orbital period
      const duration = computeOrbitalPeriod(radius);
      
      // Generate phase offset
      const phase = generatePhaseOffset();
      
      // Apply CSS custom properties
      orbit.style.setProperty('--orbit-radius', `${radius}px`);
      orbit.style.setProperty('--orbit-duration', `${duration}s`);
      orbit.style.setProperty('--orbit-phase', `${phase}deg`);
      
      // If animations should be disabled, set very long duration
      if (shouldDisableAnimations) {
        orbit.style.setProperty('--orbit-duration', '0.01s');
        orbit.style.setProperty('animation-iteration-count', '1');
      }
    });

    // Handle reduced motion preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', (e) => {
      if (e.matches) {
        orbits.forEach(orbit => {
          orbit.style.setProperty('--orbit-duration', '0.01s');
          orbit.style.setProperty('animation-iteration-count', '1');
        });
      } else {
        // Re-initialize with normal durations
        initializeOrbits();
      }
    });
  }

  /**
   * Initialize when DOM is ready
   */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeOrbits);
  } else {
    initializeOrbits();
  }

  // Re-initialize on window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initializeOrbits, 250);
  });

  // Export for programmatic access
  if (typeof window !== 'undefined') {
    window.SolarOrbits = {
      init: initializeOrbits,
      config: CONFIG,
      computeOrbitalPeriod: computeOrbitalPeriod
    };
  }
})();
