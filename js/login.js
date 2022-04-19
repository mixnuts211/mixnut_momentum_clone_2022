const loginHere = document.querySelector(".login-page input");
const loginPage = document.querySelector(".login-page");
const greeting = document.querySelector(".greeting");
const homePage = document.querySelector(".home-page");

function onLogIn(e){
    e.preventDefault();
    loginPage.classList.add("page-hidden");
    const userName = loginHere.value;
    localStorage.setItem("username", userName);
    showGreeting(userName);
}

function showGreeting (userName){
    greeting.innerText = `Hello ${userName}`;
    homePage.classList.remove("page-hidden");
}

const savedUserName= localStorage.getItem("username")

if (savedUserName === null){
    loginPage.classList.remove("page-hidden");
    loginPage.addEventListener("submit",onLogIn);
} else {
    showGreeting(savedUserName);
}