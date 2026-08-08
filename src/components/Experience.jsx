import { experience } from '../data/experience';
import { Section } from './ui/Section';
import { Icon } from './ui/Icon';
import './Timeline.css';

export function Experience() {
  if (experience.length === 0) return null;

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I’ve worked"
      lede="Roles and the work that went into them."
    >
      <ol className="timeline">
        {experience.map((entry) => (
          <li className="timeline__item" key={entry.id}>
            <span className="timeline__dot" aria-hidden="true" />

            <div className="card timeline__card">
              <p className="timeline__period">
                {entry.period}
                {entry.location && (
                  <span className="timeline__location">{entry.location}</span>
                )}
                {entry.current && <span className="badge">Current</span>}
              </p>

              <h3 className="timeline__role">{entry.role}</h3>

              <p className="timeline__company">
                {entry.companyUrl ? (
                  <a href={entry.companyUrl} target="_blank" rel="noreferrer noopener">
                    {entry.company}
                    <Icon name="external" size={13} />
                  </a>
                ) : (
                  entry.company
                )}
              </p>

              {entry.summary && <p className="timeline__summary">{entry.summary}</p>}

              {entry.points?.length > 0 && (
                <ul className="timeline__points">
                  {entry.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}

              {entry.tech?.length > 0 && (
                <ul className="tag-list timeline__tech">
                  {entry.tech.map((item) => (
                    <li className="tag" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
