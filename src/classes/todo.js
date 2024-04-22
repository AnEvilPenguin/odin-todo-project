export class Todo {
  constructor(name, dueDate, priority, description) {
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
    this.id = crypto.randomUUID();
  }
}
