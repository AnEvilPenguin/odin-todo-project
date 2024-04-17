import { div } from "../util/dom";
import { Action } from "./action";
import { ActionBar } from "./actionBar";
import { TodoDialog } from "./dialog";
import { Table } from "./table";

export function Content(project, regenerateApp, removeProject, projectDialog) {
  const addItemToProject = (todo) => {
    project.setTodoItem(todo);
    regenerateApp();
  };

  const todoDialog = TodoDialog({ addItemToProject });
  const showTodoModal = () => todoDialog.showModal();

  const newButton = Action({ classList: ["new-button"], text: "New" });
  newButton.addEventListener("click", showTodoModal);

  return div(
    { classList: ["content"] },
    projectDialog,
    todoDialog,
    ActionBar({ newTodoItem: showTodoModal, removeProject }),
    Table(project, regenerateApp),
    newButton,
  );
}
