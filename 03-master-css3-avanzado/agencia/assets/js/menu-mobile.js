//  ************************************************
//  **********  /asset/js/menu-mobile.js  **********
//  ************************************************


document.addEventListener('DOMContentLoaded', (event) => {

    //alert('Script Cargado!!!');

    //  -----  Referencias al HTML  -----
    const mobile_btn = document.querySelector('.navbar__mobile-btn');
    const mobile_menu = document.querySelector('.menu-mobile');
    const btn_close = document.querySelector('.menu-mobile__close');
    const menu_item = document.querySelectorAll('.menu-mobile__item');


    //  -----  Función Mostrar y Ocultar el Menu  -----
    const showHiddenMenu = () => {

        //mobile_menu.style.display = "block";
        const show = document.querySelector('.menu-mobile--show');

        if (show) mobile_menu.classList.remove('menu-mobile--show');
        else mobile_menu.classList.add('menu-mobile--show');

    }

    
    //  -----  Click en el botón del Menu hamburguesa  -----
    mobile_btn.addEventListener('click', showHiddenMenu);


    //  -----  Redimensionar la ventana del Navegador por debajo de 1000px ocultar el menu si es necesario  -----
    window.addEventListener('resize', () => {
        const window_width = parseInt(document.body.clientWidth);
        if (window_width >= 1000) mobile_menu.classList.remove("menu-mobile--show")
    });


    //  -----  Poder cerrar el menu con el botón X  -----
    btn_close.addEventListener('click', showHiddenMenu);


    //  -----  Desplegar Submenus  -----

    //console.log(dropdown);
    menu_item.forEach(item => {
        
        //console.log(item);
        item.addEventListener('click', (event) => {
            
            let submenu = item.lastElementChild;
            
            if(submenu.className === 'menu-mobile__submenu-mobile') {
                if( submenu.style.display === 'block') submenu.style.display = 'none'
                else submenu.style.display = 'block'
            } 
        });
    });
});
