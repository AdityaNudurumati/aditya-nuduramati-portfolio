import { certifications, education } from '../data/education';
import { Section } from './ui/Section';
import { Icon } from './ui/Icon';
import './Education.css';

export function Education() {
  if (education.length === 0 && certifications.length === 0) return null;

  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic background"
      lede="Where I studied before moving into software."
    >
      <div className="education__grid">
        {education.map((entry) => (
          <article className="card education__card" key={entry.id}>
            <p className="education__period">{entry.period}</p>
            <h3 className="education__qualification">{entry.qualification}</h3>
            <p className="education__institution">{entry.institution}</p>
            {entry.location && (
              <p className="education__location">
                <Icon name="location" size={14} />
                {entry.location}
              </p>
            )}
            {entry.details && <p className="education__details">{entry.details}</p>}
          </article>
        ))}
      </div>

      {certifications.length > 0 && (
        <div className="education__certs">
          <h3 className="education__subtitle">Certifications &amp; courses</h3>
          <ul className="education__cert-list">
            {certifications.map((cert) => (
              <li className="education__cert" key={cert.id}>
                <div>
                  <p className="education__cert-name">
                    {cert.url ? (
                      <a href={cert.url} target="_blank" rel="noreferrer noopener">
                        {cert.name}
                        <Icon name="external" size={13} />
                      </a>
                    ) : (
                      cert.name
                    )}
                  </p>
                  <p className="education__cert-issuer">{cert.issuer}</p>
                </div>
                <span className="education__cert-period">{cert.period}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
