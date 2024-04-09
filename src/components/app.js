import { abstractElementFactory } from "../util/dom";
import jpg from "../../assets/logo.jpg";
import { Banner } from "./banner";
import { Sidebar } from "./sidebar";

const div = abstractElementFactory("div");
const img = abstractElementFactory("img");

export function App (project) {
    return div("app", {}, 
        img("logo", { src: jpg }),
        Banner(project),
        Sidebar(project),
        div("content", {}, "content"),
        div("footer", {}, "footer"),
    );
}

