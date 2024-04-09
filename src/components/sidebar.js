import { abstractElementFactory } from "../util/dom";

const div = abstractElementFactory("div");
const ul = abstractElementFactory("ul");
const li = abstractElementFactory("li");

export function Sidebar(project) {
    return div("sidebar", {},
        ul("project-list", {},
            li("project-item", {}, project.name),
        ),
    );
}

