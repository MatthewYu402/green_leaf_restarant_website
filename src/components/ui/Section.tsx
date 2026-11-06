import type { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import './Section.css';

interface SectionProps {
  children: ReactNode;
  /**
   * How the section animates in when scrolled into view:
   *  - "slide": fades in while rising up
   *  - "fade":  opacity only (for dividers and small accents)
   *  - omitted: Home page full-viewport section
   */
  reveal?: 'slide' | 'fade';
  className?: string;
}

/** A block that animates in the first time it scrolls into view. */
export default function Section({ children, reveal, className }: SectionProps) {
  const { ref, isVisible } = useInView();
  const classes = ['section', isVisible && 'section-visible', reveal && `reveal-block-${reveal}`, className];

  return (
    <div ref={ref} className={classes.filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}
