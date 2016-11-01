import $ from 'jquery';

import { TodoList } from "./models/list";
import { AppController } from "./controllers/app";

var list = new TodoList({ title: "My Todos" });
var form = $(".todo-form");
var display = $(".todo-list");

var app = new AppController(list, form, display);
app.start();

// function example () {
//   var nums = [1,2,3,4,6,7,5];
//   var total = 0;
//   for (var i = 0; i < nums.length; i++) {
//     debugger;
//     var number = nums[i];
//     if (number % 2 === 0) {
//       total += number;
//     }
//   }
//   return total;
// }

// example();
