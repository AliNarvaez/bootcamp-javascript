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
