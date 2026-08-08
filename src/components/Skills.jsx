import { skillGroups } from '../data/skills';
import { Section } from './ui/Section';
import './Skills.css';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I work with"
      lede="Grouped by where they sit in a project rather than ranked by an arbitrary percentage."
    >
      <ul className="skills__grid">
        {skillGroups.map((group) => (
          <li className="card skill-card" key={group.id}>
            <h3 className="skill-card__title">{group.title}</h3>
            {group.description && (
              <p className="skill-card__description">{group.description}</p>
            )}
            <ul className="tag-list">
              {group.items.map((item) => (
                <li className="tag" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
