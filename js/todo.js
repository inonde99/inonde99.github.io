const todoForm = document.getElementById("todoForm");
const todoInput = document.querySelector("#todoForm input");
const todoList = document.getElementById("todoList");

const todoArrayKey = "todoArray";
let todoArray = [];

function LoadTodoArray()
{
    const strTodoArray = localStorage.getItem(todoArrayKey);

    if (strTodoArray !== null) {
        todoArray = JSON.parse(strTodoArray);
    }
}

function SaveTodoArray()
{
    const strTodoArray = JSON.stringify(todoArray);
    localStorage.setItem(todoArrayKey, strTodoArray);
}

function onDeleteTodoButtonClick(event)
{
    const li = event.target.parentElement;
    li.remove();

    const id = parseInt(li.id);
    todoArray = todoArray.filter(todo => todo.id !== id);
    SaveTodoArray();
}

function paintTodo(todo)
{
    const li = document.createElement("li");
    li.id = todo.id;

    const span = document.createElement("span");
    span.innerText = todo.text;
    li.appendChild(span);

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", onDeleteTodoButtonClick);
    li.appendChild(button);

    todoList.appendChild(li);
}

function onTodoFormSubmit(event)
{
    event.preventDefault();

    const todo = { id: Date.now(), text: todoInput.value } ;

    todoInput.value = "";

    todoArray.push(todo);
    SaveTodoArray();
    paintTodo(todo);
}

todoForm.addEventListener("submit", onTodoFormSubmit);

LoadTodoArray();
todoArray.forEach(todo => paintTodo(todo));