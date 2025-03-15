//  ----------------------------------------------------
//  ----------  /xampp-udemy.antonydev.tech/  ----------
//  ----------  /02-master-css/  -----------------------
//  ----------  /main.js  ------------------------------
//  ----------------------------------------------------


import { sectionHtml } from '/02-master-css/assets/js/section-html.js';
import { sectionCss } from '/02-master-css/assets/js/section-css.js';
import { sectionSass } from '/02-master-css/assets/js/section-sass.js';
import { sectionLess } from '/02-master-css/assets/js/section-less.js';
import { sectionResponsive } from '/02-master-css/assets/js/section-responsive.js';
import { sectionFlexBox } from '/02-master-css/assets/js/section-flexbox.js';
import { sectionGridLayout } from '/02-master-css/assets/js/section-gridlayout.js';
import { sectionBootstrap } from '/02-master-css/assets/js/section-bootstrap.js';
import { sectionRepasoJavaScript } from '/02-master-css/assets/js/section-repaso-javascript.js';


$(function () {


    //  ----------  Documento Cargado  ----------
    console.warn('main.js - Master CSS - is loaded - jQuery is ready! - version:', $.fn.jquery);

    //  ----------  Arrays con la informacion del contenido a cargar de las secciones del proyecto ----------
    const allSections = [...sectionCss];


    //  ----------  URL de la base del proyecto  ----------
    const base = '/02-master-css';


    //  ----------  referencias al HTML  ----------
    const $layout = $('#layout');
    const layoutHeader = '#layoutHeader';
    const layoutNavbar = '#layoutNavbar';
    const layoutContent = '#layoutContent';
    const layoutFooter = '#layoutFooter';


    //  ----------  URLs Component HTML  ----------
    const urlHeader = `${base}/assets/components-html/header.html`;
    const urlNavBar =  `${base}/assets/components-html/navbar.html`;
    const urlGoHome = `${base}/assets/components-html/go-home.html`;
    const urlFooter = `${base}/assets/components-html/footer.html`;
    const urlHome = `${base}/home/index.html`;


    //  ----------  Variables de Inicialización, home  ----------
    const titlePage = 'Master de CSS';
    const homePath = '/';
    const faviconPage = `${base}/assets/favicon/css3-favicon.ico`;
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
