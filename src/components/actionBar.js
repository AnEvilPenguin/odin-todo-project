import { div } from "../util/dom";
import { Action } from "./action";

export function ActionBar() {
  return div(
    "action-bar",
    {},
    "actions",
    Action("hamburger"),
    Action("cog"),
    Action("NEW"),
  );
}
