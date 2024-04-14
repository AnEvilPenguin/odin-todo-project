import { button } from "../util/dom";

export function Action({ additionalClasses = [], svg, text, onClick }) {
  additionalClasses.push("action");
  const action = button(additionalClasses, {}, text);

  if (svg) {
    action.innerHTML = svg;
  }

  if (onClick) {
    action.addEventListener("click", onClick);
  }

  return action;
}
