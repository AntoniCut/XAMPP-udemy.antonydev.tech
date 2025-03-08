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

    const $layoutHeader = $('#layoutHeader');
    const $layoutNavbar = $('#layoutNavbar');
    const $layoutContent = $('#layoutContent');
    const $layoutFooter = $('#layoutFooter');

    const base = '/udemy.antonydev.tech/01-curso-html5-desde-cero';

    const allSections = [
        ...sectionHtml,
        ...sectionProyectoHtml,
        ...sectionCss
    ];



    //  ---------------------------------------------------------------------
    //  ----------  función para la Carga de los Componentes HTML  ----------
    //  ---------------------------------------------------------------------
    function loadInitialComponentsHtml() {

        $layoutHeader.load(`${base}/assets/components-html/header.html`);
        $layoutNavbar.load(`${base}/assets/components-html/navbar.html`);
        $layoutFooter.load(`${base}/assets/components-html/footer.html`);

    }



    //  -------------------------------------------------------------------
    //  ----------  función para la Carga del Contenido Inicial  ----------
    //  -------------------------------------------------------------------
    function loadInitialContent() {

        const initialPath = window.location.pathname.replace(base, '');
        const initialSection = allSections.find(section => section.path === initialPath);

        if (initialSection) 

            loadContent($layoutContent, initialSection.url, initialSection.title, initialSection.path, initialSection.favicon, initialSection.headerTitle);
                        
        else {

            loadContent(
                $layoutContent,
                `${base}/home/index.html`,
                'Curso HTML 5 desde cero',
                '/',
                `${base}/assets/favicon/html5-favicon.ico`,
                'Curso HTML 5 desde cero'
            );

            $layoutNavbar.load(`${base}/assets/components-html/navbar.html`);
        
        }

        //  -----  Guarda el estado inicial para que el botón "Atrás" funcione correctamente  -----
        history.replaceState({ path: window.location.pathname }, '', window.location.pathname);

    }



    //  ------------------------------------------------------------------
    //  ----------  Función para manejar la carga de contenido  ----------
    //  ------------------------------------------------------------------
    function loadContent($container, url, pageTitle, path, favicon, headerTitle) {

        $container.load(url, function (response, status, xhr) {

            if (status === "error") {
                console.clear();
                console.error(`\nError al cargar la ruta: ${url}`, xhr.status, xhr.statusText);
                $container.html('<p>Error 404: El contenido no se pudo cargar.</p>'); // Fallback

            } else {

                console.log(`\nContenido cargado desde: ${url}`);

                //  -----  Cambiamos el title de la página  -----
                document.title = pageTitle;

                //  -----  Solo cambia la URL si es diferente a la actual  -----
                const newUrl = `${base}${path}`;
                if (window.location.pathname !== newUrl) {
                    history.pushState({ path: newUrl }, '', newUrl);
                    console.log(`\nURL actualizada a: ${newUrl}`);
                }

                //  -----  Actualizar el favicon  -----

                //  -----  referenciamos el favicon  -----
                let $favicon = $('link[rel~="icon"]');

                //  -----  Si No existe lo crea  -----
                if ($favicon.length === 0) $favicon = $('<link rel="icon" type="image/x-icon">').appendTo('head');

                //  -----  Cambia la ruta del favicon con una linea de tiempo para no ser cacheado  -----
                $favicon.attr('href', `${favicon}?t=${new Date().getTime()}`);

                //  -----  Cambiamos el Encabezado h1 de la Página  -----
                $layoutHeader.html(`<h1> ${headerTitle} </h1>`);

                
            }
        });
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
            
            console.log(`\nclick en: ${id}`);
            loadContent($layoutContent, section.url, section.title, section.path, section.favicon, section.headerTitle);
            $layoutNavbar.load(`${base}/assets/components-html/go-home.html`);
            
        }

        if(id === 'htmlHome') $layoutNavbar.load(`${base}/assets/components-html/navbar.html`)
    });



    //  ----------------------------------------------------------
    //  ----------  Manejar retrocesos en el historial  ----------
    //  ----------------------------------------------------------

    window.addEventListener('popstate', function (event) {
        
        console.clear();
        console.log('\nNavegación en el historial detectada:', event.state?.path || window.location.pathname);

        //  -----  Usar `event.state.path` si está disponible, si no, tomar la URL actual  -----
        const matchedPath = event.state?.path ? event.state.path.replace(base, '') : window.location.pathname.replace(base, '');
        const matchedSection = allSections.find(section => section.path === matchedPath);

        if (matchedSection) {

            console.log(`\nCargando sección desde historial: ${matchedPath}`);

            loadContent($layoutContent, matchedSection.url, matchedSection.title, matchedSection.path, matchedSection.favicon, matchedSection.headerTitle);
            $layoutNavbar.load(`${base}/assets/components-html/go-home.html`);

            if(matchedSection.path === '/') $layoutNavbar.load(`${base}/assets/components-html/navbar.html`);
            

        } else {
            
            console.log('\nCargando página por defecto desde historial');
            loadInitialContent();
            
        }

    });




    //  ---------------------------------------------
    //  ----------  Al recargar la página  ----------
    //  ---------------------------------------------
    window.addEventListener("beforeunload", function (event) {
        // Detectar si es un refresh (F5 o Ctrl+R)
        if (performance.navigation.type === 1) {
            return; // No hacer nada si es una recarga
            
        }
    
        // Si es una navegación o cierre de pestaña, ejecutar la acción
        window.open('/udemy.antonydev.tech/01-curso-html5-desde-cero/index.html', '_blank');
    });



    //  ----------------------------------------------------------------------------
    //  ----------  Cargamos los Componentes HTML y el Contenido Inicial  ----------
    //  ----------------------------------------------------------------------------
    loadInitialComponentsHtml();
    loadInitialContent();


});
