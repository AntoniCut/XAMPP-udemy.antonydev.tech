//  ------------------------------------------------------
//  ----------  /udemy.antonydev.tech/  ------------------
//  ----------  /master-css/  ----------------------------
//  ----------  /assets/js/script-bootstrap.js  ----------
//  ------------------------------------------------------


//  -----  Funcionalidades y Plugins de Bootstrap 4  -----

(function () {

    let contador = 0;
    setInterval(() => {

        if (contador < 100) {
            contador += 10;
            const barra = document.querySelector("#barra-progreso");
            barra.style.width = contador + '%';
            barra.innerHTML = contador + '%';
        }

    }, 1000);


    $(".carousel").carousel({
        interval: 3000
    });

    $(".btn-tool").tooltip();

    $(".btn-pop").popover();

})();
