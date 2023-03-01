var botonMostrarFotos = document.getElementById("botonMostrarFotos");
var contenedorFotos = document.getElementById("contenedorFotos");

botonMostrarFotos.addEventListener("click", function() {
  contenedorFotos.innerHTML = '<img src="programando1.jpg">';
});
var botonOcultarFoto = document.getElementById("ocultarFoto");
var fotoPresentacion = document.getElementById("fotoPresentacion");

botonOcultarFoto.addEventListener("click", function() {
  fotoPresentacion.style.display = "none";
});
