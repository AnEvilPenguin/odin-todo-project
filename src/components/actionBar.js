import { abstractElementFactory } from "../util/dom";

const div = abstractElementFactory("div");

export function ActionBar() {
  return div("action-bar", {}, "actions");
}
