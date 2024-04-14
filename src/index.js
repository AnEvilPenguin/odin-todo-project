import "./styles.css";
import { Project } from "./classes/project";
import { App } from "./components/app";
import { loadProjects, saveProjects } from "./util/localStorage";

const body = document.querySelector("body");
body.classList.add("background");

let functions;

let { projects, activeProject } = loadProjects();

const createApp = (projects, activeProjectId) =>
  App({ projects, activeProjectId, ...functions });

const regenerateApp = () => {
  body.textContent = "";

  const app = createApp(projects, activeProject);
  body.appendChild(app);

  saveProjects(projects, activeProject);
};

const newProject = () => {
  const newProject = new Project("New Project");
  projects.push(newProject);

  regenerateApp();
};

const setActiveProject = (projectId) => {
  activeProject = projectId;
  regenerateApp();
};

functions = {
  newProject,
  setActiveProject,
};
regenerateApp();
