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
    li.id = newTodoList.id;
    const span = document.createElement("span");
    span.innerText = newTodoList.text;
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
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();
}

function todoBtnHandler(event){
    event.preventDefault();
    const newTodoList = todoWrite.value;
    todoWrite.value = "";
    const newTodoObject = {
        text : newTodoList,
        id : Date.now()
    };
    toDos.push(newTodoObject);
    showTodoList(newTodoObject);
    saveToDo();
}

todoForm.addEventListener("submit",todoBtnHandler);

const getSavedToDo = localStorage.getItem("todos");

if (getSavedToDo !== null){
    const parsedToDos = JSON.parse(getSavedToDo);
    toDos = parsedToDos;
    parsedToDos.forEach(showTodoList);
}

