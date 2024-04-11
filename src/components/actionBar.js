import { div } from "../util/dom";
import { Action } from "./action";
import Hamburger from "../assets/hamburger-menu.svg";
import Settings from "../assets/settings-menu.svg";
import Add from "../assets/add-action.svg";

export function ActionBar() {
  return div(
    "action-bar",
    {},
    "actions",
    Action({ svg: Hamburger }),
    Action({ svg: Settings }),
    Action({ svg: Add }),
  );
}
