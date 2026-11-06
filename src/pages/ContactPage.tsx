import './ContactPage.css';
import { business, contact } from '@/content';
import RichText from '../components/ui/RichText';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1 className="contact-title">{contact.title}</h1>
        <p className="contact-intro">{contact.intro}</p>

        <div className="contact-details">
          <div className="contact-detail-row">
            <span className="contact-detail-label">Phone</span>
            <a href={`tel:${business.phone.tel}`} className="contact-detail-value contact-detail-link">
              {business.phone.display}
            </a>
          </div>

          <div className="contact-detail-row">
            <span className="contact-detail-label">Address</span>
            <span className="contact-detail-value">
              <RichText text={business.address} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
