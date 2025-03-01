//  *****************************************
//  **********  /asset/js/dark.js  **********
//  *****************************************


document.addEventListener('DOMContentLoaded', () => {

    //  -----  Referencias al HTML  -----
    const switcher = document.querySelector('.switcher__btn');
    const light = document.querySelector('.switcher__icon-light');
    const dark = document.querySelector('.switcher__icon-dark');

    const head = document.head;

    switcher.addEventListener('click', () => {

        //  -----  Creamos un elemento HTML y lo añadimos al HEAD  -----
        const link = document.createElement('link');
        link.id = "theme-dark";
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = './assets/css/dark.css';

        const theme_dark = document.querySelector('#theme-dark');
        if(theme_dark) {
            head.removeChild(theme_dark);
            light.style.display = 'block';
            dark.style.display = 'none';
        }else {
            head.appendChild(link);
            dark.style.display = 'block';
            light.style.display = 'none';
        }
    });

});