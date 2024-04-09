import { abstractElementFactory } from "../util/dom";

const div = abstractElementFactory("div");

export function Banner ({ name }) {
    return div(["banner", "header"], {}, name);
}
