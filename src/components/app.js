import { div } from "../util/dom";
import penguinLogo from "../assets/logo.jpg";
import { Banner } from "./banner";
import { Sidebar } from "./sidebar";
import { Logo } from "./logo";
import { Footer } from "./footer";
import { Content } from "./content";

export function App(Props) {
  const { projects, activeProjectId } = Props;
  const activeProject = projects.find((p) => p.id === activeProjectId);

  return div(
    "app",
    {},
    Logo(penguinLogo),
    Banner(activeProject),
    Sidebar(Props),
    Content(activeProject),
    Footer(),
  );
}
