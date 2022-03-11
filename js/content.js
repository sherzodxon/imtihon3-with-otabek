const firstbtn = document.querySelector(".content__first-button");
const firstItem = document.querySelector(".first-item");
const firstTxt = document.querySelector(".first-text");
const secBtn1 = document.querySelector(".button--active1");
const secItem1 = document.querySelector(".content__item--active");
const secTxt1 = document.querySelector(".content__item-text--active");

firstbtn.addEventListener("click", function (evt) {
    firstbtn.classList.toggle("button--active");
    firstItem.classList.toggle("content__item--active");
    firstTxt.classList.toggle("content__item-text--active");
    if (evt.target.matches(".content__first-button")){
        secBtn1.classList.toggle("content__second-button");
        secItem1.classList.toggle("second-item");
        secTxt1.classList.toggle("second-text");
    }
})
const secBtn = document.querySelector(".content__second-button");
const secItem = document.querySelector(".second-item");
const secTxt = document.querySelector(".second-text");

secBtn.addEventListener("click", function () {
    secBtn.classList.toggle("button--active1");
    secItem.classList.toggle("content__item--active");
    secTxt.classList.toggle("content__item-text--active");
})
const thrBtn = document.querySelector(".content__three-button");
const thrItem = document.querySelector(".three-item");
const thrTxt = document.querySelector(".three-text");

thrBtn.addEventListener("click", function () {
    thrBtn.classList.toggle("button--active");
    thrItem.classList.toggle("content__item--active");
    thrTxt.classList.toggle("content__item-text--active");
})