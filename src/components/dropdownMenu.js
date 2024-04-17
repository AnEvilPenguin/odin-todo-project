import { div } from "../util/dom";

export function DropdownMenu(parent, children = ["Dropdown"]) {
  const dropDown = div({ classList: ["dropdown-menu", "hidden"] }, ...children);

  parent.appendChild(dropDown);
  return () => dropDown.classList.toggle("hidden");
}
