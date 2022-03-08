const btn = document.querySelector(".navbar__white-btn");
const white = document.querySelector("body");
const up = document.querySelector(".navbar__in-btn");
const a= document.querySelector("a");
const navlink= document.querySelector(".nav__item-link");
const navlink1= document.querySelector(".nav__item-link-one");
const navlink2= document.querySelector(".nav__item-link-two");
const navlink3= document.querySelector(".nav__item-link-three");

btn.addEventListener("click", function () {
    btn.classList.toggle("navbar__white-btn");
    white.classList.toggle("black-body");
    up.classList.toggle("navbar__in-btn--black");
    a.classList.toggle("a-white");
    navlink.classList.toggle("nav__item-link--white");
    navlink1.classList.toggle("nav__item-link--white-one");
    navlink2.classList.toggle("nav__item-link--white-two");
    navlink3.classList.toggle("nav__item-link--white-three");
})