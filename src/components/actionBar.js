import { div } from "../util/dom";
import { Action } from "./action";
import Hamburger from "../assets/hamburger-menu.svg";
import Settings from "../assets/settings-menu.svg";
import Add from "../assets/add-action.svg";

export function ActionBar() {
  return div(
    "action-bar",
    {},
    Action({ svg: Hamburger, additionalClasses: ["hamburger"] }),
    Action({ svg: Settings }),
    Action({ svg: Add }),
  );
}
