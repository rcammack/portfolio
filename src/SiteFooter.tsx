import type { SiteConfig } from "./config";
import { strings } from "./strings";

export function SiteFooter({ config }: { config: SiteConfig }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="eyebrow">{strings.site.contact}</p>
          <p className="footer-note">{strings.site.footer}</p>
        </div>
        <div className="footer-links">
          <a href={config.links.linkedIn}>{strings.site.linkedIn}</a>
          <a href={config.links.email}>{strings.site.email}</a>
          {config.visibility.resume && (
            <a href={config.links.resume}>{strings.site.resume}</a>
          )}
          {config.visibility.github && (
            <a href={config.links.github}>{strings.site.github}</a>
          )}
        </div>
      </div>
    </footer>
  );
}
