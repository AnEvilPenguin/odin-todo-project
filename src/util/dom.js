// inspired heavily by:
// /r/webdev/comments/19bjr9a/any_elegant_way_to_handle_creating_html_elements/

export function abstractElementFactory(tag) {
  return function (className, attributes, ...children) {
    const element = document.createElement(tag);

    if (typeof className === "string") {
      element.classList.add(className);
    } else if (Array.isArray(className)) {
      className.forEach((c) => element.classList.add(c));
    }

    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) =>
        element.setAttribute(key, value),
      );
    }

    children.forEach((child) => {
      if (child == null) return;

      if (typeof child === "string") {
        return element.appendChild(document.createTextNode(child));
      }

      element.appendChild(child);
    });

    return element;
  };
}

export const div = abstractElementFactory("div");
export const h1 = abstractElementFactory("h1");
export const h2 = abstractElementFactory("h2");

export const img = abstractElementFactory("img");

export const ul = abstractElementFactory("ul");
export const li = abstractElementFactory("li");
export const button = abstractElementFactory("button");

export const table = abstractElementFactory("table");
export const thead = abstractElementFactory("thead");
export const tbody = abstractElementFactory("tbody");
export const th = abstractElementFactory("th");
export const tr = abstractElementFactory("tr");
export const td = abstractElementFactory("td");

export const dialog = abstractElementFactory("dialog");
