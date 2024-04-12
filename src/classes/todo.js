export class Todo {
  constructor(name, dueDate, priority) {
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = crypto.randomUUID();
  }
}
