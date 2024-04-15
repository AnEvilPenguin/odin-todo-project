import { div } from "../util/dom";

export function DropdownMenu(parent) {
  const dropDown = div(["dropdown-menu", "hidden"], {}, "dropdown");

  parent.appendChild(dropDown);
  return () => dropDown.classList.toggle("hidden");
}
