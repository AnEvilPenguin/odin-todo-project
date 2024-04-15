import { tr, td } from "../util/dom";
import Delete from "../assets/cross-icon.svg";

export function TodoItem(todo, removeItem) {
  const deleteValue = td("delete", {});
  deleteValue.innerHTML = Delete;

  deleteValue.addEventListener("click", removeItem);

  return tr(
    "body-row",
    {},
    td("value", {}, todo.name),
    td("value", {}, todo.dueDate),
    td("value", {}, todo.priority),
    td("padding", {}),
    deleteValue,
  );
}
