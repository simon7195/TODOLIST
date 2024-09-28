import { getAllTodos } from "./api.js";

const itemTemplate = document.getElementById('todolist-item');
const container = document.getElementById('todolist-container');

export async function getList() {

    const todos = await getAllTodos('https://dummyjson.com/todos')

    for(let todo of todos.todos) {

        const item = itemTemplate.content.cloneNode(true);
    
        const li = item.querySelector('li');
        const checkbox = li.querySelector('input');
        const label = li.querySelector('label');
    
        li.id = "item"+todo.id;
        checkbox.id = "checkbox"+todo.id;
        label.setAttribute('for', checkbox.id);
    
        item.querySelector('label').textContent = todo.todo;
    
        container.appendChild(item);
    
    }
    
}