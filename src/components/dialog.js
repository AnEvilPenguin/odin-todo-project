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
  const cancelButton = button("dialog-cancel", {}, cancelButtonText);

  cancelButton.addEventListener("click", (event) =>
    dialogInstance.close(onCancel(event)),
  );

  const submitButton = button("dialog-submit", {}, submitButtonText);
  submitButton.addEventListener("click", (event) =>
    dialogInstance.close(onSubmit(event)),
  );

  const buttons = div("dialog-buttons", {}, submitButton, cancelButton);

  const dialogInstance = dialog(
    classList,
    {},
    h2("dialog-title", {}, title),
    ...(children ?? {}),
    buttons,
  );

  return dialogInstance;
}

export function ProjectDialog({ newProject }) {
  const projectNameInput = input("form-input", {
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
      "project-form",
      {},
      label("form-label", { for: "form-project-name" }),
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
