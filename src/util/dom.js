// inspired heavily by:
// /r/webdev/comments/19bjr9a/any_elegant_way_to_handle_creating_html_elements/

export function abstractElementFactory (tag) {
    return function (className, attributes, ...children) {
        const element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

       if (attributes) {
           Object.entries(attributes)
               .forEach(([key, value]) => element.setAttribute(key, value));
       }

        children.forEach((child) => {
            if (typeof child === "string") {
                return element.appendChild(document.createTextNode(child));
            }

            element.appendChild(child);
        });

        return element;
    };
}
