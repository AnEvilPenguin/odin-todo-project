import { div } from "../util/dom";
import { Action } from "./action";
import { ActionBar } from "./actionBar";
import { TodoDialog } from "./dialog";
import { Table } from "./table";

export function Content(project, regenerateApp, removeProject, projectDialog, sortProperty, setSort) {
  const addItemToProject = (todo) => {
    project.setTodoItem(todo);
    regenerateApp();
  };

  const { todoDialog, showDialog } = TodoDialog({ addItemToProject });

  const newButton = Action({ classList: ["new-button"], text: "New" });
  newButton.addEventListener("click", () => showDialog());

  return div(
    { classList: ["content"] },
    projectDialog,
    todoDialog,
    ActionBar({ newTodoItem: showDialog, removeProject }),
    Table(project, regenerateApp, showDialog, sortProperty, setSort),
    newButton,
  );
}
