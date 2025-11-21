# Portfolio

Tran Luong's personal portfolio website built with Next.js, featuring an astro-science inspired theme.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Features

- Modern, responsive design
- **Astro-science theme** with space-inspired visuals
- **Animated starfield background** with parallax effects
- **Interactive solar system** navigation in hero section
- **Project filtering** by category
- **Accessibility features** including reduced motion support
- Mobile-friendly navigation
- Fast performance with Next.js
- TypeScript for type safety
- Sections: Hero, About, Skills, Projects, Contact

## Astro Theme Customization

### Color Palette

The theme uses CSS variables defined in `app/astro-theme.css`. You can customize the color scheme by modifying these variables:

```css
:root {
  /* Primary Colors */
  --color-primary: var(--astro-cosmic-cyan); /* #00d9ff */
  --color-secondary: var(--astro-solar-gold); /* #ffd700 */
  --color-accent: var(--astro-orbital-magenta); /* #ff00ff */

  /* Background Colors */
  --color-background: var(--astro-void-black); /* #020814 */
  --color-background-alt: var(--astro-deep-space); /* #0a0e27 */
}
```

### Starfield Configuration

The starfield background can be customized in `app/components/StarfieldBackground.tsx`:

```typescript
new Starfield("starfield-canvas", {
  starCount: 250,
  twinkle: true,
  mouseParallax: true,
  scrollParallax: true,
});
```

### Orbital Mechanics and Tuning

The solar system hero features physics-based orbital animations using Kepler's Third Law (T ∝ a^1.5). The orbits are computed dynamically by the `solar-orbits.js` script.

#### How Orbital Periods are Computed

Each orbit's period is calculated using:

```
T = basePeriod × (radius / baseRadius)^1.5
```

Where:

- `basePeriod` = 20 seconds (innermost orbit)
- `baseRadius` = 90 pixels (innermost orbit)
- Exponent of 1.5 follows Kepler's Third Law

This creates realistic orbital mechanics where outer planets move more slowly than inner planets.

#### Customizing Orbit Speeds

Edit `/public/assets/js/solar-orbits.js` to tune the orbital behavior:

```javascript
const CONFIG = {
  baseRadius: 90,
  basePeriod: 20,
  keplerExponent: 1.5,
  phaseRandomness: 45,
  minPeriod: 10,
  maxPeriod: 120,
};
```

**Key Parameters:**

- **basePeriod**: Controls overall speed (lower = faster orbits)
- **keplerExponent**: Set to 1.5 for realistic physics, or 1.0 for uniform speeds
- **phaseRandomness**: Randomizes starting positions to avoid perfect alignment

#### Adding Planets to Solar System

To add or modify planets in the solar system navigation, edit the `planets` array in `app/components/SolarSystem.tsx`:

```typescript
const planets: Planet[] = [
  {
    name: "Section Name",
    image: "/assets/img/planets/planet1.svg",
    section: "section-id",
    orbitClass: "orbit-1",
    color: "#hexcolor",
    radius: 90,
  },
  // ... more planets
];
```

The `data-radius` attribute is automatically set on each orbit element, which the solar-orbits.js script uses to compute the period.

### Project Categories

Projects can be tagged with science categories in `app/components/ProjectsSection.tsx`:

```typescript
{
  title: 'Project Name',
  description: 'Project description',
  tech: ['Tech1', 'Tech2'],
  categories: ['AI', 'DS', 'Web', ...]
}
```

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

#### Customizing Band Gradients

Use the `band` prop on the `Section` component to manually specify the gradient:

```tsx
import Section from './components/Section';

// Blue gradient band
<Section id="example" title="Example Section" band="blue">
  {/* Content */}
</Section>

// Dark gradient band
<Section id="example" title="Example Section" band="dark">
  {/* Content */}
</Section>

// No gradient band
<Section id="example" title="Example Section">
  {/* Content */}
</Section>
```

#### Gradient Styles

The gradient bands are defined in `app/astro-theme.css`:

- **`.universe-band--blue`**: Applies a subtle blue gradient overlay
  - `linear-gradient(160deg, rgba(0, 140, 255, 0.18), rgba(0, 34, 85, 0.40))`
- **`.universe-band--dark`**: Applies a dark/black gradient overlay
  - `linear-gradient(160deg, rgba(0, 0, 0, 0.55), rgba(8, 12, 24, 0.65))`

Both gradients maintain low opacity to allow the starfield to show through while creating distinct atmospheric zones.

#### Accessibility

- **Text Contrast**: All gradients ensure WCAG AA compliance for text readability
- **Light Mode**: High-contrast fallback increases opacity when `prefers-color-scheme: light` is detected
- **Layering**: Gradient overlays use proper z-index to work alongside accent overlays without conflicts

### Accessibility

The theme automatically respects user preferences:

- **Reduced Motion**: Animations are disabled when `prefers-reduced-motion` is set
- **Color Contrast**: All text meets WCAG AA standards
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Readers**: ARIA labels and semantic HTML for better accessibility

### Performance Optimization

The starfield automatically adjusts complexity based on device capabilities:

- **Mobile devices**: 100 stars
- **Medium screens**: 200 stars
- **Large screens**: 300 stars

Low-end devices get a static background when reduced motion is preferred.

## Asset Credits

All visual assets are custom-created SVGs with no external dependencies. They are free to use and modify.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
