import './Footer.css';
import { Link } from 'react-router-dom';
import { business, footer } from '@/content';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-content">
        <div className="site-footer-brand">
          <h2 className="site-footer-name">{business.name}</h2>
          <p className="site-footer-tagline">{footer.tagline}</p>
        </div>

        <nav className="site-footer-links">
          {footer.links.map((link) => (
            <Link key={link.href} to={link.href} className="site-footer-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
