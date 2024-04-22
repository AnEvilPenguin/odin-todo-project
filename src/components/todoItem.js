import { tr, td } from "../util/dom";
import Delete from "../assets/cross-icon.svg";

export function TodoItem(todo, removeItem, showDialog) {
    const deleteValue = td({ classList: ["delete"] });
    deleteValue.innerHTML = Delete;

    deleteValue.addEventListener("click", removeItem);

    const values = [
        td({ classList: ["value"] }, todo.name),
        td({ classList: ["value"] }, todo.dueDate),
        td({ classList: ["value"] }, todo.priority),
        td({ classList: ["value"] }, todo.description),
    ];

    values.forEach(v => v.addEventListener("click", () => showDialog(todo)));

    return tr(
        { classList: ["body-row"] },
        ...values,
        td({ classList: ["padding"] }),
        deleteValue,
    );
}
