import './ContactPage.css'

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-intro">
          Have a question or want to place a takeout order?
          Give us a call — we'd love to hear from you.
        </p>

        <div className="contact-details">
          <div className="contact-detail-row">
            <span className="contact-detail-label">Phone</span>
            <a href="tel:4107710030" className="contact-detail-value contact-detail-link">
              (410) 771-0030
            </a>
          </div>

          <div className="contact-detail-row">
            <span className="contact-detail-label">Address</span>
            <span className="contact-detail-value">
              11313 York Road<br />Hunt Valley, MD 21030
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}