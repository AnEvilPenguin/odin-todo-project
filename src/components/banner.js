import { div } from "../util/dom";

export function Banner({ name }) {
  return div({ classList: ["banner", "header"] }, name);
}
