import { div, ul, li } from "../util/dom";
import { Action } from "./action";

export function Sidebar(project) {
  return div(
    "sidebar",
    {},
    ul("project-list", {}, li("project-item", {}, project.name)),
    Action({ additionalClasses: ["new-project"], text: "New Project" }),
  );
}
