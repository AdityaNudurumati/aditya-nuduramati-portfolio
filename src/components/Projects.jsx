import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Section } from './ui/Section';
import './Projects.css';

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I’ve shipped"
      lede="Production applications built at AquaExchange and used daily by farmers and internal teams, plus personal work built the same way."
    >
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </Section>
  );
}
