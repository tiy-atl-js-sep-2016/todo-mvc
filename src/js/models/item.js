var TODO_ID = 1;

class TodoItem {
  constructor (options) {
    options = options || {};
    this.id = TODO_ID++;
    this.completed = false;
    this.createdAt = new Date();
    this.goal = options.goal;
    this.dueDate = options.date;
  }

  markComplete () {
    this.completed = true;
  }

  // update (options) {
  //   this.dueDate = options.due || this.dueDate;
  //   this.goal = options.goal || this.goal;
  // }
}

export { TodoItem };
