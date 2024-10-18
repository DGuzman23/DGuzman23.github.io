// Función para ocultar la animación y redirigir a la siguiente página
document.getElementById('load-btn').addEventListener('click', function() {
    // Inicia el desvanecimiento del contenedor Lottie
    const lottieContainer = document.getElementById('lottie-container');
    lottieContainer.classList.add('hidden');
  
    // Después de la transición, oculta completamente el contenedor
    setTimeout(function() {
      lottieContainer.style.display = 'none'; // Oculta el contenedor completamente
      window.location.href = './pages/portafolio.html'; // Redirige a la nueva página
    }, 1000); // Coincide con la duración de la transición (1s)
  });
  
  