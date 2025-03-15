//  ------------------------------------------------
//  ----------  /udemy.antonydev.tech/  ------------
//  ----------  /curso-html5-desde-cero/  ----------
//  ----------  /main.js  --------------------------
//  ------------------------------------------------


import { sectionHtml } from '/01-curso-html5-desde-cero/assets/js/section-html.js';
import { sectionProyectoHtml } from '/01-curso-html5-desde-cero/assets/js/section-proyecto-html.js';
import { sectionCss } from '/01-curso-html5-desde-cero/assets/js/section-css.js';


$(function () {


    //  ----------  Documento Cargado  -----
    console.warn('main.js - 01 Curso HTML 5 desde cero - is loaded - jQuery is ready! - version:', $.fn.jquery);

    
    //  -------------------------------------------
    //  ----------  referencias al HTML  ----------
    //  -------------------------------------------
    //  -------------------------------------------
    const $layoutHeader = $('#layoutHeader');
    const $layoutNavbar = $('#layoutNavbar');
    const $layoutContent = $('#layoutContent');
    const $layoutFooter = $('#layoutFooter');


    //  ----------  URL de la base del proyecto  ----------
    const base = '/01-curso-html5-desde-cero';

    
    //  ----------  URLs Component HTML  ----------
    const urlHeader = `${base}/assets/components-html/header.html`;
    const urlNavBar = `${base}/assets/components-html/navbar.html`;
    const urlGoHome = `${base}/assets/components-html/go-home.html`;
    const urlFooter = `${base}/assets/components-html/footer.html`;

    
    //  ----------  Variables de Inicialización, home  ----------
    const urlHome = `${base}/home/index.html`;
    const titlePage = 'Curso HTML 5 desde cero';
    const homePath = '/';
    const faviconPage = `${base}/assets/favicon/html5-favicon.ico`;
    const titleHeader = titlePage;


    //  ------------------------------------------------------------
    //  ----------  array con las secciones del proyecto  ----------
    //  ------------------------------------------------------------
    const allSections = [
        ...sectionHtml,
        ...sectionProyectoHtml,
        ...sectionCss
    ];



    //  ---------------------------------------------------------------------
    //  ----------  función para la Carga de los Componentes HTML  ----------
    //  ---------------------------------------------------------------------
    function loadInitialComponentsHtml() {

        $layoutHeader.load(urlHeader);
        $layoutNavbar.load(urlNavBar);
        $layoutFooter.load(urlFooter);

    }



    //  -------------------------------------------------------------------
    //  ----------  función para la Carga del Contenido Inicial  ----------
    //  -------------------------------------------------------------------
    function loadInitialContent() {

        const initialPath = window.location.pathname.replace(base, '');
        const initialSection = allSections.find(section => section.path === initialPath);

        if (initialSection) 

            loadContent(
                $layoutContent, 
                initialSection.url, 
                initialSection.title, 
                initialSection.path, 
                initialSection.favicon, 
                initialSection.headerTitle);
                        
        else {

            loadContent(
                $layoutContent,
                urlHome,
                titlePage,
                homePath,
                faviconPage,
                titleHeader
            );

            $layoutNavbar.load(urlNavBar);
                    
        }

        //  ----------  Guarda el estado inicial para que el botón "Atrás" funcione correctamente  ----------
        history.replaceState({ path: window.location.pathname }, '', window.location.pathname);

    }



    //  ------------------------------------------------------------------
    //  ----------  Función para manejar la carga de contenido  ----------
    //  ------------------------------------------------------------------
    function loadContent($container, url, pageTitle, path, favicon, headerTitle, scriptFiles) {

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
                updateFavicon(favicon);

                //  -----  Cambiamos el Encabezado h1 de la Página  -----
                $layoutHeader.html(`<h1> ${headerTitle} </h1>`);

                //  -----  Cargar script de las secciones  -----
                if (scriptFiles) 
                    scriptFiles.forEach(scriptUrl => loadScriptsIfExists(scriptUrl));
              
            }

        });

    }



    //  --------------------------------------------------------
    //  ----------  Función que Actualiza el Favicon  ----------
    //  --------------------------------------------------------
    function updateFavicon(favicon) {

        //  -----  referenciamos el favicon  -----
        let $favicon = $('link[rel~="icon"]');

        //  -----  Si No existe lo crea  -----
        if ($favicon.length === 0) $favicon = $('<link rel="icon" type="image/x-icon">').appendTo('head');

        //  -----  Cambia la ruta del favicon con una linea de tiempo para no ser cacheado  -----
        $favicon.attr('href', `${favicon}?t=${new Date().getTime()}`);
       
    }



    //  ------------------------------------------------------------------
    //  ----------  Función que Carga un Script si este Existe  ----------
    //  ------------------------------------------------------------------
    function loadScriptsIfExists(scriptUrl) {

        const script = scriptUrl;

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



    //  -------------------------------------------------------------------------------
    //  ----------  Función que Actualiza los estilos al recargar la página  ----------
    //  -------------------------------------------------------------------------------
    function updateStylesheet(cssFile) {
        
        let $stylesheet = $(`link[href*="${cssFile}"]`);
    
        //  🔄 Si el archivo CSS no existe en el head, lo creamos
        if ($stylesheet.length === 0) {
            $stylesheet = $('<link rel="stylesheet">').appendTo('head');
        }
    
        //  🚀 Forzamos la actualización añadiendo un timestamp a la URL
        $stylesheet.attr('href', `${cssFile}?t=${new Date().getTime()}`);
    }
    


    //  -----------------------------------------------------------
    //  ----------  Manejador de clics para los enlaces  ----------
    //  -----------------------------------------------------------
    $(document).on('click', 'a[id]', function (event) {

        event.preventDefault();

        const id = $(this).attr('id');
        const section = allSections.find(sec => sec.id === id);

        //  -----  si hemos clicado en una seccion del menú  -----
        if (section) {
            
            console.log(`\nclick en: ${id}`);
            
            //  -----  cargamos el contenido de la sección  -----
            loadContent($layoutContent, section.url, section.title, section.path, section.favicon, section.headerTitle);
            
            //  -----  cargamos el menú para ir a la home  -----
            $layoutNavbar.load(urlGoHome);
            
        }

        //  -----  si hemos clicado en el menu para ir a la home  -----
        if(id === 'htmlHome') 
            
            //  -----  cargamos el menu principal  -----
            $layoutNavbar.load(urlNavBar);

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
            $layoutNavbar.load(urlGoHome);

            if(matchedSection.path === '/') 
                $layoutNavbar.load(urlNavBar);
            

        } else {
            
            console.log('\nCargando página por defecto desde historial');
            loadInitialContent();
            
        }

    });



    //  ---------------------------------------------
    //  ----------  Al recargar la página  ----------
    //  ---------------------------------------------
    window.addEventListener("load", function () {
        
        const navigationEntries = performance.getEntriesByType("navigation");
    
        if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
            
            console.warn("🔄 Recarga de la Página");
    
            // 🔹 Actualizamos los estilos forzando la recarga
            updateStylesheet('/udemy.antonydev.tech/01-curso-html5-desde-cero/assets/css/styles.css');
        }

    });
    

    //  ----------------------------------------------------------------------------
    //  ----------  Cargamos los Componentes HTML y el Contenido Inicial  ----------
    //  ----------------------------------------------------------------------------
    loadInitialComponentsHtml();
    loadInitialContent();


});



// window.addEventListener("beforeunload", function (event) {
        
    //     // Detectar si es un refresh (F5 o Ctrl+R)
    //     if (performance.navigation.type === 1) {
        
    //         console.warn('Recarga de la Página');

    //         //  -----  actualizamos los estilos  -----
    //         updateStylesheet('/udemy.antonydev.tech/01-curso-html5-desde-cero/assets/css/styles.css');
            
    //         //  -----  No hacer nada si es una recarga  -----
    //         return; 
                                    
    //     }
    
    //     // Si es una navegación o cierre de pestaña, ejecutar la acción
    //     //window.open('/udemy.antonydev.tech/01-curso-html5-desde-cero/index.html', '_blank');
    // });
