import { useEffect, useState } from "react";
import { siteConfig, type SiteConfig } from "./config";
import { projects } from "./projects";
import { strings } from "./strings";
import { HomePage } from "./HomePage";
import { ProjectPage } from "./ProjectPage";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useTheme } from "./useTheme";

export default function App({ config = siteConfig }: { config?: SiteConfig }) {
  const [hash, setHash] = useState(window.location.hash);
  const [theme, toggleTheme] = useTheme(config.themeStorageKey);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    document.title = `${strings.site.name} · ${strings.site.descriptor}`;
    if (hash === "#about") {
      document.getElementById("about")?.scrollIntoView();
    } else if (hash.startsWith("#/")) {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const isProject = hash.startsWith("#/projects/");
  const project = projects.find((item) => hash === `#/projects/${item.id}`);

  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        {strings.site.skipToContent}
      </a>
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />
      <main id="main" tabIndex={-1}>
        {isProject ? <ProjectPage project={project} /> : <HomePage />}
      </main>
      <SiteFooter config={config} />
    </>
  );
}
