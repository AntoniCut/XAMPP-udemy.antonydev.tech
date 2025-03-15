//  --------------------------------------------------
//  ----------  /udemy.antonydev.tech/  --------------
//  ----------  /master-css/  ------------------------
//  ----------  /assets/js/section-css.js  ----------
//  --------------------------------------------------


//  -----  Ruta base y del favicon  ----- 
const base = '/02-master-css';
const favicon = `${base}/assets/favicon/css3-favicon.ico`;


//  -----  Array de objetos con los IDs y las rutas correspondientes  -----
export const sectionCss = [

    {
        id: 'home',
        url: `${base}/home/index.html`,
        title: 'Master de CSS',
        path: '/',
        favicon: favicon,
        headerTitle: 'Master de CSS'
    },

    // {
    //     id: 'cssIndex',
    //     url: `${base}/aprendiendo-css/index.html`,
    //     title: 'Aprendiendo CSS',
    //     path: '/aprendiendo-css/index.html',
    //     favicon: favicon,
    //     headerTitle: 'Aprendiendo CSS'
    // },

    {
        id: 'cssSelectores',
        url: `${base}/aprendiendo-css/selectores/index.html`,
        title: 'Selectores en CSS',
        path: '/aprendiendo-css/selectores/',
        favicon: favicon,
        headerTitle:'Selectores en CSS'
    },

    {
        id: 'cssFuentes',
        url: `${base}/aprendiendo-css/fuentes/index.html`,
        title: 'Fuentes en CSS',
        path: '/aprendiendo-css/fuentes/',
        favicon: favicon,
        headerTitle: 'Fuentes en CSS'
    },

    {
        id: 'cssFondos',
        url: `${base}/aprendiendo-css/fondos/index.html`,
        title: 'Fondos en CSS',
        path: '/aprendiendo-css/fondos/',
        favicon: favicon,
        headerTitle: 'Fondos en CSS'
    },

    {
        id: 'cssCajas',
        url: `${base}/aprendiendo-css/cajas/index.html`,
        title: 'Cajas en CSS',
        path: '/aprendiendo-css/cajas/',
        favicon: favicon,
        headerTitle: 'Cajas en CSS'

    },

    {
        id: 'cssPseudoclases',
        url: `${base}/aprendiendo-css/pseudoclases/index.html`,
        title: 'Pseudoclases en CSS',
        path: '/aprendiendo-css/pseudoclases/',
        favicon: favicon,
        headerTitle: 'Pseudoclases en CSS'
    },

    {
        id: 'cssTransiAnim',
        url: `${base}/aprendiendo-css/transiciones-animaciones/index.html`,
        title: 'Trancisiones y Animaciones en CSS',
        path: '/aprendiendo-css/transiciones-animaciones/',
        favicon: favicon,
        headerTitle: 'Trancisiones y Animaciones en CSS'
    },
    
];
