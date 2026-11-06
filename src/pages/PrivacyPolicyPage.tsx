import './PrivacyPolicyPage.css';
import { Fragment } from 'react';
import { privacyPolicy } from '@/content';

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-page">
      <div className="privacy-card">
        <h1 className="privacy-title">{privacyPolicy.title}</h1>
        <p className="privacy-updated">{privacyPolicy.updated}</p>
        <p className="privacy-intro">{privacyPolicy.intro}</p>

        {privacyPolicy.sections.map((section) => (
          <Fragment key={section.title}>
            <h2 className="privacy-section-title">{section.title}</h2>
            {section.list && (
              <ul className="privacy-list">
                {section.list.map((entry) => (
                  <li key={entry.label}>
                    <strong>{entry.label}</strong> {entry.text}
                  </li>
                ))}
              </ul>
            )}
            {section.text && (
              <p>
                {section.text}
                {section.email && (
                  <>
                    {' '}
                    <a href={`mailto:${section.email}`} className="privacy-contact-link">
                      {section.email}
                    </a>
                    .
                  </>
                )}
              </p>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
