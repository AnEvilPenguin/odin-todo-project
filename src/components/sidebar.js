import { div, ul, li } from "../util/dom";

export function Sidebar(project) {
  return div(
    "sidebar",
    {},
    ul("project-list", {}, li("project-item", {}, project.name)),
  );
}
