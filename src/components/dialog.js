import { dialog, button } from "../util/dom";

export function Dialog() {
  const closeButton = button("dialog-close", {}, "OK");

  const dialogInstance = dialog("dialog", {}, "I'm a dialog", closeButton);

  closeButton.addEventListener("click", () => dialogInstance.close());

  return dialogInstance;
}
