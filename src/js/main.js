import $ from 'jquery';

import { TodoList } from "./models/list";
import { AppController } from "./controllers/app";

var list = new TodoList({ title: "My Todos" });
var form = $(".todo-form");
var display = $(".todo-list");

var app = new AppController(list, form, display);
app.start();
