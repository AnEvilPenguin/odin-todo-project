import { table, thead, tbody, tr, th } from "../util/dom";
import { TodoItem } from "./todoItem";
import Delete from "../assets/trash-icon.svg";

export function Table(project, regenerateApp, showDialog) {
  let body;
  if (project) {
    const todoList = project.listTodoItems();
    body = tbody(
      { classList: ["body"] },
      ...todoList.map((t) => {
        const removeItem = () => {
          project.removeTodoItem(t.id);
          regenerateApp();
        };

        const item = TodoItem(t, removeItem, showDialog);

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

  const deleteAll = th({ classList: ["delete-all"], scope: "col" });
  deleteAll.innerHTML = Delete;
  deleteAll.addEventListener("click", deleteAllOnClick);

  return table(
    { classList: ["todo-table"] },
    thead(
      { classList: ["header"] },
      tr(
        { classList: ["head-row"] },
        th({ classList: ["head-value"], scope: "col" }, "Name"),
        th({ classList: ["head-value"], scope: "col" }, "Due Date"),
        th({ classList: ["head-value"], scope: "col" }, "Priority"),
        th({ classList: ["padding"] }, ""),
        deleteAll,
      ),
    ),
    body,
  );
}
