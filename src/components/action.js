import { button } from "../util/dom";

export function Action({ classList = [], svg, text, onClick }) {
  classList.push("action");
  const action = button({ classList }, text);

  if (svg) {
    action.innerHTML = svg;
  }

  if (onClick) {
    action.addEventListener("click", onClick);
  }

  return action;
}
