import { abstractElementFactory } from "../util/dom";

const tr = abstractElementFactory("tr");
const td = abstractElementFactory("td");

export function TodoItem(todo) {
  return tr(
    "body-row",
    {},
    td("value", {}, todo.name),
    td("value", {}, todo.dueDate),
    td("value", {}, todo.priority),
    td("value", {}, "X"),
  );
}
