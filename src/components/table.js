import { table, thead, tbody, tr, th } from "../util/dom";
import { TodoItem } from "./todoItem";
import Delete from "../assets/trash-icon.svg";

export function Table(project, regenerateApp, showDialog, sortProperty, setSort) {
    let body;
    if (project) {
        let todoList = project.listTodoItems();
        if (sortProperty) {
            todoList.sort((a, b) => {
                const propA = a[sortProperty];
                const propB = b[sortProperty];
                if (propA < propB) {
                    return -1;
                }
                else if (propA > propB) {
                    return 1;
                }

                return 0;
            });
        }
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

    const headName = th({ classList: ["head-value", "sortable"], scope: "col" }, "Name");
    headName.addEventListener("click", () => setSort("name"));

    const headDue = th({ classList: ["head-value", "sortable"], scope: "col" }, "Due Date");
    headDue.addEventListener("click", () => setSort("dueDate"));

    const headPriority = th({ classList: ["head-value", "sortable"], scope: "col" }, "Priority");
    headPriority.addEventListener("click", () => setSort("priority"));

    return table(
        { classList: ["todo-table"] },
        thead(
            { classList: ["header"] },
            tr(
                { classList: ["head-row"] },
                headName,
                headDue,
                headPriority,
                th({ classList: ["head-value"], scope: "col" }, "Description"),
                th({ classList: ["padding"] }, ""),
                deleteAll,
            ),
        ),
        body,
    );
}
