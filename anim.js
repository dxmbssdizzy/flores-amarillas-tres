// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tengo algo que decirte", time: 19 },
  { text: "Y no se como empezar", time: 20 },
  { text: "A explicar lo que te quiero contar", time: 21 },
  { text: " ", time: 29 },
  { text: "No encuentro las palabras", time: 34 },
  { text: "Ni versos, rima o prosa", time: 35 },
  { text: "Quiza con una rosa", time: 36 },
  { text: "Te lo pueda decir", time: 37 },
  { text: " ", time: 44 },
  { text: "No se ni desde cuando", time: 49 },
  { text: "Llegaste de repente", time: 50 },
  { text: "Mi corazon se puso a cantar", time: 51 },
  { text: " ", time: 59 },
  { text: "Te quiero solecito hermoso", time: 65 },
  { text: "Y te entrego en esta rosa", time: 66 },
  { text: "La vida que me pueda quedar", time: 67 },
  { text: "Doy gracias al cielo", time: 73 },
  { text: "Por haberte conocido", time: 74 },
  { text: "Doy gracias al cielo", time: 79 },
  { text: "Y le cuento a las estrellas", time: 80 },
  { text: "Lo bonito que senti", time: 84 },
  { text: "Cuando te conoci", time: 86 },
  { text: "Sabes...", time: 90 },
  { text: "¡Sabes una cosa!", time: 93 },
  { text: "¡Que yo te quiero!", time: 98 },
  { text: "¡Que sin ti me muero!", time: 110 },
  { text: "¡Que si estas lejos!", time: 112 },
  { text: " ", time: 119 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 7
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);