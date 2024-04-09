import { abstractElementFactory } from "../util/dom"

const div = abstractElementFactory("div");

export function Content() {
    return div("content", {}, "content");
}

