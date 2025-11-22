import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string | ReactNode;
  band?: 'blue' | 'dark';
  children: ReactNode;
}

export default function Section({ id, title, band, children }: SectionProps) {
  // Band class for gradient overlay
  const bandClass = band ? `universe-band--${band}` : '';

  return (
    <section 
      id={id} 
      className={`page-section py-20 relative border-t border-[var(--astro-cosmic-cyan))]/30 ${bandClass}`}
    >
      {/* Gradient band overlay */}
      {band && (
        <div 
          className="section-panel absolute inset-0 pointer-events-none"
          aria-hidden="true"
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
