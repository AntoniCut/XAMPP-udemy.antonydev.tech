//  Alertas.
alert('Hola mundo!');

//  Variables.
var nombre = "Victor Robles";
var altura = 150;

/*
var concatenacion = nombre + " " + altura;

//document.write(concatenacion);

var datos = document.getElementById("datos");

datos.innerHTML = concatenacion;

datos.innerHTML = `
    <h1> Soy la caja de datos </h1>
    <h2> Mi nombre es: ${nombre} </h2>
    <h3> Mi altura es: ${altura} cm </h3>
`;

//  Estructuras de control.
if(altura >= 190) {
    datos.innerHTML +=  ' <h1> Eres una persona ALTA </h1> ';
}
else {
    datos.innerHTML += ' <h1> Eres una persona BAJA </h1> ';
}

//  Bucles.
for(var i=2000; i<=2020;i++) {
    //  bloque de instrucciones
    datos.innerHTML += " <h2> Estamos en el año: " + i;
}

*/

//  Funciones.
function MuestraMiNombre(nombre, altura) {
    
    var misDatos = `
        <h1> Soy la caja de datos </h1>
        <h2> Mi nombre es: ${nombre} </h2>
        <h3> Mi altura es: ${altura} cm </h3>
    `;

    return misDatos;
}

function imprimir() {
    
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Victor Robles WEB", 180);
}

//  Invocar a la Funcion.
imprimir();

//  Arrays.
var nombres = ['Victor', 'Antonio', 'Joaquin'];

//alert(nombres[1]);

document.write('<h1> Listado de Nombres </h1>');
/*
for(i=0; i < nombres.length; i++) {
    document.write(nombres[i] + "<br>");
}
*/

//  Bucle For Each. con funciones de Calvac.

nombres.forEach(function(nombre) {
    document.write(nombre + '<br>');
});

nombres.forEach((nombre) => {
    document.write('<br>' + nombre);
});


