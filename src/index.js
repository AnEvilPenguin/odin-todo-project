import "./styles.css";
import { Project } from "./classes/project";
import { App } from "./components/app";
import { Todo } from "./classes/todo";

const body = document.querySelector("body");
body.classList.add("background");

const defaultProject = new Project("Default Project");
defaultProject.setTodoItem(new Todo("TODO-1", "2024-04-20", "P1"));
defaultProject.setTodoItem(new Todo("TODO-2", "2024-04-20", "P2"));
defaultProject.setTodoItem(new Todo("TODO-3", "2024-04-20", "P4"));
defaultProject.setTodoItem(new Todo("TODO-4", "2024-04-20", "P1"));

const secondProject = new Project("Second Project");
secondProject.setTodoItem(new Todo("TODO-5", "2024-04-21", "P3"));
// TODO Project toJSON
// static fromJSON?
// save to local storage

const app = App({
  projects: [defaultProject, secondProject],
  activeProjectId: defaultProject.id,
});
body.appendChild(app);
