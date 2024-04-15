import { Todo } from "../classes/todo";
import { div } from "../util/dom";
import { Action } from "./action";
import { ActionBar } from "./actionBar";
import { Table } from "./table";

export function Content(project, regenerateApp) {
  const todoList = project.listTodoItems();

  const newButton = Action({ additionalClasses: ["new-button"], text: "New" });
  newButton.addEventListener("click", () => {
    const newItem = new Todo(
      `TODO-${todoList.length}`,
      new Date().toISOString(),
      "P1",
    );

    project.setTodoItem(newItem);
    regenerateApp();
  });

  return div(
    "content",
    {},
    ActionBar(),
    Table(project, regenerateApp),
    newButton,
  );
}
