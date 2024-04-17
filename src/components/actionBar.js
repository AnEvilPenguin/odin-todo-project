import { div } from "../util/dom";
import { Action } from "./action";
import Hamburger from "../assets/hamburger-menu.svg";
import Settings from "../assets/settings-menu.svg";
import Add from "../assets/add-action.svg";
import { DropdownMenu } from "./dropdownMenu";

export function ActionBar({ newTodoItem, removeProject }) {
  const addAction = Action({ svg: Add });
  addAction.addEventListener("click", newTodoItem);

  const hamburger = Action({
    svg: Hamburger,
    classList: ["hamburger"],
  });

  const removeProjectItem = div(
    { classList: ["dropdown-action"] },
    "Delete Project",
  );
  removeProjectItem.addEventListener("click", removeProject);

  hamburger.addEventListener(
    "click",
    DropdownMenu(hamburger, [removeProjectItem]),
  );

  return div(
    { classList: ["action-bar"] },
    hamburger,
    Action({ svg: Settings }),
    addAction,
  );
}
