// Obtenemos el elemento contenedor del juego
const gameContainer = document.querySelector('.game-container');

// Escuchamos el evento de clic en el contenedor del juego
gameContainer.addEventListener('click', function(e) {
  // Si el elemento clickeado no es una pelota, no hacemos nada
  if (!e.target.classList.contains('ball')) {
    return;
  }

  // Obtenemos la pelota clickeada
  const ball = e.target;

  // Creamos un número aleatorio de pelotas nuevas
  const numBalls = Math.floor(Math.random() * 10) + 1;

  // Creamos cada pelota nueva
  for (let i = 0; i < numBalls; i++) {
    const newBall = document.createElement('div');
    newBall.classList.add('ball');

    // Creamos un tamaño aleatorio para la pelota nueva
    const size = Math.floor(Math.random() * 50) + 50;
    newBall.style.width = size + 'px';
    newBall.style.height = size + 'px';

    // Creamos una posición aleatoria para la pelota nueva
    const top = Math.floor(Math.random() * 80) + 10;
    const left = Math.floor(Math.random() * 80) + 10;
