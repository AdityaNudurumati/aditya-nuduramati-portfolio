import { Icon } from './ui/Icon';
import './ProjectCard.css';

/**
 * Renders one project. Links are omitted rather than disabled when a URL is
 * missing, so the card never advertises something that does not exist.
 */
export function ProjectCard({ project }) {
  const {
    name,
    context,
    description,
    tech,
    github,
    demo,
    demoLabel,
    image,
    imageSmall,
    imageAlt,
    featured,
  } = project;
  const titleId = `project-${project.id}-title`;

  return (
    <article
      className={`card project-card ${featured ? 'project-card--featured' : ''}`}
      aria-labelledby={titleId}
    >
      <div className="project-card__media">
        {image ? (
          <img
            src={image}
            srcSet={imageSmall ? `${imageSmall} 900w, ${image} 1600w` : undefined}
            sizes="(min-width: 900px) 550px, 100vw"
            alt={imageAlt || `Screenshot of ${name}`}
            loading="lazy"
            decoding="async"
            width="1600"
            height="1000"
          />
        ) : (
          <div
            className="project-card__media-fallback"
            role="img"
            aria-label={`No screenshot available for ${name}`}
          >
            <Icon name="code" size={26} />
            <span>Screenshot coming soon</span>
          </div>
        )}
      </div>

      <div className="project-card__body">
        {featured && (
          <div className="project-card__meta">
            <span className="badge">Featured</span>
          </div>
        )}

        <h3 className="project-card__title" id={titleId}>
          {name}
        </h3>
        {context && <p className="project-card__context">{context}</p>}
        <p className="project-card__description">{description}</p>

        {tech?.length > 0 && (
          <ul className="tag-list project-card__tech">
            {tech.map((item) => (
              <li className="tag" key={item}>
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="project-card__actions">
          {github && (
            <a
              className="btn btn--secondary btn--sm"
              href={github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${name} source code on GitHub (opens in a new tab)`}
            >
              <Icon name="github" size={15} />
              Code
            </a>
          )}

          {demo && (
            <a
              className="btn btn--secondary btn--sm"
              href={demo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${name} — ${demoLabel ?? 'live demo'} (opens in a new tab)`}
            >
              <Icon name="external" size={15} />
              {demoLabel ?? 'Live Demo'}
            </a>
          )}

          {!github && (
            <p className="project-card__note">
              Company product — source is private
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
