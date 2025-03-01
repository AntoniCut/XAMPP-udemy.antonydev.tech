//  --------------------------------------------------
//  ----------  /udemy.antonydev.tech/  --------------
//  ----------  /master-css/  ------------------------
//  ----------  /assets/js/section-bootstrap.js  ----------
//  --------------------------------------------------


//  -----  Ruta base y del favicon  -----  
const base = '/udemy.antonydev.tech/master-css';
const favicon = `${base}/assets/favicon/bootstrap-favicon.ico`;

//  -----  Rutas de los script  -----
const scriptsBootstrap = [
    `${base}/assets/bootstrap-4/js/bootstrap.min.js`,
    `${base}/assets/bootstrap-4/js/cdn.jsdelivr.net_npm_popper.js@1.16.0_dist_umd_popper.min.js`,
    `${base}/assets/js/script-bootstrap.js`
];


//  -----  Array de objetos con los IDs y las rutas correspondientes  -----
const sectionBootstrap = [

    {
        id: 'cssBootstrapIndex',
        url: `${base}/aprendiendo-bootstrap/index.html`,
        title: 'Aprendiendo Bootstrap 4',
        path: '/aprendiendo-bootstrap/index.html',
        favicon: favicon,
        scripts: []
    },

    {
        id: 'cssBootstrapHerramientas',
        url: `${base}/aprendiendo-bootstrap/herramientas/index.html`,
        title: 'Herramientas en Bootstrap 4',
        path: '/aprendiendo-bootstrap/herramientas/index.html',
        favicon: favicon,
        scripts: []
    },

    {
        id: 'cssBootstrapComponentes',
        url: `${base}/aprendiendo-bootstrap/componentes/index.html`,
        title: 'Componentes en Bootstrap 4',
        path: '/aprendiendo-bootstrap/componentes/index.html',
        favicon: favicon,
        scripts: scriptsBootstrap
    }
        
];


export { sectionBootstrap };
