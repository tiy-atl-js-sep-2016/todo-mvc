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
    // the value of this in a javascript function depends completely on the syntax of *the place it was _called_*
    // this.createTask(); // <- inside createTask, this === AppController instance
    // var foo = this.createTask;
    // foo(); // <- inside foo, this === undefined
    // Why? The value of this depends completely on whether the place the method was called looks like
    // "foo()" or "obj.foo()". With callbacks, you should always assume it is the former and so you have
    // to `bind(this)` to make sure you get the right value.
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
