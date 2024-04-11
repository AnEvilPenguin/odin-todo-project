import { abstractElementFactory } from "../util/dom";
import { ActionBar } from "./actionBar";

const div = abstractElementFactory("div");

export function Content() {
  return div("content", {}, "content", ActionBar());
}
