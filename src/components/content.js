import { div } from "../util/dom";
import { Action } from "./action";
import { ActionBar } from "./actionBar";
import { Table } from "./table";

export function Content(project) {
  return div(
    "content",
    {},
    ActionBar(),
    Table(project),
    Action({ additionalClasses: ["new-button"], text: "New" }),
  );
}
