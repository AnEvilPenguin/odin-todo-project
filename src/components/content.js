import { div } from "../util/dom";
import { ActionBar } from "./actionBar";

export function Content() {
  return div("content", {}, "content", ActionBar());
}
