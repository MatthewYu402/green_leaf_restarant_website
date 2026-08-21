import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-content">
        <div className="site-footer-brand">
          <h2 className="site-footer-name">Green Leaf Sushi</h2>
          <p className="site-footer-tagline">© 2026 Green Leaf Sushi. A family-run restaurant.</p>
        </div>

        <nav className="site-footer-links">
          <Link to="/about" className="site-footer-link">Contact</Link>
          <Link to="/privacy-policy" className="site-footer-link">Privacy Policy</Link>
          <Link to="/careers" className="site-footer-link">Careers</Link>
        </nav>
      </div>
    </footer>
  );
}