import './CareersPage.css';
import { business, careers } from '@/content';
import Section from '../components/ui/Section';

const mailtoHref =
  `mailto:${business.hiringEmail}` +
  `?subject=${encodeURIComponent(careers.emailSubject)}` +
  `&body=${encodeURIComponent(careers.emailBody)}`;

export default function CareersPage() {
  const { privacyNote } = careers;

  return (
    <div className="careers-page">
      <Section reveal="slide">
        <div className="careers-card">
          <h1 className="careers-title">{careers.title}</h1>
          <p className="careers-intro">{careers.intro}</p>

          <div className="careers-roles">
            <h2 className="careers-roles-title">{careers.rolesTitle}</h2>
            <ul className="careers-roles-list">
              {careers.openRoles.map((role) => (
                <li key={role} className="careers-role-item">
                  {role}
                </li>
              ))}
            </ul>
          </div>

          <a href={mailtoHref} className="careers-apply-button">
            {careers.applyLabel}
          </a>

          <p className="careers-privacy-note">
            {privacyNote.before}{' '}
            <a href={privacyNote.link.href} className="careers-privacy-link">
              {privacyNote.link.label}
            </a>{' '}
            {privacyNote.after}
          </p>
        </div>
      </Section>
    </div>
  );
}
