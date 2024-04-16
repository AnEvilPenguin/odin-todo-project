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
      return li(["project-item", "active"], {}, project.name);
    }

    const item = li("project-item", {}, project.name);
    item.addEventListener("click", () => setActiveProject(project.id));

    return item;
  });

  return div(
    "sidebar",
    {},
    ul("project-list", {}, ...items),
    Action({
      additionalClasses: ["new-project"],
      text: "New Project",
      onClick: showProjectDialog,
    }),
  );
}
