import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-content">
        <div className="site-footer-brand">
          <h2 className="site-footer-name">Green Leaf Sushi</h2>
          <p className="site-footer-tagline">© 2026 Green Leaf Sushi. A family-run sanctuary.</p>
        </div>

        <nav className="site-footer-links">
          <Link to="/contact" className="site-footer-link">Contact</Link>
          <Link to="/privacy-policy" className="site-footer-link">Privacy Policy</Link>
          <Link to="/sustainability" className="site-footer-link">Sustainability</Link>
          <Link to="/careers" className="site-footer-link">Careers</Link>
        </nav>

        <Link to="/reservations" className="site-footer-cta">Join Our Table</Link>
      </div>
    </footer>
  );
}