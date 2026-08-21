import './PrivacyPolicyPage.css'

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-page">
      <div className="privacy-card">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-updated">Last Updated: August 2026</p>

        <p className="privacy-intro">
          At Green Leaf Sushi, we value your privacy. This page explains what limited
          information our website collects and how we handle it.
        </p>

        <h2 className="privacy-section-title">1. Information We Collect</h2>
        <ul className="privacy-list">
          <li>
            <strong>Hosting &amp; Server Logs:</strong> Our hosting provider may automatically
            collect standard server metrics, such as visitor counts and browser type, as
            part of normal web hosting. We don't add any analytics or tracking scripts of
            our own to the site.
          </li>
          <li>
            <strong>Embedded Google Map:</strong> Our Visit Us page includes an embedded
            Google Map. Loading this map may set cookies or collect data through Google's
            own service, governed by Google's Privacy Policy, not ours.
          </li>
          <li>
            <strong>Resumes &amp; Employment Inquiries:</strong> If you use our Careers page's
            email link, we receive your email address and whatever information you choose
            to include, such as a resume.
          </li>
        </ul>

        <h2 className="privacy-section-title">2. How We Use Your Information</h2>
        <p>
          Server metrics are used only to understand site performance. Resumes and
          employment inquiries are used strictly to evaluate candidates for open positions.
        </p>

        <h2 className="privacy-section-title">3. Information Sharing</h2>
        <p>
          We do not sell, rent, or trade your personal information. Resumes you send us
          are shared only internally with restaurant management for hiring purposes.
        </p>

        <h2 className="privacy-section-title">4. Contact Us</h2>
        <p>
          If you'd like us to delete a resume you've submitted from our inbox, or have any
          other questions about this policy, contact us at{' '}
          <a href="mailto:info@greenleafsushi.com" className="privacy-contact-link">
            info@greenleafsushi.com
          </a>.
        </p>
      </div>
    </div>
  );
}