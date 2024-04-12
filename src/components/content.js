import { div } from "../util/dom";
import { ActionBar } from "./actionBar";
import { Table } from "./table";

export function Content(project) {
  return div("content", {}, ActionBar(), Table(project));
}
