import { abstractElementFactory } from "../util/dom";
import penguinLogo from "../../assets/logo.jpg";
import { Banner } from "./banner";
import { Sidebar } from "./sidebar";
import { Logo } from "./logo";
import { Footer } from "./footer";
import { Content } from "./content";

const div = abstractElementFactory("div");

export function App (project) {
    return div("app", {}, 
        Logo(penguinLogo),
        Banner(project),
        Sidebar(project),
        Content(),
        Footer(),
    );
}

