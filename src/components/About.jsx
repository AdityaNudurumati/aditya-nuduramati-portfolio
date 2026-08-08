import { aboutHighlights, aboutParagraphs } from '../data/about';
import { profile } from '../data/profile';
import { Section } from './ui/Section';
import './About.css';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering is the part I enjoy most"
      lede="A short introduction to how I work and what I'm building towards."
    >
      <div className="about__layout">
        <figure className="about__photo">
          <img
            src={profile.photo}
            srcSet={`${profile.photoSmall} 540w, ${profile.photo} 900w`}
            sizes="(min-width: 960px) 20rem, (min-width: 640px) 18rem, 16rem"
            alt={profile.photoAlt}
            loading="lazy"
            decoding="async"
            width="900"
            height="1125"
          />
        </figure>

        <div className="about__prose">
          {aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <dl className="about__facts">
          {aboutHighlights.map((highlight) => (
            <div className="about__fact" key={highlight.id}>
              <dt>{highlight.label}</dt>
              <dd>{highlight.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
