import './CareersPage.css'

// Components
import Section from '../components/shared/Section'

const EMAIL = "hiring@greenleafsushi.com"; // TODO: replace with real address
const SUBJECT = encodeURIComponent("Job Application - Green Leaf Sushi");
const BODY = encodeURIComponent(
  "Hello,\n\nI'm interested in employment opportunities at Green Leaf Sushi. Please find my resume attached.\n\n"
);
const OPEN_ROLES: string[] = [];

export default function CareersPage() {
  return (
    <div className="careers-page">
      <Section className="reveal-block-slide">
        <div className="careers-card">
          <h1 className="careers-title">Join Our Team</h1>
          <p className="careers-intro">
            We're always looking for passionate people who care about food, hospitality,
            and community. If that sounds like you, we'd love to hear from you — even if
            you don't see a role listed below.
          </p>

          <div className="careers-roles">
            <h2 className="careers-roles-title">Current Openings</h2>
            <ul className="careers-roles-list">
              {OPEN_ROLES.map((role) => (
                <li key={role} className="careers-role-item">{role}</li>
              ))}
            </ul>
          </div>

          <a
            href={`mailto:${EMAIL}?subject=${SUBJECT}&body=${BODY}`}
            className="careers-apply-button"
          >
            Email Your Resume
          </a>

          <p className="careers-privacy-note">
            By emailing us, you're sending your resume and any information it contains
            directly to our hiring team. We only use it to evaluate you for employment
            and don't share it with third parties. See our{' '}
            <a href="/privacy-policy" className="careers-privacy-link">Privacy Policy</a>{' '}
            for details, or contact us if you'd like your resume deleted from our inbox.
          </p>
        </div>
      </Section>
    </div>
  );
}