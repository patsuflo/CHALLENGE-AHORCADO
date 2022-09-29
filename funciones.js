

function ocultar() {
  document.getElementById("primeraPantalla").style.display = "none";
  document.getElementById("segundaPantalla").style.display = "block";
  btniniciaJuego.disabled = false
}

function aparecer() {
  document.getElementById("segundaPantalla").style.display = "none";
  document.getElementById("primeraPantalla").style.display = "block";
}

function agregar() {
  arrPNueva.push(palabraNueva.value)
  console.log(arrPNueva);
  palabraNueva.value = ""
}

function elegirPalabra() {
  let palabra = arrPNueva[Math.floor(Math.random() * arrPNueva.length)];
  palabraSecreta = palabra
  console.log(palabraSecreta);
  btniniciaJuego.disabled = true;
}

var contenedorSpan;
function crearGuiones() {
  palabra_Secreta = palabraSecreta.split("");
  var contenedorSpan = document.getElementById("contenedor");
  contenedorSpan.innerHTML = "";

  for (var i = 0; i < palabra_Secreta.length; i++) {
    span = document.createElement('span');
    contenedorSpan.appendChild(span);
  }
}

function ganaste() {
  document.getElementById("ganaste").innerHTML = "Felicidades Ganaste!!!";
  btniniciaJuego.disabled = true;
  setTimeout(fin, 2700);
}

function perdiste() {
  document.getElementById("perdiste").innerHTML = "Perdiste!!! La palabra secreta era:" + palabraSecreta;
  btniniciaJuego.disabled = true;
  setTimeout(fin, 2700);
}



function fin() {
  location.reload();
}






