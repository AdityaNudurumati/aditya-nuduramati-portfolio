import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Education } from '../components/Education';
import { Experience } from '../components/Experience';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { SiteShell } from '../components/layout/SiteShell';

/**
 * The home page — one continuous scroll. The notes archive is deliberately not
 * here: it lives at /notes/ so this page stays a short read.
 */
export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </SiteShell>
  );
}
