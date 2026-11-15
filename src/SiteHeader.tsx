import { strings } from "./strings";
import type { Theme } from "./useTheme";

export function SiteHeader({
  theme,
  onToggleTheme,
}: {
  theme: Theme;
  onToggleTheme: () => void;
}) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#/">
          <span className="brand-mark" aria-hidden="true">
            ✳
          </span>
          <span>{strings.site.name}</span>
        </a>
        <nav className="nav" aria-label={strings.site.name}>
          <a href="#/">{strings.site.work}</a>
          <a href="#about">{strings.site.about}</a>
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={
              theme === "light"
                ? strings.site.darkTheme
                : strings.site.lightTheme
            }
          >
            <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
