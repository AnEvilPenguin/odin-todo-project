import { div, p } from "../util/dom";

export function Footer() {
  return div(
    { classList: ["footer"] },
    p({ classList: ["footer-text"] }, "Copyright © AnEvilPenguin 2024"),
  );
}
