import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects";
import { strings } from "./strings";

export function HomePage() {
  return (
    <>
      <section className="hero container">
        <p className="eyebrow">
          <span aria-hidden="true">✦ </span>
          {strings.home.eyebrow}
        </p>
        <h1>{strings.home.heading}</h1>
        <p className="hero-intro">{strings.home.introduction}</p>
        <a className="button" href="#work">
          {strings.home.viewWork} <span aria-hidden="true">↓</span>
        </a>
        <span className="hero-sparkle" aria-hidden="true">
          ✳
        </span>
      </section>
      <section className="section container" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{strings.home.projectEyebrow}</p>
            <h2>{strings.home.projectHeading}</h2>
          </div>
          <p className="notice">{strings.home.placeholderNotice}</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <section className="about-section" id="about">
        <div className="container about-inner">
          <div>
            <p className="eyebrow">{strings.home.aboutEyebrow}</p>
            <h2>{strings.home.aboutHeading}</h2>
          </div>
          <p>{strings.home.aboutText}</p>
        </div>
      </section>
    </>
  );
}
