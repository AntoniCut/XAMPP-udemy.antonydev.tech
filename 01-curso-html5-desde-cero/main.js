//  ------------------------------------------------
//  ----------  /udemy.antonydev.tech/  ------------
//  ----------  /curso-html5-desde-cero/  ----------
//  ----------  /main.js  --------------------------
//  ------------------------------------------------


import { sectionHtml } from '/udemy.antonydev.tech/01-curso-html5-desde-cero/assets/js/section-html.js';
import { sectionProyectoHtml } from '/udemy.antonydev.tech/01-curso-html5-desde-cero/assets/js/section-proyecto-html.js';
import { sectionCss } from '/udemy.antonydev.tech/01-curso-html5-desde-cero/assets/js/section-css.js';


$(function () {

    console.warn('main.js is loaded - jQuery is ready! - version:', $.fn.jquery);

    const $layoutContent = $('#layoutContent');

    const base = '/udemy.antonydev.tech/01-curso-html5-desde-cero';
    
    const allSections = [
        ...sectionHtml, 
        ...sectionProyectoHtml, 
        ...sectionCss
    ];

    
    //  ------------------------------------------------------------------
    //  ----------  Función para manejar la carga de contenido  ----------
    //  ------------------------------------------------------------------

    function loadContent($container, url, title, path, favicon) {

        $container.load(url, function (response, status, xhr) {

            if (status === "error") {
                console.error(`Error al cargar la ruta: ${url}`, xhr.status, xhr.statusText);
                $container.html('<p>Error 404: El contenido no se pudo cargar.</p>'); // Fallback

            } else {

                console.log(`Contenido cargado desde: ${url}`);

                //  -----  Cambiamos el title de la página  -----
                document.title = title;

                //  -----  cambiamos la url de la página  -----
                const newUrl = `${base}${path}`;
                history.pushState(null, '', newUrl);
                console.log(`URL actualizada a: ${newUrl}`);

                //  -----  cambiamos el favicon de la página  -----

                let $favicon = $('link[rel~="icon"]');

                //  -----  Si No existe lo crea  -----
                if ($favicon.length === 0) $favicon = $('<link rel="icon" type="image/x-icon">').appendTo('head');

                //  -----  Cambia la ruta del favicon con una linea de tiempo para no ser cacheado  -----
                $favicon.attr('href', `${favicon}?t=${new Date().getTime()}`);

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
            initialSection.favicon
        );
    }
    
    else {
        
        loadContent(
            $layoutContent,
            `${base}/aprendiendo-html5/index.html`,
            'Aprendiendo HTML 5',
            '/aprendiendo-html5/',
            `${base}/assets/favicon/html5-favicon.ico`
        );
    }


    //  -----------------------------------------------------------
    //  ----------  Manejador de clics para los enlaces  ----------
    //  -----------------------------------------------------------
    $(document).on('click', 'a[id]', function (event) {

        event.preventDefault();

        const id = $(this).attr('id');
        //const section = sections.find(sec => sec.id === id);
        const section = allSections.find(sec => sec.id === id);

        if (section) {
            console.log(`Clic en: ${id}`);
            loadContent($layoutContent, section.url, section.title, section.path, section.favicon);
        }
    });


    //  ----------------------------------------------------------
    //  ----------  Manejar retrocesos en el historial  ----------
    //  ----------------------------------------------------------
    window.addEventListener('popstate', function () {

        console.log('Navegación en el historial detectada:', window.location.pathname);

        const matchedSection = allSections.find(section => section.path === window.location.pathname.replace(base, ''));

        if (matchedSection) {
            loadContent($layoutContent, matchedSection.url, matchedSection.title, matchedSection.path, matchedSection.favicon);
        } else {
            $layoutContent.load(`${base}/aprendiendo-html5/index.html`);
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
