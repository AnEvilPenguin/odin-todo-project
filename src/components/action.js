import { button } from "../util/dom";

export function Action({ additionalClasses = [], svg, text }) {
  additionalClasses.push("action");
  const action = button(additionalClasses, {}, text);

  if (svg) {
    action.innerHTML = svg;
  }

  return action;
}
