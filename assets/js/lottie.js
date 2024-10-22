// Función para ocultar las animaciones y redirigir a la siguiente página
document.querySelectorAll('#load-btn').forEach(button => {
  button.addEventListener('click', function() {
    // Selecciona ambos contenedores
    const lottieContainers = document.querySelectorAll('#lottie-container, #lottie-container-mobil');

    // Aplica la clase 'hidden' a cada contenedor seleccionado
    lottieContainers.forEach(container => {
      container.classList.add('hidden');
      
      // Después de la transición, oculta completamente el contenedor
      setTimeout(function() {
        container.style.display = 'none'; // Oculta completamente el contenedor
        window.location.href = './pages/portafolio.html'; // Redirige a la nueva página
      }, 1000); // Coincide con la duración de la transición (1s)
    });
  });
});
