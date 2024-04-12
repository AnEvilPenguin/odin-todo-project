import { abstractElementFactory } from "../util/dom";

const table = abstractElementFactory("table");
const thead = abstractElementFactory("thead");
const tbody = abstractElementFactory("tbody");
const tr = abstractElementFactory("tr");
const th = abstractElementFactory("th");
const td = abstractElementFactory("td");

export function Table(project) {
  let body;
  if (project) {
    const todoList = project.listTodoItems();
    console.dir(todoList);
    body = tbody(
      "body",
      {},
      tr(
        "body-row",
        {},
        td("value", {}, "TODO-1"),
        td("value", {}, "2024-04-20"),
        td("value", {}, "P1"),
        td("value", {}, "X"),
      ),
      tr(
        "body-row",
        {},
        td("value", {}, "TODO-2"),
        td("value", {}, "2024-04-20"),
        td("value", {}, "P2"),
        td("value", {}, "X"),
      ),
      tr(
        "body-row",
        {},
        td("value", {}, "TODO-3"),
        td("value", {}, "2024-04-20"),
        td("value", {}, "P3"),
        td("value", {}, "X"),
      ),
      tr(
        "body-row",
        {},
        td("value", {}, "TODO-4"),
        td("value", {}, "2024-04-20"),
        td("value", {}, "P1"),
        td("value", {}, "X"),
      ),
    );
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
