import { useInView } from '../../hooks/useInView';
import './Section.css'

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className = ' '}: SectionProps) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref = {ref}
      className={`section ${isVisible ? 'section-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
} 
  