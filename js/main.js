"use strict";

window.onload = function () {

    const body = document.querySelector("body");
    const blackDisplay = document.querySelector(".black-display");

    const burgerButton = document.querySelector(".header__burger");
    const burgerMenu = document.querySelector(".header__content");

    burgerButton.addEventListener("click", () => {
        burgerButton.classList.toggle("_active");
        burgerMenu.classList.toggle("_active");
        body.classList.toggle("_lock");
        blackDisplay.classList.toggle("_active");
    });

    const spoiler = document.querySelector(".header__item[data-spoiler]");
    spoiler.addEventListener("click", (event) => {
        event.preventDefault();

        spoiler.classList.toggle("_active");
    });

    function ibg() {

        let ibg = document.querySelectorAll(".ibg");
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img')) {
                ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
        }
    }

    document.addEventListener('click', documentActions);

    function documentActions(event) {
        const targetElement = event.target;

        if (targetElement.classList.contains('slider__button-right') || targetElement.classList.contains('slider__button-left')) {
            slider(targetElement);
        }

        if (document.querySelector('.slider')) {
            getWidth();
        }
    }

    ibg();
}