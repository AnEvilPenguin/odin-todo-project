import { div, h1 } from "../util/dom";

export function Banner({ name }) {
  return div({ classList: ["banner", "header"] }, h1({}, name));
}
