import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string | ReactNode;
  accent?: '1' | '2' | '3' | '4';
  band?: 'blue' | 'dark';
  children: ReactNode;
}

export default function Section({ id, title, accent, band, children }: SectionProps) {
  // Accent overlay styles
  const accentOverlay = {
    '1': 'bg-gradient-to-b from-transparent via-[var(--astro-cosmic-cyan)]/5 to-transparent',
    '2': 'bg-gradient-to-b from-transparent via-[var(--astro-solar-gold)]/5 to-transparent',
    '3': 'bg-gradient-to-b from-transparent via-[var(--astro-orbital-magenta)]/5 to-transparent',
    '4': 'bg-gradient-to-b from-transparent via-[var(--astro-nebula-purple)]/5 to-transparent',
  };

  // Border class names
  const accentBorder = {
    '1': 'border-t border-[var(--astro-cosmic-cyan)]/30',
    '2': 'border-t border-[var(--astro-solar-gold)]/30',
    '3': 'border-t border-[var(--astro-orbital-magenta)]/30',
    '4': 'border-t border-[var(--astro-nebula-purple)]/30',
  };

  // Band class for gradient overlay
  const bandClass = band ? `universe-band--${band}` : '';

  return (
    <section 
      id={id} 
      className={`page-section py-20 relative ${accent ? accentBorder[accent] : ''} ${bandClass}`}
    >
      {/* Gradient band overlay */}
      {band && (
        <div 
          className="section-panel absolute inset-0 pointer-events-none"
          aria-hidden="true"
        />
      )}
      
      {/* Subtle overlay */}
      {accent && (
        <div 
          className={`absolute inset-0 pointer-events-none ${accentOverlay[accent]}`}
          aria-hidden="true"
          style={{ zIndex: 2 }}
        />
      )}
      
      <div className="container mx-auto px-6 relative z-10">
        {title && (
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
