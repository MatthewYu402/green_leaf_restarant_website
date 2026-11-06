import type { PdfLink } from '@/types';
import './PdfLinks.css';

interface PdfLinksProps {
  links: PdfLink[];
  className?: string;
}

/** Centered row of links that open menu PDFs in a new tab. */
export default function PdfLinks({ links, className }: PdfLinksProps) {
  return (
    <div className={className ? `pdf-links ${className}` : 'pdf-links'}>
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="pdf-link">
          {link.label}
        </a>
      ))}
    </div>
  );
}
