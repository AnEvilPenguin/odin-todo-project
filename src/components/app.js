import { div } from "../util/dom";
import penguinLogo from "../assets/logo.jpg";
import { Banner } from "./banner";
import { Sidebar } from "./sidebar";
import { Logo } from "./logo";
import { Footer } from "./footer";
import { Content } from "./content";
import { Dialog } from "./dialog";

export function App(Props) {
  const { projects, activeProjectId, regenerateApp, removeProject } = Props;
  const activeProject = projects.find((p) => p.id === activeProjectId);

  const projectDialog = Dialog({ title: "New Project" });

  const showProjectDialog = () => projectDialog.showModal();

  return div(
    "app",
    {},
    Logo(penguinLogo),
    Banner(activeProject),
    Sidebar({ ...Props, showProjectDialog }),
    Content(activeProject, regenerateApp, removeProject, projectDialog),
    Footer(),
  );
}
