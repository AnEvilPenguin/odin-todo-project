import { dialog, button, h2, div, form, label, input, select, option } from "../util/dom";
import { Todo } from "../classes/todo";

export function Dialog(
    {
        title,
        classList = ["dialog"],
        submitButtonText = "OK",
        cancelButtonText = "Cancel",
        onSubmit = () => console.log(`${title} submitted`),
        onCancel = () => console.log(`${title} cancelled`),
    },
    ...children
) {
    const cancelButton = button(
        { classList: ["dialog-cancel"] },
        cancelButtonText,
    );

    cancelButton.addEventListener("click", (event) =>
        dialogInstance.close(onCancel(event)),
    );

    const submitButton = button(
        { classList: ["dialog-submit"] },
        submitButtonText,
    );
    submitButton.addEventListener("click", (event) =>
        dialogInstance.close(onSubmit(event)),
    );

    const buttons = div(
        { classList: ["dialog-buttons"] },
        submitButton,
        cancelButton,
    );

    const dialogInstance = dialog(
        { classList },
        h2({ classList: ["dialog-title"] }, title),
        ...(children ?? {}),
        buttons,
    );

    return dialogInstance;
}

export function ProjectDialog({ newProject }) {
    const nameLabel = label({ classList: ["form-label"], for: "form-project-name" }, "Project Name*");
    const nameInput = input({ classList: ["form-input"], id: "form-project-name", type: "text" });

    const onSubmit = (event) => {
        event.preventDefault();
        return nameInput.value;
    };

    const projectDialog = Dialog(
        { title: "New Project", onSubmit },
        form({ classList: ["project-form"] }, div({}, nameLabel, nameInput)),
    );

    projectDialog.addEventListener("close", () => {
        const projectName = projectDialog.returnValue;

        if (projectName) {
            newProject(projectName);
        }
    });

    return projectDialog;
}

export function TodoDialog({ addItemToProject }) {
    let existingTodo = false;

    const nameLabel = label({ classList: ["form-label"], for: "form-todo-name" }, "Todo Name*");
    const nameInput = input({ classList: ["form-input"], id: "form-todo-name", type: "text" });

    const dueLabel = label({ classList: ["form-label"], for: "form-project-due" }, "Due Date");
    const dueInput = input({ classList: ["form-input"], id: "form-project-due", type: "date" });

    const priorityLabel = label({ for: "form-todo-priority" }, "Priority");
    const prioritySelect = select({ name: "priority", id: "form-todo-priority" },
        option({ value: "" }, "--Select a priority--"),
        option({ value: "P1" }, "Priority 1"),
        option({ value: "P2" }, "Priority 2"),
        option({ value: "P3" }, "Priority 3"),
        option({ value: "P4" }, "Priority 4"),
    );

    const todoForm = form(
        { classList: ["todo-form"] },
        div({}, nameLabel, nameInput),
        div({}, dueLabel, dueInput),
        div({}, priorityLabel, prioritySelect)
    );

    // dialog.returnValue seems to only work with simple values
    const onSubmit = (event) => {
        event.preventDefault();

        if (!nameInput.value) {
            todoForm.reset();
            return;
        }

        if (existingTodo) {
            existingTodo.name = nameInput.value;
            existingTodo.dueDate = dueInput.value;
            existingTodo.priority = prioritySelect.value;

            addItemToProject(existingTodo);
        }
        else {
            const todo = new Todo(nameInput.value, dueInput.value, prioritySelect.value);
            addItemToProject(todo);
        }

        todoForm.reset();
    };

    const todoDialog = Dialog(
        { title: "New Todo Item", onSubmit, onCancel: () => todoForm.reset() },
        todoForm,
    );

    const showDialog = (todo) => {

        console.dir(nameInput);
        console.dir(todo);

        if (!todo) {
            existingTodo = false;
            nameInput.setAttribute("value", "");
            dueInput.setAttribute("value", "");
            prioritySelect.setAttribute("value", "");
        }
        else {
            existingTodo = todo;
            nameInput.value = todo.name;
            dueInput.value = todo.dueDate;
            prioritySelect.value = todo.priority;
        }

        todoDialog.showModal();
    };

    return { todoDialog, showDialog };
}
