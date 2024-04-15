import { table, thead, tbody, tr, th } from "../util/dom";
import { TodoItem } from "./todoItem";
import Delete from "../assets/trash-icon.svg";
import { Action } from "./action";

export function Table(project, regenerateApp) {
  let body;
  if (project) {
    const todoList = project.listTodoItems();
    body = tbody(
      "body",
      {},
      ...todoList.map((t) => {
        const removeItem = () => {
          project.removeTodoItem(t.id);
          regenerateApp();
        };

        const item = TodoItem(t, removeItem);

        return item;
      }),
    );
  }

  const deleteAllOnClick = () => {
    const items = project.listTodoItems();

    items.forEach((item) => {
      project.removeTodoItem(item.id);
    });

    regenerateApp();
  };

  const deleteAll = th("delete-all", { scope: "col" });
  deleteAll.innerHTML = Delete;
  deleteAll.addEventListener("click", deleteAllOnClick);

  return table(
    "todo-table",
    {},
    thead(
      "header",
      {},
      tr(
        "head-row",
        {},
        th("head-value", { scope: "col" }, "Name"),
        th("head-value", { scope: "col" }, "Due Date"),
        th("head-value", { scope: "col" }, "Priority"),
        th("padding", {}, ""),
        deleteAll,
      ),
    ),
    body,
  );
}
