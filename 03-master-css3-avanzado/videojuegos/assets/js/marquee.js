//  ******************************************************************
//  **********  /14-maquetacion-web-3/assets/js/marquee.js  **********  
//  ******************************************************************  


document.addEventListener('DOMContentLoaded', () => {

    const list = document.querySelector('.marquee__list');
    let desplazamiento = 0;

    const marquee = (speed) => {
        
        setInterval(() => {
            
            list.style.marginLeft = `-${desplazamiento}px`;
            if(desplazamiento > list.clientWidth) desplazamiento = 0;
            desplazamiento += speed;
        });
    }

    marquee(0.2);
});
