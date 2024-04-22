import "./styles.css";
import { Project } from "./classes/project";
import { App } from "./components/app";
import { loadProjects, saveProjects } from "./util/localStorage";

const body = document.querySelector("body");
body.classList.add("background");

let functions;

let { projects, activeProject } = loadProjects();

let sortProperty;
let sortDirection = 1;

const createApp = (projects, activeProjectId) =>
    App({ projects, activeProjectId, sortProperty, sortDirection, ...functions });

const regenerateApp = () => {
    body.textContent = "";

    const app = createApp(projects, activeProject);
    body.appendChild(app);

    saveProjects(projects, activeProject);
};

const newProject = (projectName) => {
    const newProject = new Project(projectName);
    projects.push(newProject);

    setActiveProject(newProject.id);
};

const removeProject = () => {
    projects = projects.filter((p) => p.id !== activeProject);

    activeProject = projects?.find((p) => p.id)?.id;

    saveProjects(projects, activeProject);

    const loaded = loadProjects();

    projects = loaded.projects;
    activeProject = loaded.activeProject;

    regenerateApp();
};

const setActiveProject = (projectId) => {
    activeProject = projectId;
    regenerateApp();
};

const setSort = (property) => {
    sortDirection = property === sortProperty ? sortDirection * -1: 1;
    sortProperty = property
    regenerateApp();
}

functions = {
    newProject,
    setActiveProject,
    regenerateApp,
    removeProject,
    setSort,
};
regenerateApp();
