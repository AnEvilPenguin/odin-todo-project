import "./styles.css";
import jpg from "../assets/logo.jpg";
import { abstractElementFactory } from "./util/dom";
import { Project } from "./classes/project";
import { Banner } from "./components/banner";

const body = document.querySelector("body");
body.classList.add("background");

const defaultProject = new Project("Default Project");
// TODO Project toJSON
// static fromJSON?
// save to local storage

const div = abstractElementFactory("div");
const img = abstractElementFactory("img");
const ul = abstractElementFactory("ul");
const li = abstractElementFactory("li");

const logo = img("logo", { src: jpg });
body.appendChild(logo);

const banner = Banner(defaultProject);
body.appendChild(banner);

const sidebar = div("sidebar", {}, 
    ul("project-list", {},
        li("project-item", {}, defaultProject.name),
    ),
);
body.appendChild(sidebar);

const content = div("content", {}, "content"); 
body.appendChild(content);

const footer = div("footer", {}, "footer");
body.appendChild(footer);

