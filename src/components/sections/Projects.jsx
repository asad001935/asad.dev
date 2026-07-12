import SectionHeading from '../ui/SectionHeading';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        kicker=""
        title="Things I've built"
        subtitle="Six full stack applications covering authentication, dashboards, payments, and real CRUD workflows."
      />

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={(i % 3) * 0.1} />
        ))}
      </div>
    </section>
  );
}
