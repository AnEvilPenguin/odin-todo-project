import { abstractElementFactory } from "../util/dom";

const img = abstractElementFactory("img");

export function Logo (image) {
    return img("logo", { src: image });
}
