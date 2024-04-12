import { tr, td } from "../util/dom";

export function TodoItem(todo) {
  return tr(
    "body-row",
    {},
    td("value", {}, todo.name),
    td("value", {}, todo.dueDate),
    td("value", {}, todo.priority),
    td("padding", {}),
    td("value", {}, "X"),
  );
}
