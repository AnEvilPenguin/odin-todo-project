import { div, ul, li } from "../util/dom";
import { Action } from "./action";

export function Sidebar({
  projects,
  activeProjectId,
  setActiveProject,
  showProjectDialog,
}) {
  const items = projects.map((project) => {
    if (project.id === activeProjectId) {
      return li({ classList: ["project-item", "active"] }, project.name);
    }

    const item = li({ classList: ["project-item"] }, project.name);
    item.addEventListener("click", () => setActiveProject(project.id));

    return item;
  });

  return div(
    { classList: ["sidebar"] },
    ul({ classList: ["project-list"] }, ...items),
    Action({
      classList: ["new-project"],
      text: "New Project",
      onClick: showProjectDialog,
    }),
  );
}
