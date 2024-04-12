import { table, thead, tbody, tr, th } from "../util/dom";
import { TodoItem } from "./todoItem";
import Delete from "../assets/trash-icon.svg";
import { Action } from "./action";

export function Table(project) {
  let body;
  if (project) {
    const todoList = project.listTodoItems();
    body = tbody("body", {}, ...todoList.map((t) => TodoItem(t)));
  }

  const deleteAll = th(["head-value", "delete-all"], { scope: "col" });
  deleteAll.innerHTML = Delete;

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
