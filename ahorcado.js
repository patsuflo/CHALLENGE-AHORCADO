document.getElementById("segundaPantalla").style.display = "none";
var palabraNueva = document.querySelector(".agregarpalabranueva");
const btnComenzar = document.querySelector("comenzar");
var btnAgregarpalabra = document.querySelector(".agregarPalabra");
var tablero = document.getElementById(horca);
var contenedor = document.getElementById("contenedor");
var palabra_Secreta;
var letrasErradas = "";
var arrPNueva = ["POLCA", "PALABRITA", "ESTERILLA", "CONECTADOS", "DOCUMENTOS", "MISILES",
   "TRUCO", "JUNCOS", "SERIAL", "COSTOS", "MONAS", "MONEDA", "XILOS", "MORFAN", "JUEGAN", "MUSULMANES", "CATARATAS", "PIRAMIDES", "OSOBUCO", "ANIMALES", "ALIMAÑAS", "ESPANTAPAJAROS"];
var otrasLetras = document.querySelector("#otrasLetras")
var palabraSecreta;
var btniniciaJuego = document.getElementById("nuevoJuego");
btniniciaJuego.onclick = comenzarJuego; ancho = "";
btniniciaJuego.disabled = false;
var btndesistir = document.getElementById("desistir");
var letter = document.getElementsByClassName("letraPalabra");
var pincel = document.getElementById("horca").getContext("2d");
var cantAciertos = 0;
var cantErrores = 0;
var span;
var erradas;



function comenzarJuego() {
   dibujarCanvas();
   elegirPalabra();
   crearGuiones();
}

document.addEventListener("keydown", verificar);

function verificar(event) {
   var word = palabraSecreta
   var keyValue;
   var key;
   var spans = document.querySelectorAll('#contenedor span');
   keyValue = event.key;
   key = keyValue.toUpperCase();
   key = event.keyCode || e.which;

   if ((key > 64 && key < 91) || key == 192) {
      var letra = keyValue.toLocaleUpperCase();
      var acerto = false;

      for (var posi = 0; posi < word.length; posi++) {
         if (letra == word[posi]) {
            spans[posi].innerHTML = letra;
            acerto = true;
            cantAciertos++
         }
      }

      if (cantAciertos === word.length) {
         ganaste();
      }

      if (acerto == false) {
         erradas = [];
         erradas.push(letra);
         erradas.forEach(element => {
            let span = document.createElement('span');
            otrasLetras.appendChild(span);
            span.innerHTML = letra;
            cantErrores++;
         });

         dibujarHorca(cantErrores);
         if (cantErrores == 7) {
            seAhorco();
            perdiste();
         }
      }
   } else {
      alert("Presione una letra");
   }

}







