import { div } from "../util/dom";
import { Action } from "./action";
import Hamburger from "../assets/hamburger-menu.svg";

export function ActionBar() {
  return div(
    "action-bar",
    {},
    "actions",
    Action({ svg: Hamburger }),
    Action({ text: "cog" }),
    Action({ text: "NEW" }),
  );
}
