//  ---------------------------------------------------
//  ----------  /udemy.antonydev.tech/  ---------------
//  ----------  /01-curso-html5-desde-cero/  ----------
//  ----------  /assets/jquery-plugins/  --------------
//  ----------  /jquery.spa-with-jquery.js  -----------  
//  ---------------------------------------------------



(function ($) {

    //  ----------  Plugins jquery.spa-with-jquery.js  ----------
    $.fn.spaWithJQuery = function (options) {

        const settings = $.extend({
            sections: [],
            base: '',
            layoutHeader: '#layoutHeader',
            layoutNavbar: '#layoutNavbar',
            layoutContent: '#layoutContent',
            layoutFooter: '#layoutFooter',
            urlHeader: '',
            urlNavBar: '',
            urlGoHome: '',
            urlFooter: '',
            urlHome: '',
            titlePage: 'Página sin Título',
            homePath: '/',
            faviconPage: '',
            titleHeader: 'Página sin Título'
        }, options);


        //  ----------  referencias al HTML  ----------
        const $layoutHeader = $(settings.layoutHeader);
        const $layoutNavbar = $(settings.layoutNavbar);
        const $layoutContent = $(settings.layoutContent);
        const $layoutFooter = $(settings.layoutFooter);


        //  ---------------------------------------------------------------------
        //  ----------  función para la Carga de los Componentes HTML  ----------
        //  ---------------------------------------------------------------------
        function loadInitialComponentsHtml() {
            $layoutHeader.load(settings.urlHeader);
            $layoutNavbar.load(settings.urlNavBar);
            $layoutFooter.load(settings.urlFooter);
        }


        //  -------------------------------------------------------------------
        //  ----------  función para la Carga del Contenido Inicial  ----------
        //  -------------------------------------------------------------------
        function loadInitialContent() {
            const initialPath = window.location.pathname.replace(settings.base, '');
            const initialSection = settings.sections.find(section => section.path === initialPath);

            if (initialSection) {

                loadContent(initialSection);

            } else {

                loadContent({
                    url: settings.urlHome,
                    title: settings.titlePage,
                    path: settings.homePath,
                    favicon: settings.faviconPage,
                    headerTitle: settings.titleHeader
                });

                $layoutNavbar.load(settings.urlNavBar);
            }

            //  ----------  Guarda el estado inicial para que el botón "Atrás" funcione correctamente  ----------
            history.replaceState({ path: window.location.pathname }, '', window.location.pathname);
        }


        //  ------------------------------------------------------------------
        //  ----------  Función para manejar la carga de contenido  ----------
        //  ------------------------------------------------------------------
        function loadContent(section) {

            $layoutContent.load(section.url, function (response, status, xhr) {

                if (status === "error") {

                    console.error(`Error al cargar ${section.url}: ${xhr.statusText}`);
                    $layoutContent.html('<p>Error 404: No se pudo cargar el contenido.</p>');

                } else {

                    //  -----  Cambiamos el title de la página  -----
                    document.title = section.title;

                    //  -----  Solo cambia la URL si es diferente a la actual  -----
                    const newUrl = `${settings.base}${section.path}`;

                    if (window.location.pathname !== newUrl) {
                        history.pushState({ path: newUrl }, '', newUrl);
                    }

                    //  -----  Actualizar el favicon  -----
                    updateFavicon(section.favicon);

                    //  -----  Cambiamos el Encabezado h1 de la Página  -----
                    $layoutHeader.html(`<h1>${section.headerTitle}</h1>`);

                    //  -----  Cargar script de las secciones si estos existen  -----
                    if (section.scriptFiles) {
                        section.scriptFiles.forEach(scriptUrl => loadScriptsIfExists(scriptUrl));
                    }

                }

            });

        }


        //  --------------------------------------------------------
        //  ----------  Función que Actualiza el Favicon  ----------
        //  --------------------------------------------------------
        function updateFavicon(favicon) {

            let $favicon = $('link[rel~="icon"]');

            if ($favicon.length === 0) {
                $favicon = $('<link rel="icon" type="image/x-icon">').appendTo('head');
            }

            $favicon.attr('href', `${favicon}?t=${new Date().getTime()}`);

        }


        //  ------------------------------------------------------------------
        //  ----------  Función que Carga un Script si este Existe  ----------
        //  ------------------------------------------------------------------
        function loadScriptsIfExists(scriptUrl) {

            $.ajax({

                url: scriptUrl,
                type: 'HEAD',       // Verifica si el script existe.

                success: function () {

                    $.getScript(scriptUrl)

                        .done(() => console.log(`Cargado: ${scriptUrl}`))
                        .fail((jqxhr, settings, exception) => console.error(`Error en ${scriptUrl}:`, exception));
                },

                error: function () {

                    console.warn(`No existe el script: ${scriptUrl}`);
                }

            });

        }


        //  -------------------------------------------------------------------------------
        //  ----------  Función que Actualiza los estilos al recargar la página  ----------
        //  -------------------------------------------------------------------------------
        function updateStylesheet(cssFile) {

            let $stylesheet = $(`link[href*="${cssFile}"]`);
            if ($stylesheet.length === 0) {
                $stylesheet = $('<link rel="stylesheet">').appendTo('head');
            }
            $stylesheet.attr('href', `${cssFile}?t=${new Date().getTime()}`);
        }


        //  -----------------------------------------------------------
        //  ----------  Manejador de clics para los enlaces  ----------
        //  -----------------------------------------------------------
        $(document).on('click', 'a[id]', function (event) {

            event.preventDefault();

            const id = $(this).attr('id');
            const section = settings.sections.find(sec => sec.id === id);

            //  -----  si hemos clicado en una seccion del menú  -----
            if (section) {

                //  -----  cargamos el contenido de la sección  -----
                loadContent(section);

                //  -----  cargamos el menú para ir a la home  -----
                $layoutNavbar.load(settings.urlGoHome);
            }

            //  -----  si hemos clicado en el menu para ir a la home  -----
            if (id === 'htmlHome')

                //  -----  cargamos el menu principal  -----
                $layoutNavbar.load(settings.urlNavBar);

        });


        //  ----------------------------------------------------------
        //  ----------  Manejar retrocesos en el historial  ----------
        //  ----------------------------------------------------------
        window.addEventListener('popstate', function (event) {

            //  -----  Usar `event.state.path` si está disponible, si no, tomar la URL actual  -----
            const matchedPath = event.state?.path ? event.state.path.replace(settings.base, '') : window.location.pathname.replace(settings.base, '');
            const matchedSection = settings.sections.find(section => section.path === matchedPath);

            if (matchedSection) {

                loadContent(matchedSection);
                $layoutNavbar.load(settings.urlGoHome);

                if (matchedSection.path === '/')
                    $layoutNavbar.load(settings.urlNavBar);

            } else
                loadInitialContent();

        });


        //  ---------------------------------------------
        //  ----------  Al recargar la página  ----------
        //  ---------------------------------------------
        window.addEventListener("load", function () {

            const navigationEntries = performance.getEntriesByType("navigation");

            if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
                console.warn("🔄 Recarga de la Página");
                
                // 🔹 Actualizamos los estilos forzando la recarga
                updateStylesheet('/01-curso-html5-desde-cero/assets/css/styles.css');
            }

        });


        //  ----------  Cargamos los Componentes HTML y el Contenido Inicial  ----------
        loadInitialComponentsHtml();
        loadInitialContent();

    };


})(jQuery);
