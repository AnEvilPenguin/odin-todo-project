import { Project } from "../classes/project";
import { Todo } from "../classes/todo";

// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function generateDefaultProject() {
  const defaultProject = new Project("Default Project");
  defaultProject.setTodoItem(new Todo("TODO-1", "2024-04-20", "P1"));

  return { projects: [defaultProject], activeProject: defaultProject.id };
}

export function loadProjects() {
  if (!storageAvailable("localStorage")) {
    console.error("Storage not available");
    return generateDefaultProject();
  }

  const rawProjects = localStorage.getItem("projects");

  const parsedProjects = JSON.parse(rawProjects);

  if (!Array.isArray(parsedProjects) || parsedProjects?.length === 0) {
    return generateDefaultProject();
  }

  const projects = parsedProjects.map((project) => {
    const rehydratedProject = new Project(project.name, project.id);

    project.items.forEach((item) =>
      rehydratedProject.setTodoItem(
        new Todo(item.name, item.dueDate, item.priority),
      ),
    );

    return rehydratedProject;
  });

  const activeProject = localStorage.getItem("activeProject") ?? projects[0].id;
  return {
    projects,
    activeProject,
  };
}

export function saveProjects(projects, activeProject) {
  if (!storageAvailable("localStorage")) {
    console.error("Storage not available");
    return;
  }

  if (!Array.isArray(projects)) {
    localStorage.setItem("projects", []);
    return;
  }

  const projectsToSave = projects.map((project) => {
    const items = project.listTodoItems();

    return {
      ...project,
      items,
    };
  });

  localStorage.setItem("projects", JSON.stringify(projectsToSave));
  localStorage.setItem("activeProject", activeProject);
}
