//  ------------------------------------------------
//  ----------  /udemy.antonydev.tech/  ------------
//  ----------  /curso-html5-desde-cero/  ----------
//  ----------  /main.js  --------------------------
//  ------------------------------------------------


import { sectionHtml } from '/01-curso-html5-desde-cero/assets/js/section-html.js';
import { sectionProyectoHtml } from '/01-curso-html5-desde-cero/assets/js/section-proyecto-html.js';
import { sectionCss } from '/01-curso-html5-desde-cero/assets/js/section-css.js';


$(function () {
    

    //  ----------  Documento Cargado  ----------
    console.warn('main.js is loaded - jQuery version:', $.fn.jquery);


    //  ----------  Arrays con la informacion del contenido a cargar de las secciones del proyecto ----------
    const allSections = [...sectionHtml, ...sectionProyectoHtml, ...sectionCss];


    //  ----------  URL de la base del proyecto  ----------
    const base = '/01-curso-html5-desde-cero';


    //  ----------  referencias al HTML  ----------
    const $layout = $('#layout');
    const layoutHeader = '#layoutHeader';
    const layoutNavbar = '#layoutNavbar';
    const layoutContent = '#layoutContent';
    const layoutFooter = '#layoutFooter';


    //  ----------  URLs Component HTML  ----------
    const urlHeader = '/01-curso-html5-desde-cero/assets/components-html/header.html';
    const urlNavBar =  '/01-curso-html5-desde-cero/assets/components-html/navbar.html';
    const urlGoHome = '/01-curso-html5-desde-cero/assets/components-html/go-home.html';
    const urlFooter = '/01-curso-html5-desde-cero/assets/components-html/footer.html';
    const urlHome = '/01-curso-html5-desde-cero/home/index.html';


    //  ----------  Variables de Inicialización, home  ----------
    const titlePage = 'Curso HTML 5 desde cero';
    const homePath = '/';
    const faviconPage = `${base}/assets/favicon/html5-favicon.ico`;
    const titleHeader = titlePage;


    //  ----------  Invocamos el Plugins  --  jquery.spa-with-jquery.js  ----------
    $layout.spaWithJQuery({
        sections: allSections,
        base,
        layoutHeader,
        layoutNavbar,
        layoutContent,
        layoutFooter,
        urlHeader,
        urlNavBar,
        urlGoHome,
        urlFooter,
        urlHome,
        titlePage,
        homePath,
        faviconPage,
        titleHeader
    });


});
