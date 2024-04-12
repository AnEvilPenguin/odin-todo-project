import { table, thead, tbody, tr, th } from "../util/dom";
import { TodoItem } from "./todoItem";

export function Table(project) {
  let body;
  if (project) {
    const todoList = project.listTodoItems();
    body = tbody("body", {}, ...todoList.map((t) => TodoItem(t)));
  }

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
        th("head-value", { scope: "col" }, "Delete"),
      ),
    ),
    body,
  );
}
