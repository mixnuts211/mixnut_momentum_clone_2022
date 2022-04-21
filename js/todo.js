const todoForm = document.querySelector(".todo-wrap-get-todo")
const todoWrite = document.querySelector("input.todo-wrap-write-here");
const addTodoBtn = document.querySelector(".todo-wrap-btn");
const todoUl = document.querySelector(".todo-wrap-list");

function showTodoList(newTodoList){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodoList;
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    const deletBtn = document.createElement("button");
    deletBtn.innerText = "x";
    deletBtn.addEventListener("click", deletTodo);
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(deletBtn);
    todoUl.appendChild(li);
}

function deletTodo(event){
    const deletLi = event.target.parentElement;
    deletLi.remove();
}

function todoBtnHandler(e){
    e.preventDefault();
    const newTodoList = todoWrite.value;
    todoWrite.value = "";
    showTodoList(newTodoList);
}

todoForm.addEventListener("submit",todoBtnHandler);

//-todo list-
//enter가 원하지 않는 btn을 누르는것을 방지하기
//li의 span과 delet btn의 간격 조정
//edit와 delet를 더보기 메뉴로 묶기
//localStorge에 save하기

