const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];

const todayImg = images[Math.floor(Math.random()*images.length)];
const imgBox = document.createElement("img");
imgBox.src = `img/${todayImg}`;

const bgWrap = document.querySelector(".backgrounds");
bgWrap.appendChild(imgBox);