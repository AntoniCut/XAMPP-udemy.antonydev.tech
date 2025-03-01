//  --------------------------------------------------------
//  ----------  /udemy.antonydev.tech/  --------------------
//  ----------  /master-css3-avanzado/  --------------------
//  ----------  /assets/js/section-portafolio.js  ----------
//  --------------------------------------------------------


const base = '/udemy.antonydev.tech/master-css3-avanzado/portafolio';
const favicon = `${base}/assets/favicon/css3-favicon.ico`;


//  -----  Array de objetos con los IDs y las rutas correspondientes  -----
const sectionPortafolio = [

    {
        id: 'home',
        url: `${base}/home/index.html`,
        title: 'Maquetación Web 1 - Portafolio',
        path: '/home/index.html',
        favicon: favicon,
    },

    {
        id: 'sobreMi',
        url: `${base}/sobre-mi/index.html`,
        title: 'Sobre Mí',
        path: '/sobre-mi/index.html',
        favicon: favicon,
    },

    {
        id: 'curriculum',
        url: `${base}/curriculum/index.html`,
        title: 'Curriculum',
        path: '/curriculum/index.html',
        favicon: favicon,
    },

    {
        id: 'portafolio',
        url: `${base}/portafolio/index.html`,
        title: 'Portafolio',
        path: '/portafolio/index.html',
        favicon: favicon,
    },

    {
        id: 'blog',
        url: `${base}/blog/index.html`,
        title: 'Blog',
        path: '/blog/index.html',
        favicon: favicon,
    },

    {
        id: 'contacto',
        url: `${base}/contacto/index.html`,
        title: 'Contacto',
        path: '/contacto/index.html',
        favicon: favicon,
    },
    
];


export { sectionPortafolio };
