import { abstractElementFactory } from "../util/dom";

const button = abstractElementFactory("button");

export function Action(content) {
  return button("action", {}, content);
}
