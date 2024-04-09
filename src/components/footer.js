import { abstractElementFactory } from "../util/dom";

const div = abstractElementFactory("div");

export function Footer() {
    return div("footer", {}, "footer");
};
