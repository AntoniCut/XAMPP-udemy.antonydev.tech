//  *************************************************
//  **********  /asset/js/navbar-fixed.js  **********
//  *************************************************


document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.querySelector('.menu__navbar');

    window.addEventListener('scroll', () => {

        const scroll = window.scrollY;
        console.log(scroll);
        if(scroll > 120) navbar.classList.add('menu__navbar--fixed');
        else navbar.classList.remove('menu__navbar--fixed');
    });

});