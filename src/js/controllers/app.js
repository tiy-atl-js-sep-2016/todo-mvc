import { TodoItem } from "../models/item";
import $ from 'jquery';

class AppController {
  constructor (list, form, display) {
    this.list = list;
    this.form = form;
    this.display = display;
  }

  start () {
    this.form.submit(this.createTask.bind(this));
  }

  createTask (event) {
    event.preventDefault();

    var goal = $("#todo-goal").val();
    var date = $("#todo-due").val();

    var todo = new TodoItem({
      goal: goal,
      date: new Date(date)
    });
    this.list.addTodo(todo);

    console.log(this.list);
  }

}

export { AppController };
