const weatherIcon = document.querySelector(".weather-icon");
const weatherTemper = document.querySelector(".weather-geo-temperature");
const weatherLocation = document.querySelector(".weather-geo-location");
const weatherIconText = weatherIcon.querySelector("span");
const API_KEY = "d2b326eaa8284481f83b8d344aea852d";

function onGeoTrue(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    const urlText = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(urlText).then((response) => response.json()).then((date) => {
        weatherLocation.innerText = date.name;
        weatherTemper.innerText = `${date.main.temp}°`;
        const callIcon = date.weather[0].icon;
        const weatherIconImg = document.createElement("img");
        weatherIconImg.src = `http://openweathermap.org/img/wn/${callIcon}@2x.png`;
        weatherIcon.appendChild(weatherIconImg);
        weatherIconText.innerText = date.weather[0].main;
    });
}

function onGeoFalse(){
    alert("위치 확인이 거절되어 날씨 정보를 제공드릴 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoTrue, onGeoFalse);