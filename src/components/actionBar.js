import { abstractElementFactory } from "../util/dom";
import { Action } from "./action";

const div = abstractElementFactory("div");

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
