import { dialog, button, h2, div, form, label, input } from "../util/dom";

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
  const projectNameInput = input({
    classList: ["form-input"],
    id: "form-project-name",
    type: "text",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    return projectNameInput.value;
  };

  const projectDialog = Dialog(
    { title: "New Project", onSubmit },
    form(
      { classList: ["project-form"] },
      label({ classList: ["form-label"], for: "form-project-name" }),
      projectNameInput,
    ),
  );

  projectDialog.addEventListener("close", () => {
    const projectName = projectDialog.returnValue;

    if (projectName) {
      newProject(projectName);
    }
  });

  // todo get contents of form
  return projectDialog;
}
