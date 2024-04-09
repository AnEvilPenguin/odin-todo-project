import { abstractElementFactory } from "../util/dom";
import jpg from "../../assets/logo.jpg";
import { Banner } from "./banner";

const div = abstractElementFactory("div");
const img = abstractElementFactory("img");
const ul = abstractElementFactory("ul");
const li = abstractElementFactory("li");

export function App (project) {
    return div("app", {}, 
        img("logo", { src: jpg }),
        Banner(project),
        div("sidebar", {}, 
            ul("project-list", {},
                li("project-item", {}, project.name),
            ),
        ),
        div("content", {}, "content"),
        div("footer", {}, "footer"),
    );
}

