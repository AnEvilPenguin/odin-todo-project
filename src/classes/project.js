export class Project {
    #todoItems = new Map();

    constructor(name) {
        this.name = name;
        this.id = crypto.randomUUID();
    }

    listTodoItems() {
        return Array.from(this.#todoItems.values());
    }

    getTodoItem(id) {
        return {...this.#todoItems.get(id)};
    }

    setTodoItem(item) {
        this.#todoItems.set(item.id, item);
    }

    removeTodoItem(id) {
        this.#todoItems.delete(id);
    }
}
