import { div } from "../util/dom";

export function Banner({ name }) {
  return div(["banner", "header"], {}, name);
}
