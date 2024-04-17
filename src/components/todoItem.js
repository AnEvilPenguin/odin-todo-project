import { tr, td } from "../util/dom";
import Delete from "../assets/cross-icon.svg";

export function TodoItem(todo, removeItem) {
  const deleteValue = td({ classList: ["delete"] });
  deleteValue.innerHTML = Delete;

  deleteValue.addEventListener("click", removeItem);

  return tr(
    { classList: ["body-row"] },
    td({ classList: ["value"] }, todo.name),
    td({ classList: ["value"] }, todo.dueDate),
    td({ classList: ["value"] }, todo.priority),
    td({ classList: ["padding"] }),
    deleteValue,
  );
}
