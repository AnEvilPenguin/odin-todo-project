import { Todo } from "../classes/todo";
import { div } from "../util/dom";
import { Action } from "./action";
import { ActionBar } from "./actionBar";
import { Table } from "./table";

export function Content(project, regenerateApp, removeProject, projectDialog) {
  const todoList = project.listTodoItems();

  const newButton = Action({ classList: ["new-button"], text: "New" });

  const newTodoItem = () => {
    const newItem = new Todo(
      `TODO-${todoList.length}`,
      new Date().toISOString(),
      "P1",
    );

    project.setTodoItem(newItem);
    regenerateApp();
  };

  newButton.addEventListener("click", newTodoItem);

  return div(
    { classList: ["content"] },
    projectDialog,
    ActionBar({ newTodoItem, removeProject }),
    Table(project, regenerateApp),
    newButton,
  );
}
