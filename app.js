import { getAllTodos } from "./assets/js/api.js";
import { createListFromArray } from "./components/list.js";
import {h1} from "./components/text.js";

const todos = await getAllTodos("https://dummyjson.com/todos");

console.log(todos.todos);

createListFromArray(todos.todos);

const titreDePage = h1.create('To Do List');

console.log(titreDePage)

document.body.insertAdjacentElement( "afterbegin", titreDePage);