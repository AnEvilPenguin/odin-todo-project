import { button } from "../util/dom";

export function Action({ svg, text }) {
  const action = button("action", {}, text);

  if (svg) {
    action.innerHTML = svg;
  }

  return action;
}
