//  ---------------------------------------------------------------
//  ----------  /udemy.antonydev.tech/  ---------------------------
//  ----------  /master-css/  -------------------------------------
//  ----------  /assets/js/section-repaso-javascript.js  ----------
//  ---------------------------------------------------------------


//  -----  Ruta base y del favicon  -----  
const base = '/udemy.antonydev.tech/master-css';
const favicon = `${base}/assets/favicon/js-favicon.ico`;

//  -----  Rutas de los script  -----
const scriptsJavaScript = [
    `${base}/assets/js/script-repaso-javascript.js`
];


//  -----  Array de objetos con los IDs y las rutas correspondientes  -----
const sectionRepasoJavaScript = [

    {
        id: 'cssJavaScript',
        url: `${base}/repaso-javascript/index.html`,
        title: 'Repaso de JavaScript',
        path: '/repaso-javascript/index.html',
        favicon: favicon,
        scripts: scriptsJavaScript
    },
        
];


export { sectionRepasoJavaScript };
