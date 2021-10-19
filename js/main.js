"use strict";

window.onload = function () {

    let preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';

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

    function ibg() {

        let ibg = document.querySelectorAll(".ibg");
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img')) {
                ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
        }
    }

    function spoiler() {

        let scrollWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        );

        window.addEventListener('resize', () => {
            scrollWidth = Math.max(
                document.body.scrollWidth, document.documentElement.scrollWidth,
                document.body.offsetWidth, document.documentElement.offsetWidth,
                document.body.clientWidth, document.documentElement.clientWidth
            );
        });

        const spoilers = document.querySelectorAll('.spoiler');

        spoilers.forEach((item) => {
            const spoilerButton = item.querySelector('.spoiler__button');
            spoilerButton.addEventListener('click', () => {
                if (scrollWidth < 768) {
                    item.classList.toggle('_active');
                }
            });
        });
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


    spoiler();
    ibg();
}