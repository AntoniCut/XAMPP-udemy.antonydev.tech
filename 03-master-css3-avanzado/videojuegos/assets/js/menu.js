//  ***************************************************************
//  **********  /14-maquetacion-web-3/assets/js/menu.js  **********  
//  ***************************************************************  


document.addEventListener('DOMContentLoaded', () => {

    const mobileBtn = document.querySelector('.navbar__mobile-btn');
    const mobileMenu = document.querySelector('.navbar__mobile-list');


    mobileBtn.addEventListener('click', () => {

        const menuOpen = document.querySelector('.menu_open');
        
        if (!menuOpen) {

            mobileMenu.style.display = 'block';
            mobileMenu.classList.add('menu_open');

        } else {
            mobileMenu.style.display = 'none';
            mobileMenu.classList.remove('menu_open');
        }
    });


    //  -----  Desplegar Submenús  -----
    const subMenu = (boton, subMenu, className) => {

        boton.addEventListener('click', () => {

            const dropMenu = document.querySelector('.' + className);

            if(!dropMenu) {
                
                subMenu.style.display = 'block';
                subMenu.classList.add(className);
            
            } else {

                subMenu.style.display = 'none';
                subMenu.classList.remove(className);
            }
        });

    }


    //  -----  Primer Submenu  -----
    const dropDown1Btn = document.querySelector('#icon1');
    const dropDown1Submenu = document.querySelector('#submenu1');

    //  -----  Segundo Submenu  -----
    const dropDown2Btn = document.querySelector('#icon2');
    const dropDown2Submenu = document.querySelector('#submenu2');

    //  -----  Ejecutar la Función  -----
    subMenu(dropDown1Btn, dropDown1Submenu, 'dropdown1');
    subMenu(dropDown2Btn, dropDown2Submenu, 'dropdown2');


    //  ----------  Función para el Redimensionado  -----
    window.addEventListener('resize', () => {

        const windowLayout = document.body.clientWidth;

        if(windowLayout > 1024) {
            mobileMenu.style.display = 'none';
            mobileMenu.classList.remove('menu_open');
        }
    });

});
