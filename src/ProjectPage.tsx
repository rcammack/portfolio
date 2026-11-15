import type { Project } from "./projects";
import { strings } from "./strings";

export function ProjectPage({ project }: { project?: Project }) {
  if (!project) {
    return (
      <div className="container project-page">
        <a className="back-link" href="#/">
          ← {strings.project.back}
        </a>
        <h1>{strings.project.notFound}</h1>
        <p>{strings.project.notFoundText}</p>
      </div>
    );
  }

  return (
    <article className={`project-page container accent-${project.accent}`}>
      <a className="back-link" href="#/">
        ← {strings.project.back}
      </a>
      <header className="project-header">
        <p className="eyebrow">
          {project.copy.category} · {strings.project.placeholder}
        </p>
        <h1>{project.copy.title}</h1>
        <p className="project-lead">{project.copy.shortDescription}</p>
      </header>
      {project.images.map((image) => (
        <img
          key={image.src}
          className="project-visual"
          src={`${import.meta.env.BASE_URL}${image.src}`}
          alt={image.alt}
        />
      ))}
      <div className="project-details">
        <section>
          <h2>{strings.project.overview}</h2>
          <p>{project.copy.summary}</p>
        </section>
        <section>
          <h2>{strings.project.role}</h2>
          <p>{project.copy.role}</p>
          <ul>
            {project.copy.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        {project.articleUrl && project.copy.articleLabel && (
          <section>
            <h2>{strings.project.links}</h2>
            <a href={project.articleUrl}>
              {project.copy.articleLabel} <span aria-hidden="true">↗</span>
            </a>
          </section>
        )}
      </div>
    </article>
  );
}
