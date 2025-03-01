//  ----------------------------------------------  
//  ----------  /udemy.antonydev.tech/  ----------  
//  ----------  /master-css3-avanzado/  ----------  
//  ----------  /portafolio/  --------------------  
//  ----------  /main.js  ------------------------  
//  ----------------------------------------------


import { sectionPortafolio } from './assets/js/section-portafolio.js';


$(function () {


    console.warn('main.js is loaded - jQuery is ready! - version:', $.fn.jquery);

    const $layoutContent = $('#layoutContent');

    const base = '/udemy.antonydev.tech/master-css3-avanzado/portafolio';

    const allSections = [
        ...sectionPortafolio,
    ];



    //  ----------------------------------------------------------------------------------------------------
    //  ----------  Función que Carga el HTML Dinamicamente utilizando la función load de jQuery  ----------
    //  ----------------------------------------------------------------------------------------------------

    function loadContent($container, url, title, path, favicon, scriptFile) {

        $container.load(url, function (response, status, xhr) {

            if (status === "error") {
                console.error(`Error al cargar la ruta: ${url}`, xhr.status, xhr.statusText);
                $container.html('<p>Error 404: El contenido no se pudo cargar.</p>'); // Fallback

            } else {

                console.log(`Contenido cargado desde: ${url}`);

                //  -----  Cambiamos el TITLE de la página  -----
                document.title = title;

                //  -----  cambiamos la URL de la página  -----
                const newUrl = `${base}${path}`;
                history.pushState(null, '', newUrl);
                console.log(`URL actualizada a: ${newUrl}`);

                //  -----  cambiamos el FAVICON de la página  -----
                let $favicon = $('link[rel~="icon"]');

                //  -----  Si No existe el favicon lo crea  -----
                if ($favicon.length === 0) $favicon = $('<link rel="icon" type="image/x-icon">').appendTo('head');

                //  -----  Cambia la ruta del favicon con una linea de tiempo para no ser cacheado  -----
                $favicon.attr('href', `${favicon}?t=${new Date().getTime()}`);


                //  -----  Cargar script de las secciones  -----
                if (scriptFile) {
                    loadScriptIfExists(scriptFile);
                }

            }
        });
    }



    //  ------------------------------------------------------------------
    //  ----------  Función que Carga un Script si este Existe  ----------
    //  ------------------------------------------------------------------

    function loadScriptIfExists(scriptUrl) {

        const script = `${scriptUrl}?t=${new Date().getTime()}`;

        return $.ajax({

            url: script,
            type: 'HEAD', // Verifica si el script existe

            success: function () {

                console.log(`El script ${script} existe. Procediendo a cargarlo...`);

                $.getScript(script)
                    .done(function () {
                        console.log(`Script cargado exitosamente: ${script}`);
                    })
                    .fail(function (jqxhr, settings, exception) {
                        console.error(`Error al cargar el script ${script}:`, exception);
                    });
            },
            error: function () {
                console.warn(`El script ${script} no existe. No se cargará.`);
            }
        });
    }


    //  ------------------------------------------------
    //  ----------  Cargar contenido inicial  ----------
    //  ------------------------------------------------
    const initialPath = window.location.pathname.replace(base, '');
    const initialSection = allSections.find(section => section.path === initialPath);

    if (initialSection) {

        loadContent(
            $layoutContent,
            initialSection.url,
            initialSection.title,
            initialSection.path,
            initialSection.favicon,
            initialSection.script
        );
    }

    else {

        loadContent(
            $layoutContent,
            `${base}/home/index.html`,
            'Maquetación Web 1 - Portafolio',
            '/home/index.html',
            `${base}/assets/favicon/css3-favicon.ico`,
            //  script
        );
    }


    //  -----------------------------------------------------------
    //  ----------  Manejador de clics para los enlaces  ----------
    //  -----------------------------------------------------------
    $(document).on('click', 'a[id]', function (event) {
        
        event.preventDefault(); // Previene el comportamiento predeterminado

        const $this = $(this); // Convertimos el elemento a un objeto jQuery
        
        const id = $this.attr('id');    //  Obtenemos el id

        const section = allSections.find(sec => sec.id === id);

        // Elimina la clase 'menu__link--active' de todos los enlaces del menú
        $('a.menu__link--active').removeClass('menu__link--active');

        // Agrega la clase 'menu__link--active' al enlace clicado
        $this.addClass('menu__link--active');

        if (section) {
            console.log(`Clic en: ${id}`);
            loadContent(
                $layoutContent,
                section.url,
                section.title,
                section.path,
                section.favicon,
                section.script
            );
        }
    });

    

    //  ----------------------------------------------------------
    //  ----------  Manejar retrocesos en el historial  ----------
    //  ----------------------------------------------------------
    window.addEventListener('popstate', function () {

        console.log('Navegación en el historial detectada:', window.location.pathname);

        const matchedSection = allSections.find(section => section.path === window.location.pathname.replace(base, ''));

        if (matchedSection) {
            loadContent(
                $layoutContent,
                matchedSection.url,
                matchedSection.title,
                matchedSection.path,
                matchedSection.favicon,
                matchedSection.script
            );

        } else {
            $layoutContent.load(`${base}/home/index.html`);
        }
    });


    //  ----------------------------------------------------------------
    //  ----------  Escuchar el evento de salir de la página  ----------
    //  ----------------------------------------------------------------
    window.addEventListener("beforeunload", function (event) {

        //  -----  Mostrar un mensaje de advertencia al intentar abandonar la página  -----
        const message = "¿Estás seguro de que deseas salir?";
        event.returnValue = message;  // Standard para algunos navegadores
        return message;  // Necesario para otros navegadores
    });


});
