//  --------------------------------------------------------------
//  ----------  /udemy.antonydev.tech/  --------------------------
//  ----------  /master-css/  ------------------------------------
//  ----------  /assets/js/script-repaso-javascript.js  ----------
//  --------------------------------------------------------------


//  -----  Repaso de JavaScript  -----

(function () {

    //  -----  Alertas  -----
    alert('Hola mundo - Repaso de JavaScript!');

    //  -----  Referencias al HTML  -----
    const datos = document.getElementById("javascriptDatos");

    //  -----  Variables  -----
    let nombre = "Antonio Francisco Cutillas Garcia";
    let altura = 180;
    let concatenacion = nombre + " " + altura;
      
    datos.innerHTML = concatenacion;
    
    datos.innerHTML += `
        <h1> Soy la caja de datos </h1>
        <h2> Mi nombre es: ${nombre} </h2>
        <h3> Mi altura es: ${altura} cm </h3>
    `;
    
    //  -----  Estructuras de control  -----
    if(altura >= 190) 
        datos.innerHTML +=  ' <h1> Eres una persona ALTA </h1> ';
    else
        datos.innerHTML += ' <h1> Eres una persona BAJA </h1> ';
    
        
    //  -----  Bucles  -----
    for(let i=2000; i<=2020; i++) {
        datos.innerHTML += `<h2> Estamos en el año: ${i} </h2>`;
    }
       

    //  -----  Funciones  -----
    function MuestraMiNombre(nombre, altura) {

        let misDatos = `
            <h1> Soy la caja de datos </h1>
            <h2> Mi nombre es: ${nombre} </h2>
            <h3> Mi altura es: ${altura} cm </h3>
        `;

        return misDatos;
    }


    function imprimir() {

        datos.innerHTML += MuestraMiNombre("Antonio Francisco Cutillas Garcia", 180);
    }


    //  -----  Invocar a la Función  -----
    imprimir();


    //  -----  Arrays  -----
    let nombres = ['Victor', 'Antonio', 'Joaquin'];
    
    
    //  Bucle For Each. con funciones de CallBack.
    nombres.forEach(function (nombre) {
        datos.innerHTML += `<br> ${nombre}`;
    });
    

})();
