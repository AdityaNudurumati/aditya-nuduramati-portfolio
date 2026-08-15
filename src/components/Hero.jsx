import { heroLinks, profile } from '../data/profile';
import { projects } from '../data/projects';
import { Icon } from './ui/Icon';
import './Hero.css';

/**
 * The hero showcases real shipped work rather than a decorative snippet, so
 * the first screen carries proof. It is a teaser — the Projects section below
 * holds the full write-up, and this links straight to the live listing.
 */
const showcase =
  projects.find((project) => project.heroShowcase) ??
  projects.find((project) => project.featured) ??
  projects[0];

export function Hero() {
  const showcaseBody = showcase && (
    <>
      <img
        className="hero__showcase-img"
        src={showcase.image}
        srcSet={
          showcase.imageSmall
            ? `${showcase.imageSmall} 900w, ${showcase.image} 1600w`
            : undefined
        }
        /* The panel is hidden below 1024px, so narrow viewports should never
           pick the large asset for something they will not render. */
        sizes="(min-width: 1024px) 46vw, 1px"
        alt={showcase.imageAlt || `Screenshot of ${showcase.name}`}
        width="1600"
        height="1000"
        decoding="async"
        fetchPriority="high"
      />
      <span className="hero__showcase-caption">
        <span className="hero__showcase-name">{showcase.name}</span>
        {showcase.metric && (
          <span className="hero__showcase-metric">{showcase.metric}</span>
        )}
      </span>
    </>
  );

  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            {profile.roleLong}
          </p>

          <h1 className="hero__title" id="hero-heading">
            <span className="hero__greeting">Hi, I&rsquo;m</span>
            <span className="hero__name">{profile.name}</span>
          </h1>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View My Work
              <Icon name="arrowRight" size={16} />
            </a>
            <a
              className="btn btn--secondary"
              href={profile.resumeUrl}
              download={profile.resumeFileName}
            >
              Download Resume
              <Icon name="download" size={16} />
            </a>
          </div>

          <ul className="hero__socials">
            {heroLinks.map((link) => {
              const isExternal = !link.href.startsWith('mailto:');
              return (
                <li key={link.id}>
                  <a
                    className="hero__social"
                    href={link.href}
                    aria-label={link.label}
                    {...(isExternal
                      ? { target: '_blank', rel: 'noreferrer noopener' }
                      : {})}
                  >
                    <Icon name={link.icon} size={18} />
                    <span>{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {showcase &&
          (showcase.demo ? (
            <a
              className="hero__panel hero__panel--link"
              href={showcase.demo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${showcase.name} — ${showcase.demoLabel ?? 'live listing'} (opens in a new tab)`}
            >
              {showcaseBody}
            </a>
          ) : (
            <div className="hero__panel">{showcaseBody}</div>
          ))}
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to the About section">
        <span>Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
