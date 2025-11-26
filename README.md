# Portfolio

Tran Luong's personal portfolio website built with Next.js, featuring an astro-science inspired theme.

## Technologies Used

- **Next.js 16** - React framework with App Router.
- **React 19** - UI library.
- **TypeScript** - Type-safe JavaScript.
- **Tailwind CSS 4** - Utility-first CSS framework.

## Features

- Modern, responsive design.
- **Astro-science theme** with space-inspired visuals.
- **Animated starfield background** with parallax effects.
- **Interactive solar system** navigation in hero section.
- **Project filtering** by category.
- **Accessibility features** including reduced motion support.
- Mobile-friendly navigation.
- Fast performance with Next.js.
- TypeScript for type safety.
- Sections: Hero, About, Skills, Projects, Contact.

## Astro Theme Customization

### Color Palette

- **Primary Colors**  
  --color-primary: var(--astro-cosmic-cyan); &emsp; #00d9ff  
  --color-secondary: var(--astro-solar-gold); &emsp; #ffd700  
  --color-accent: var(--astro-orbital-magenta); &emsp; #ff00ff

- **Background Colors**  
  --color-background: var(--astro-void-black); &emsp; #020814  
  --color-background-alt: var(--astro-deep-space); &emsp; #0a0e27

### Starfield Configuration

- **StarCount**: 250.
- **Twinkle**: true.
- **MouseParallax**: true.
- **ScrollParallax**: true.

### Orbital Mechanics and Tuning

The solar system hero features physics-based orbital animations using Kepler's Third Law (T ∝ a^1.5). The orbits are computed dynamically by the `solar-orbits.js` script.

#### How Orbital Periods are Computed

Each orbit's period is calculated using:

```
T = basePeriod × (radius / baseRadius)^1.5
```

Where:

- `basePeriod` = 20 seconds (innermost orbit).
- `baseRadius` = 90 pixels (innermost orbit).
- Exponent of 1.5 follows Kepler's Third Law.

This creates realistic orbital mechanics where outer planets move more slowly than inner planets.

**Key Parameters:**

- **basePeriod**: Controls overall speed (lower = faster orbits).
- **keplerExponent**: Set to 1.5 for realistic physics, or 1.0 for uniform speeds.
- **phaseRandomness**: Randomizes starting positions to avoid perfect alignment.

The `data-radius` attribute is automatically set on each orbit element, which the solar-orbits.js script uses to compute the period.

### Project Categories

- **Title**: 'Project Name'.
- **Description**: 'Project description'.
- **Tech**: 'Tech1', 'Tech2'.
- **Categories**: 'AI', 'DS', 'Web'.

### Alternating Section Gradient Bands

The portfolio features alternating blue and dark gradient bands across sections to create visual distinction while maintaining the single starfield background.

#### Default Pattern

Sections automatically alternate between blue and dark gradient tints:

- **Hero**: Blue tone
- **About Me**: Dark (black) tone
- **Skills & Technologies**: Blue tone
- **Featured Projects**: Dark (black) tone
- **Get In Touch**: Blue tone
- **Footer**: Dark (black) tone

#### Gradient Styles

The gradient bands are defined as:

- **`.universe-band--blue`**: Applies a subtle blue gradient overlay.
  - `linear-gradient(160deg, rgba(0, 140, 255, 0.18), rgba(0, 34, 85, 0.40))`.
- **`.universe-band--dark`**: Applies a dark/black gradient overlay.
  - `linear-gradient(160deg, rgba(0, 0, 0, 0.55), rgba(8, 12, 24, 0.65))`.

Both gradients maintain low opacity to allow the starfield to show through while creating distinct atmospheric zones.

#### Accessibility

- **Text Contrast**: All gradients ensure WCAG AA compliance for text readability.
- **Light Mode**: High-contrast fallback increases opacity when `prefers-color-scheme: light` is detected.
- **Layering**: Gradient overlays use proper z-index to work alongside accent overlays without conflicts.

### Accessibility

The theme automatically respects user preferences:

- **Reduced Motion**: Animations are disabled when `prefers-reduced-motion` is set.
- **Color Contrast**: All text meets WCAG AA standards.
- **Keyboard Navigation**: All interactive elements are keyboard accessible.
- **Screen Readers**: ARIA labels and semantic HTML for better accessibility.

### Performance Optimization

The starfield automatically adjusts complexity based on device capabilities:

- **Mobile devices**: 100 stars.
- **Medium screens**: 200 stars.
- **Large screens**: 300 stars.

Low-end devices get a static background when reduced motion is preferred.

## Asset Credits

All visual assets are custom-created SVGs with no external dependencies. They are free to use and modify.

## License

**Copyright (c) 2025 Tran Luong - All rights reserved.**  
Unauthorized use, copying, modification, or distribution of this software is prohibited.
