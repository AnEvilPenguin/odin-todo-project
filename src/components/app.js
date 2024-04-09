import { abstractElementFactory } from "../util/dom";
import jpg from "../../assets/logo.jpg";
import { Banner } from "./banner";
import { Sidebar } from "./sidebar";
import { Logo } from "./logo";

const div = abstractElementFactory("div");

export function App (project) {
    return div("app", {}, 
        Logo(jpg),
        Banner(project),
        Sidebar(project),
        div("content", {}, "content"),
        div("footer", {}, "footer"),
    );
}

