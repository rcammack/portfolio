import type { Project } from "./projects";
import { strings } from "./strings";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <a className="card-link" href={`#/projects/${project.id}`}>
        <div className="card-image">
          {project.images[0] && (
            <img
              src={`${import.meta.env.BASE_URL}${project.images[0].src}`}
              alt={project.images[0].alt}
            />
          )}
        </div>
        <div className="card-content">
          <p className="eyebrow">{project.copy.category}</p>
          <h3>{project.copy.title}</h3>
          <p>{project.copy.shortDescription}</p>
          <span className="text-link">
            {strings.home.viewProject} <span aria-hidden="true">↗</span>
          </span>
        </div>
      </a>
    </article>
  );
}
