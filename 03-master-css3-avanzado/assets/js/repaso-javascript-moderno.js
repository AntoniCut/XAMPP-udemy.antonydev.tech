<<<<<<< HEAD:master-css3-avanzado/assets/js/repaso-javascript-moderno.js
//  ---------------------------------------------------------------
//  ----------  /udemy.antonydev.tech/  ---------------------------
//  ----------  /master-css3-avanzado/  ---------------------------
//  ----------  /assets/js/repaso-javascript-moderno.js  ----------
//  ---------------------------------------------------------------


//  -----  Repaso de JavaScript  -----

(function () {


    //  -----  Alertas  -----
    alert("Repaso de JavaScript Moderno");


    //  -----  Variables  -----
    let nombre = "Victor Robles";
    let altura = 180;
    nombre = "Antonio Francisco Cutillas Garcia";


    //  -----  Constantes.
    const apellido = "robles";
    

    //  -----  Mostrar por consola  -----
    console.log('\nNombre: ', nombre);
    console.log('Altura: ', altura);


    //  -----  Concatenación  -----
    let concatenacion = " El nombre es " + nombre + " y la altura es de " + altura;
    console.log('Concatenacion: ', concatenacion);
    concatenacion = nombre + " " + apellido;
    console.log('Concatenacion: ', concatenacion);


    //  -----  Seleccionar elementos del DOM (Document object Model)  -----
    let datos = document.querySelector("#javascript__datos");


    //  -----  Utilizamos un Template String  -----
    datos.innerHTML = `   
        <br><hr><br>
        <h2> Soy la caja de datos </h2> 
        <h3> Mi nombre es ${concatenacion} </h3> 
        <h4> Mido ${altura} </h4>
        <br><hr><br>
    `;


    //  -----  Condiciones  -----
    if (altura >= 185) 
        datos.innerHTML += "<br><h1> Eres una persona alta </h1>";
    else 
        datos.innerHTML += "<br><h1> Eres una persona baja </h1> <br><br>";
    

    //  -----  Bucles  -----
    for (let year = 2000; year <= 2023; year++) {
       datos.innerHTML += `<h4> Estamos en el año: ${year} </h4`;
    }

    //  -----  Arrays  -----
    let divNombres = document.querySelector("#javascript__nombres");
    let nombres = ["Victor", "Francisco", "Pepe"];
    divNombres.innerHTML += "<h2> Listado de Nombres </h2> <ul>";
    nombres.forEach(nombre => {
        divNombres.innerHTML += "<li>" + nombre + "</li>"
    });
    

    divNombres.innerHTML += "<ul>"
    for (let nombre of nombres) {
        divNombres.innerHTML += "<li>" + nombre + "</l1>";
    }
    divNombres.innerHTML += "</ul>"


    //  -----  Funciones  -----
    const miInformacion = (nombre, altura) => {
        
        let misDatos = `
            <br><hr><br>
            <h2> Soy la caja de datos </h2> 
            <h3> Mi nombre es ${nombre} </h3> 
            <h4> Mido ${altura} cm </h4>
            <br><hr><br>
        `;

        return misDatos;
    }

    console.log(miInformacion("Victor Robles", 187));

    const imprimir = () => {
        //let datos = document.querySelector("#datos");
        datos.innerHTML += miInformacion("Victor Robles", 187);
    }

    imprimir();

})();
=======
//  ---------------------------------------------------------------
//  ----------  /udemy.antonydev.tech/  ---------------------------
//  ----------  /master-css3-avanzado/  ---------------------------
//  ----------  /assets/js/repaso-javascript-moderno.js  ----------
//  ---------------------------------------------------------------


//  -----  Repaso de JavaScript  -----

(function () {


    //  -----  Alertas  -----
    alert("Repaso de JavaScript Moderno");


    //  -----  Variables  -----
    let nombre = "Victor Robles";
    let altura = 180;
    nombre = "Antonio Francisco Cutillas Garcia";


    //  -----  Constantes.
    const apellido = "robles";
    

    //  -----  Mostrar por consola  -----
    console.log('\nNombre: ', nombre);
    console.log('Altura: ', altura);


    //  -----  Concatenación  -----
    let concatenacion = " El nombre es " + nombre + " y la altura es de " + altura;
    console.log('Concatenacion: ', concatenacion);
    concatenacion = nombre + " " + apellido;
    console.log('Concatenacion: ', concatenacion);


    //  -----  Seleccionar elementos del DOM (Document object Model)  -----
    let datos = document.querySelector("#javascript__datos");


    //  -----  Utilizamos un Template String  -----
    datos.innerHTML = `   
        <br><hr><br>
        <h2> Soy la caja de datos </h2> 
        <h3> Mi nombre es ${concatenacion} </h3> 
        <h4> Mido ${altura} </h4>
        <br><hr><br>
    `;


    //  -----  Condiciones  -----
    if (altura >= 185) 
        datos.innerHTML += "<br><h1> Eres una persona alta </h1>";
    else 
        datos.innerHTML += "<br><h1> Eres una persona baja </h1> <br><br>";
    

    //  -----  Bucles  -----
    for (let year = 2000; year <= 2023; year++) {
       datos.innerHTML += `<h4> Estamos en el año: ${year} </h4`;
    }

    //  -----  Arrays  -----
    let divNombres = document.querySelector("#javascript__nombres");
    let nombres = ["Victor", "Francisco", "Pepe"];
    divNombres.innerHTML += "<h2> Listado de Nombres </h2> <ul>";
    nombres.forEach(nombre => {
        divNombres.innerHTML += "<li>" + nombre + "</li>"
    });
    

    divNombres.innerHTML += "<ul>"
    for (let nombre of nombres) {
        divNombres.innerHTML += "<li>" + nombre + "</l1>";
    }
    divNombres.innerHTML += "</ul>"


    //  -----  Funciones  -----
    const miInformacion = (nombre, altura) => {
        
        let misDatos = `
            <br><hr><br>
            <h2> Soy la caja de datos </h2> 
            <h3> Mi nombre es ${nombre} </h3> 
            <h4> Mido ${altura} cm </h4>
            <br><hr><br>
        `;

        return misDatos;
    }

    console.log(miInformacion("Victor Robles", 187));

    const imprimir = () => {
        //let datos = document.querySelector("#datos");
        datos.innerHTML += miInformacion("Victor Robles", 187);
    }

    imprimir();

})();
>>>>>>> 3a719d6fc28906b21d6ac7f73b39114c6d33fce2:03-master-css3-avanzado/assets/js/repaso-javascript-moderno.js
