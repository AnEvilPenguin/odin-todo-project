import { dialog, button, h2, div } from "../util/dom";

export function Dialog({
  title,
  classList = ["dialog"],
  submitButtonText = "OK",
  cancelButtonText = "Cancel",
  onSubmit = () => console.log(`${title} submitted`),
  onCancel = () => console.log(`${title} cancelled`),
}) {
  const cancelButton = button("dialog-cancel", {}, cancelButtonText);

  cancelButton.addEventListener("click", () => {
    onCancel();
    dialogInstance.close();
  });

  const submitButton = button("dialog-submit", {}, submitButtonText);
  submitButton.addEventListener("click", () => {
    onSubmit();
    dialogInstance.close();
  });

  const buttons = div("dialog-buttons", {}, submitButton, cancelButton);

  const dialogInstance = dialog(
    classList,
    {},
    h2("dialog-title", {}, title),
    buttons,
  );

  return dialogInstance;
}
