import { img } from "../util/dom";

export function Logo(image) {
  return img({ classList: ["logo"], src: image });
}
