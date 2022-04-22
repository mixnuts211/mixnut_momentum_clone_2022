const todoForm = document.querySelector(".todo-wrap-get-todo")
const todoWrite = document.querySelector("input.todo-wrap-write-here");
const addTodoBtn = document.querySelector(".todo-wrap-btn");
const todoUl = document.querySelector(".todo-wrap-list");

let toDos = [];
function saveToDo(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function showTodoList(newTodoList){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodoList;
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    const deletBtn = document.createElement("div");
    deletBtn.innerText = "x";
    deletBtn.addEventListener("click", deletTodo);
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(deletBtn);
    todoUl.appendChild(li);
}

function deletTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function todoBtnHandler(event){
    event.preventDefault();
    const newTodoList = todoWrite.value;
    todoWrite.value = "";
    toDos.push(newTodoList);
    showTodoList(newTodoList);
    saveToDo();
}

todoForm.addEventListener("submit",todoBtnHandler);

const getSavedToDo = localStorage.getItem("todos");

if (getSavedToDo !== null){
    const parsedToDos = JSON.parse(getSavedToDo);
    toDos = parsedToDos;
    parsedToDos.forEach(showTodoList);
}


//-todo list-
//localStorge에 저장해서 불러오기/삭제하기

