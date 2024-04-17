import { dialog, button, h2, div, form, label, input } from "../util/dom";
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

function newLabelInputPair({ inputId, inputType, labelText }) {
  return {
    label: label({ classList: ["form-label"], for: inputId }, labelText),
    input: input({ classList: ["form-input"], id: inputId, type: inputType }),
  };
}

export function ProjectDialog({ newProject }) {
  const { input: projectNameInput, label: projectNameLabel } =
    newLabelInputPair({
      inputId: "form-project-name",
      inputType: "text",
      labelText: "Project Name*",
    });

  const onSubmit = (event) => {
    event.preventDefault();
    return projectNameInput.value;
  };

  const projectDialog = Dialog(
    { title: "New Project", onSubmit },
    form({ classList: ["project-form"] }, projectNameLabel, projectNameInput),
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
  const { input: nameInput, label: nameLabel } = newLabelInputPair({
    inputId: "form-todo-name",
    inputType: "text",
    labelText: "Todo Name*",
  });

  // dialog.returnValue seems to only work with simple values
  const onSubmit = (event) => {
    event.preventDefault();

    const todo = new Todo(nameInput.value);
    addItemToProject(todo);
  };

  const todoDialog = Dialog(
    { title: "New Todo Item", onSubmit },
    form({ classList: ["todo-form"] }, nameLabel, nameInput),
  );

  return todoDialog;
}
