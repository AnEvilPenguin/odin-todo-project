import { div, ul, li } from "../util/dom";
import { Action } from "./action";

export function Sidebar({ projects, activeProjectId }) {
  const items = projects.map((project) => {
    if (project.id === activeProjectId) {
      return li(["project-item", "active"], {}, project.name);
    }
    return li("project-item", {}, project.name);
  });

  return div(
    "sidebar",
    {},
    ul("project-list", {}, ...items),
    Action({ additionalClasses: ["new-project"], text: "New Project" }),
  );
}
