import "./styles.css";
import jpg from "../assets/logo.jpg";
import { abstractElementFactory } from "./util/dom";

const body = document.querySelector("body");
body.classList.add("background");

const div = abstractElementFactory("div");
const img = abstractElementFactory("img");

const logo = img("logo", { src: jpg });
body.appendChild(logo);

const name = div("name", {}, "Default Project");
body.appendChild(name);

const sidebar = div("sidebar", {}, "sidebar");
body.appendChild(sidebar);

const content = div("content", {}, "content"); 
body.appendChild(content);

const footer = div("footer", {}, "footer");
body.appendChild(footer);

