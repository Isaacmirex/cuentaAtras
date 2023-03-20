const countdown = document.querySelector('.countdown');
const link = document.querySelector('a');

  
// Establece la fecha límite en la que quieres que termine la cuenta atrás
const deadline = new Date("2023-03-24T24:00:00");

function updateCountdown() {
  // Obtiene la fecha actual
  const now = new Date();

  // Obtiene la diferencia de tiempo entre la fecha límite y la fecha actual
  const diff = deadline - now;

  // Calcula los días, horas, minutos y segundos restantes
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Muestra los días, horas, minutos y segundos restantes en la cuenta atrás
  countdown.innerHTML = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;

  // Cuando se alcance la fecha límite, muestra un mensaje en la cuenta atrás y muestra el enlace
  if (diff < 0) {
    countdown.innerHTML = "¡La cuenta atrás ha terminado!";
    link.style.display = "block";
  }
}

// Oculta el enlace
link.style.display = "none";

// Actualiza la cuenta atrás cada segundo
setInterval(updateCountdown, 1000);
const playPauseButton = document.getElementById("play-pause-button");
const backgroundMusic = document.getElementById("background-music");

playPauseButton.addEventListener("click", function() {
  if (backgroundMusic.paused) {
    backgroundMusic.volume = 0.5;
    backgroundMusic.play();
    playPauseButton.innerHTML = "Pausar";
  } else {
    backgroundMusic.pause();
    playPauseButton.innerHTML = "Reproducir";
  }
});
