import "./styles.css";
import { Project } from "./classes/project";
import { App } from "./components/app";

const body = document.querySelector("body");
body.classList.add("background");

const defaultProject = new Project("Default Project");
// TODO Project toJSON
// static fromJSON?
// save to local storage

const app = App(defaultProject);
body.appendChild(app);
