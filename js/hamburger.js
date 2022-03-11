const hambBtn = document.querySelector(".header__hamburger--opened");
const navBtn = document.querySelector(".nav");
const listBtn = document.querySelector(".nav__list");
const navbarBtn = document.querySelector(".navbar");
const body = document.querySelector("body");

hambBtn.addEventListener("click", function () {
    hambBtn.classList.toggle("header__hamburger--closed");
    navBtn.classList.toggle("nav--active")
    listBtn.classList.toggle("nav__list--active");
    navbarBtn.classList.toggle("navbar--active");
    body.classList.toggle("ice-body");
})
const navBttn = document.querySelector(".nav");
const listBttn = document.querySelector(".nav__list")
const hambBttn = document.querySelector(".header__hamburger--opened")
const navbarBttn = document.querySelector(".navbar");
const bodyy = document.querySelector("body");
navBttn.addEventListener("click", function(evt){
    if(evt.target.matches(".nav")){
        navBttn.classList.toggle("nav--active");
        listBttn.classList.toggle("nav__list--active");
        hambBttn.classList.toggle("header__hamburger--closed");
        navbarBttn.classList.toggle("navbar--active");
        bodyy.classList.toggle("ice-body");
    }
})