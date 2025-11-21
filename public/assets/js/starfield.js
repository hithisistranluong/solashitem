/**
 * Starfield
 */

class Starfield {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      console.warn('Starfield: Canvas element not found');
      return;
    }
    
    this.ctx = this.canvas.getContext('2d');
    
    // Defaults Configuration
    this.config = {
      starCount: options.starCount || this.getOptimalStarCount(),
      speed: options.speed || 0.2,
      mouseParallax: options.mouseParallax !== false,
      scrollParallax: options.scrollParallax !== false,
      twinkle: options.twinkle !== false,
      minSize: options.minSize || 0.5,
      maxSize: options.maxSize || 2.5,
      ...options
    };
    
    this.stars = [];
    this.mouse = { x: 0, y: 0 };
    this.scroll = 0;
    this.animationId = null;
    this.isReducedMotion = this.checkReducedMotion();
    
    this.init();
  }
  
  /**
   * Check if user prefers reduced motion
   */
  checkReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  
  /**
   * Determine optimal star count based on device performance
   */
  getOptimalStarCount() {
    const pixelRatio = window.devicePixelRatio || 1;
    const area = window.innerWidth * window.innerHeight;
    
    // Reduce stars on mobile/low-end devices
    if (area < 500000 || pixelRatio > 2) {
      return 100;
    } else if (area < 1000000) {
      return 200;
    } else {
      return 300;
    }
  }
  
  /**
   * Initialize the starfield
   */
  init() {
    this.resize();
    this.createStars();
    
    // Event listeners
    window.addEventListener('resize', () => this.resize());
    
    if (this.config.mouseParallax && !this.isReducedMotion) {
      window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    }
    
    if (this.config.scrollParallax && !this.isReducedMotion) {
      window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    }
    
    // Start animation if motion is allowed
    if (!this.isReducedMotion) {
      this.animate();
    } else {
      // Static render for reduced motion
      this.render();
    }
  }
  
  /**
   * Handle canvas resize
   */
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    
    // Recreate stars on resize
    if (this.stars.length > 0) {
      this.createStars();
    }
  }
  
  /**
   * Create stars with random properties
   */
  createStars() {
    this.stars = [];
    
    for (let i = 0; i < this.config.starCount; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        z: Math.random(),
        size: this.config.minSize + Math.random() * (this.config.maxSize - this.config.minSize),
        opacity: 0.3 + Math.random() * 0.7,
        twinkleSpeed: this.config.twinkle ? 0.5 + Math.random() * 2 : 0,
        twinklePhase: Math.random() * Math.PI * 2
      });
    }
  }
  
  /**
   * Handle mouse movement for parallax
   */
  onMouseMove(e) {
    this.mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
    this.mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
  }
  
  /**
   * Handle scroll for parallax
   */
  onScroll() {
    this.scroll = window.pageYOffset;
  }
  
  /**
   * Update star positions and properties
   */
  update() {
    const time = Date.now() * 0.001;
    
    this.stars.forEach(star => {
      // Twinkle effect
      if (this.config.twinkle && star.twinkleSpeed > 0) {
        star.opacity = 0.3 + 0.7 * Math.abs(
          Math.sin(time * star.twinkleSpeed + star.twinklePhase)
        );
      }
    });
  }
  
  /**
   * Render stars on canvas
   */
  render() {
    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Render stars
    this.stars.forEach(star => {
      // Calculate parallax offset
      const parallaxX = this.config.mouseParallax ? 
        this.mouse.x * star.z * 20 : 0;
      const parallaxY = this.config.mouseParallax ? 
        this.mouse.y * star.z * 20 : 0;
      const scrollOffset = this.config.scrollParallax ? 
        this.scroll * star.z * 0.1 : 0;
      
      // Calculate final position
      let x = star.x + parallaxX;
      let y = star.y + parallaxY - scrollOffset;
      
      // Wrap around edges
      if (x < 0) x += this.canvas.width;
      if (x > this.canvas.width) x -= this.canvas.width;
      if (y < 0) y += this.canvas.height;
      if (y > this.canvas.height) y -= this.canvas.height;
      
      // Draw star
      this.ctx.beginPath();
      this.ctx.arc(x, y, star.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(240, 244, 248, ${star.opacity})`;
      this.ctx.fill();
      
      // Add glow for larger stars
      if (star.size > 1.5) {
        const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, star.size * 3);
        gradient.addColorStop(0, `rgba(0, 217, 255, ${star.opacity * 0.3})`);
        gradient.addColorStop(1, 'transparent');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(x - star.size * 3, y - star.size * 3, star.size * 6, star.size * 6);
      }
    });
  }
  
  /**
   * Animation loop
   */
  animate(currentTime = 0) {
    this.lastTime = this.lastTime || currentTime;
    
    this.update();
    this.render();
    
    this.animationId = requestAnimationFrame((time) => this.animate(time));
  }
  
  /**
   * Clean up
   */
  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    window.removeEventListener('resize', () => this.resize());
    window.removeEventListener('mousemove', (e) => this.onMouseMove(e));
    window.removeEventListener('scroll', () => this.onScroll());
    
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
  
  /**
   * Pause animation
   */
  pause() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
  
  /**
   * Resume animation
   */
  resume() {
    if (!this.animationId && !this.isReducedMotion) {
      this.animate();
    }
  }
  
  /**
   * Update configuration
   */
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    
    if (newConfig.starCount !== undefined) {
      this.createStars();
    }
  }
}

// Auto-initialize if DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.Starfield = Starfield;
    });
  } else {
    window.Starfield = Starfield;
  }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Starfield;
}
