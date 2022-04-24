const focusTodayForm = document.querySelector(".focus-today");
const focusInput = document.querySelector(".focus-today-here");
const focusAsk = document.querySelector(".focus-today-ask h3");

function focusTodayHandler(e){
    e.preventDefault();
    focusInput.classList.add("page-hidden");
    const focusToday = focusInput.value;
    localStorage.setItem("focusToday", focusToday);
    showFocusToday(focusToday);
}

function showFocusToday (focusToday){
    focusAsk.innerText = "오늘의 할 일";
    focusAsk.classList.add("focus-today-sm-font");
    const span = document.createElement("span");
    span.innerText = focusToday;
    focusTodayForm.appendChild(span);
}

const savedFocusToday = localStorage.getItem("focusToday")

if (savedFocusToday === null){
    focusInput.classList.remove("page-hidden");
    focusAsk.classList.remove("focus-today-sm-font");
    focusTodayForm.addEventListener("submit",focusTodayHandler);
} else {
    showFocusToday(savedFocusToday);
}