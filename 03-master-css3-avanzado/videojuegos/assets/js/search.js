//  *****************************************************************
//  **********  /14-maquetacion-web-3/assets/js/search.js  **********  
//  *****************************************************************  


document.addEventListener('DOMContentLoaded', () => {


    //  -----  Funcionalidad del Buscador  -----
    const searchInput = document.querySelector('.search__input');
    const btnSearch = document.querySelector('.navbar__button');
    
    //  -----  al pulsar en el search  -----
    btnSearch.addEventListener('click', () => {

        const visible = document.querySelector('.visible');
       
        if(visible) {
            searchInput.style.width = '0';
            searchInput.style.padding = '0';
            searchInput.classList.remove('visible');
        } else {
            searchInput.style.width = '20rem';
            searchInput.style.padding = '0.5rem 0 0.5rem 0.5rem';
            searchInput.classList.add('visible');
        }
    });
});
