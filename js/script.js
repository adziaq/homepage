console.log("Cześć!");

let button1 = document.querySelector(".header__button--1");
let headerName = document.querySelector(".header__name");
let button2 = document.querySelector(".header__button--2");
let backgroundColor = document.querySelector(".header");
let backgroundColor2 = document.querySelector(".headerLavender");
let button3 = document.querySelector(".header__button--3");
let changeImage = document.querySelector(".grid__element-4");
let changeImage2 = document.querySelector(".grid__element-4--newphoto");

button1.addEventListener("click", () => {
    headerName.remove();
});

button2.addEventListener("click", () => {
    backgroundColor.classList.toggle("headerLavender");
});

button3.addEventListener("click", () => {
    changeImage.classList.toggle("grid__element-4--newphoto");
});


console.log(".header__button--1");
console.log(".header__button--2");
console.log(".header__button--3");