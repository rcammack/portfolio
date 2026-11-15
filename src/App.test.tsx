import { act, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import { siteConfig } from "./config";
import { projects } from "./projects";
import { strings } from "./strings";

function mockSystemTheme(dark: boolean) {
  const listeners = new Set<(event: MediaQueryListEvent) => void>();
  const media = {
    matches: dark,
    media: "(prefers-color-scheme: dark)",
    addEventListener: (
      _: string,
      callback: (event: MediaQueryListEvent) => void,
    ) => listeners.add(callback),
    removeEventListener: (
      _: string,
      callback: (event: MediaQueryListEvent) => void,
    ) => listeners.delete(callback),
  };
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => media),
  );
  return {
    change(matches: boolean) {
      media.matches = matches;
      listeners.forEach((listener) =>
        listener({ matches } as MediaQueryListEvent),
      );
    },
  };
}

beforeEach(() => {
  mockSystemTheme(false);
  vi.spyOn(window, "scrollTo").mockImplementation(() => {});
  window.HTMLElement.prototype.scrollIntoView = vi.fn();
});

describe("portfolio navigation", () => {
  it("navigates from the project grid to a project and back", async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getAllByRole("article")).toHaveLength(projects.length);
    const projectLink = screen.getByRole("link", { name: /the cozy console/i });
    expect(projectLink).toHaveAttribute("href", "#/projects/cozy-console");
    await user.click(projectLink);
    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: strings.projects.console.title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(strings.projects.console.summary),
    ).toBeInTheDocument();
    expect(
      screen.getByText(strings.projects.console.contributions[0]),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: strings.projects.console.imageAlt }),
    ).toHaveAttribute("src", expect.stringContaining("images/console.svg"));
    expect(
      screen.getByRole("link", { name: strings.projects.console.articleLabel }),
    ).toHaveAttribute("href", projects[0].articleUrl);
    await user.click(screen.getByRole("link", { name: /all projects/i }));
    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: strings.home.heading,
      }),
    ).toBeInTheDocument();
  });

  it("opens a project directly and handles optional links and unknown projects", () => {
    window.history.replaceState(null, "", "/#/projects/little-library");
    const { unmount } = render(<App />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: strings.projects.pc.title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: strings.project.links }),
    ).not.toBeInTheDocument();
    unmount();
    window.history.replaceState(null, "", "/#/projects/missing");
    render(<App />);
    expect(
      screen.getByRole("heading", { name: strings.project.notFound }),
    ).toBeInTheDocument();
  });
});

describe("contact links", () => {
  it("hides resume and GitHub independently unless enabled", () => {
    const { rerender } = render(<App />);
    const footer = screen.getByRole("contentinfo");
    expect(
      within(footer).getByRole("link", { name: strings.site.linkedIn }),
    ).toHaveAttribute("href", siteConfig.links.linkedIn);
    expect(
      within(footer).getByRole("link", { name: strings.site.email }),
    ).toHaveAttribute("href", siteConfig.links.email);
    expect(
      within(footer).queryByRole("link", { name: strings.site.resume }),
    ).not.toBeInTheDocument();
    expect(
      within(footer).queryByRole("link", { name: strings.site.github }),
    ).not.toBeInTheDocument();
    rerender(
      <App
        config={{ ...siteConfig, visibility: { resume: true, github: false } }}
      />,
    );
    expect(
      within(footer).getByRole("link", { name: strings.site.resume }),
    ).toHaveAttribute("href", siteConfig.links.resume);
    expect(
      within(footer).queryByRole("link", { name: strings.site.github }),
    ).not.toBeInTheDocument();
    rerender(
      <App
        config={{ ...siteConfig, visibility: { resume: false, github: true } }}
      />,
    );
    expect(
      within(footer).queryByRole("link", { name: strings.site.resume }),
    ).not.toBeInTheDocument();
    expect(
      within(footer).getByRole("link", { name: strings.site.github }),
    ).toHaveAttribute("href", siteConfig.links.github);
  });
});

describe("theme", () => {
  it("follows the system until a choice is made, then persists it", async () => {
    const media = mockSystemTheme(true);
    const user = userEvent.setup();
    const { unmount } = render(<App />);
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    await user.click(
      screen.getByRole("button", { name: strings.site.lightTheme }),
    );
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
    expect(localStorage.getItem(siteConfig.themeStorageKey)).toBe("light");
    act(() => {
      media.change(false);
      media.change(true);
    });
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
    unmount();
    render(<App />);
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
  });

  it("updates with system preference when no choice is saved", () => {
    const media = mockSystemTheme(false);
    render(<App />);
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
    act(() => media.change(true));
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  });
});
