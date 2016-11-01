class TodoList {
  constructor (options) {
    options = options || {};
    this.tasks = [];
    this.title = options.title;
  }

  addTodo (item) {
    this.tasks.push(item);
  }

  count () {
    return this.tasks.length;
  }
}

export { TodoList };
