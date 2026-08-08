import { heroLinks, profile } from '../data/profile';
import { Icon } from './ui/Icon';
import './Hero.css';

/** Decorative code panel — mirrors the profile data, so it never goes stale. */
const codeLines = [
  { indent: 0, tokens: [['kw', 'final'], ['sp', ' '], ['var', 'developer'], ['sp', ' = '], ['type', 'Developer'], ['pun', '(']] },
  { indent: 1, tokens: [['key', 'name'], ['pun', ': '], ['str', `'${profile.name}'`], ['pun', ',']] },
  { indent: 1, tokens: [['key', 'role'], ['pun', ': '], ['str', `'${profile.role}'`], ['pun', ',']] },
  { indent: 1, tokens: [['key', 'basedIn'], ['pun', ': '], ['str', `'${profile.location}'`], ['pun', ',']] },
  { indent: 1, tokens: [['key', 'platforms'], ['pun', ': ['], ['str', "'mobile'"], ['pun', ', '], ['str', "'web'"], ['pun', ', '], ['str', "'tv'"], ['pun', '],']] },
  { indent: 0, tokens: [['pun', ');']] },
];

export function Hero() {
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

        <div className="hero__panel" aria-hidden="true">
          <div className="hero__panel-bar">
            <span className="hero__dot" />
            <span className="hero__dot" />
            <span className="hero__dot" />
            <span className="hero__panel-file">developer.dart</span>
          </div>
          <pre className="hero__code">
            <code>
              {codeLines.map((line, lineIndex) => (
                <span className="hero__code-line" key={lineIndex}>
                  <span className="hero__code-number">{lineIndex + 1}</span>
                  <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                    {line.tokens.map(([type, text], tokenIndex) => (
                      <span className={`tok tok--${type}`} key={tokenIndex}>
                        {text}
                      </span>
                    ))}
                  </span>
                </span>
              ))}
            </code>
          </pre>
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to the About section">
        <span>Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
