//  ****************************************
//  **********  /asset/js/map.js  **********
//  ****************************************


document.addEventListener('DOMContentLoaded', () => {

    alert('Mapa');
    
    const iframe = '<iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50315.256655054014!2d-1.128575223869082!3d37.984047316228036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63821b3435ac97%3A0xae905eadb07c3969!2sCatedral%20de%20Murcia!5e0!3m2!1sen!2ses!4v1719148578842!5m2!1sen!2ses"></iframe>';

    let mapa = document.getElementById("load-iframe-map");

    // Si el contenedor no existe, créalo dinámicamente
    if (!mapa) {
        console.log("El contenedor no existe, creando uno nuevo...");
        const mapaContainer = document.querySelector('.contact__map');
        mapa = document.createElement('div');
        mapa.id = "load-iframe-map";  // Establecer el ID
        mapaContainer.appendChild(mapa);  // Agregar al contenedor existente
    }

    // Insertar el iframe en el contenedor
    setTimeout(() => {
        mapa.innerHTML = iframe;
        console.log("Iframe cargado correctamente.");
    }, 3000);

});

