// var almacena valores en la memoria para ser usadas
// se asignan valores a variables
// identificadores son los nombre que usemos para nombrar nuestras variables. es sensible a mayuscular y minusculas.
// js no permite que tus variables empiecen en numero ej name1 es ccorrecto pero 1name es incorrecto
// no podemos nombrar a nuestras variables con las palabras reservadas LINK ECMA
/* 
Al final de una declaracion podemos prescindir del punto y coma pero es mejor usarlopara facilitar lectura
O usando el piunto y coma podemos escribir todo en una sola linea
se añade automaticamente en diferentes caos (aupuntes)
*/

// comentario de una sola linea
/* comentario multilinea */
// sin embargo no se pueden anidar comentarios
/* 
control + espacio = accesos directos a diferentes etiquetas 

TIPOS DE DATOS

string: cadena de texto

El orden en el que estan escritas la sentencias importan. 
js lee de izq a derecha y de arriba abajo

si se mezcla numeros y string entonces ya no hace cuentas matenaticas = todo se convierte en un string


OPERADOR TYPEOF

para saver que nunero es console.log(tipeof numero)


TIPO NUMBER: Todo tipo de numeros.
TIPO STRING: Cada hueco usado es un caracter, incluido espacios
Para poner doble comilla dentro de un string hay que usar la barra /" Si no queremos utilizar eso podemos alternar comilla simple y dentro unas comillas dobles.
Podemos concatenar cadenas de texto
TIPO BOOLEANO: Verdadero o falso (true or false) 
TIPO UNDEFINED: Indefinido


OBJETOS

Coleccion de propiedades que se crean dentro de dos llaves {} y dentro estan las propiedades
despues podremos accedeer a esas propiedades que le hemos asignado.

PROMPT 
Interacutar con el usuario y alma cenar los datos que nos pasa
si el usuario cancela se devuelve null


CONFIRM
Solo puede aceptar o cancelar. Devuelve un true o un false
Prevalece sobre cualquier otra funcion
el resto del codigo no se ejecuta hasta que no se termine de resolver ese cuadro de dialogo.


*/

// Lab2-AliciaNarvez

//OBJETOS

var hoteles = {
  Mencey: {
    name: "Mencey",
    localization: "Tenerife",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80",
  },

  Lani: {
    name: "Lani",
    localization: "Málaga",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  },
};

var stars = {
  una: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  dos: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  tres: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  cuatro: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  cinco: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

//PREGUNTAS

hotelSeleccionado = prompt("Indique el hotel sobre el que quiere hacer la reseña: Mencey o Lani");
hotelPuntuacion = prompt("Puntuación del hotel de una a cinco entrellas:");
isAnonimo = confirm("Quiere que la reseña sea anónima?");

//NOMBRE
document.getElementById("hotel-name").innerHTML = "Hotel" + " " + hoteles[hotelSeleccionado].name;

//UBICACION
document.getElementById("hotel-location").innerHTML = "Ubicado en:" + " " + hoteles[hotelSeleccionado].localization;

// IMAGEN
document.getElementById("hotel-img").src = hoteles[hotelSeleccionado].img;

//ESTRELLAS
document.getElementById("hotel-stars").innerHTML = stars[hotelPuntuacion];

//ANONIMO
document.getElementById("checkAnonimo").checked = isAnonimo;
