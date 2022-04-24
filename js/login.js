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
    const date = new Date();
    const hoursNum = date.getHours();
    let timeGreeting = "";
    if (hoursNum >= 6 && 12 > hoursNum){
        timeGreeting = "상쾌한 아침";
    } else if(hoursNum >= 12 && 18 > hoursNum){
        timeGreeting = "좋은 오후";
    } else if(hoursNum >= 18 && 21 > hoursNum){
        timeGreeting = "편안한 저녁";
    } else if(hoursNum >= 21 && 24 > hoursNum){
        timeGreeting = "평화로운 밤";
    } else if(hoursNum >= 0 && 6 > hoursNum){
        timeGreeting = "고요한 새벽";
    }
    greeting.innerText = `${timeGreeting}입니다, ${userName}님`;
    homePage.classList.remove("page-hidden");
}

const savedUserName= localStorage.getItem("username")

if (savedUserName === null){
    loginPage.classList.remove("page-hidden");
    loginPage.addEventListener("submit",onLogIn);
} else {
    showGreeting(savedUserName);
}