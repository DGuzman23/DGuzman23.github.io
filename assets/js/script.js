"use strict";


// Variables
const avatarBox = document.getElementById("avatar-box");
const avatarImage = document.getElementById("avatar-image");

// Imágenes que se alternarán
const images = [
  "../assets/images/DG.webp", // Imagen original
  "../assets/images/logo-dg.webp" // Otra imagen o SVG
];

let currentImageIndex = 0;

// Función para alternar la imagen con el giro
function flipImage() {
  // Cambia a la siguiente imagen
  currentImageIndex = (currentImageIndex + 1) % images.length;

  //Clase para el giro
  avatarBox.classList.add("flip");

  // Espera hasta que la animación termine (1s) y luego cambia la imagen
  setTimeout(() => {
    avatarImage.src = images[currentImageIndex];
    avatarBox.classList.remove("flip");
  }, 500); // Coincide con la duración de la animación en CSS (1s)
}

// Ejecuta el giro y cambio de imagen cada 5 segundos
setInterval(flipImage, 5000);

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Variables para la sección de portafolio
const portfolioItem = document.querySelectorAll(".project-item");
const modalTimePortfolio = document.querySelector("time[data-modal-time]");
const modalContainerPortfolio = document.querySelector(
  "[data-modal-container-portfolio]"
);
const modalCloseBtnPortfolio = document.querySelector(
  "[data-modal-close-btn-portfolio]"
);
const overlayPortfolio = document.querySelector("[data-overlay-portfolio]");

// Variables para el contenido del modal
const modalImgPortfolio = document.querySelector("[data-modal-img-portfolio]");
const modalTitlePortfolio = document.querySelector(
  "[data-modal-title-portfolio]"
);
const modalCategoryPortfolio = document.querySelector(
  "[data-modal-category-portfolio]"
);
const modalDescription = document.querySelector("[data-modal-text] p");
const modalIconContainer = document.querySelector("[data-modal-icon]");

// Función para alternar el modal
const portfolioModalFunc = function () {
  modalContainerPortfolio.classList.toggle("active");
  overlayPortfolio.classList.toggle("active");
};

// Función para optimizar y agregar SVGs al modal
const addIcons = (svgId, container) => {
  const svgIcons = {
    AdobeAI: '<svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 256 250"><rect width="256" height="249.6" fill="#300" rx="42.5"/><path fill="#ff9a00" d="M124.054 149.79h-39.67l-8.072 25.073a2.02 2.02 0 0 1-2.061 1.546H54.158q-1.718 0-1.202-1.89l34.347-98.918q.515-1.545 1.03-3.52c.45-2.292.68-4.62.687-6.955a1.063 1.063 0 0 1 1.202-1.203h27.306q1.2 0 1.374.86l38.983 109.908q.515 1.72-1.03 1.718h-22.326a1.59 1.59 0 0 1-1.717-1.202zm-33.488-21.638H117.7l-.387-1.277l-.621-2.022l-.443-1.42l-.707-2.236l-1.503-4.707l-1.322-4.173l-3.433-10.87a334 334 0 0 1-2.46-8.138l-.628-2.21l-.734-2.613l-1.12-4.05l-.21-.763h-.171a139 139 0 0 1-3.136 12.23l-2.548 8.196l-1.402 4.528l-1.415 4.584q-.383 1.242-.765 2.456l-.76 2.398l-.756 2.342l-.752 2.284l-.748 2.227q-.372 1.1-.743 2.17zm90.501-46.025a12.46 12.46 0 0 1-9.445-3.778a13.6 13.6 0 0 1-3.607-9.789a12.6 12.6 0 0 1 3.864-9.53a13.27 13.27 0 0 1 9.165-3.697l.366.004q6.183 0 9.704 3.692a13.26 13.26 0 0 1 3.52 9.531a13.4 13.4 0 0 1-3.692 9.79a13.18 13.18 0 0 1-9.508 3.79zm-11.85 92.564V92.603q-.001-1.546 1.374-1.546h21.124q1.373 0 1.374 1.546v82.088q0 1.72-1.374 1.718h-20.952q-1.464 0-1.541-1.542z"/></svg>',
    AdobePS: '<svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 256 250"><rect width="256" height="249.6" fill="#001e36" rx="42.5"/><path fill="#31a8ff" d="M57.644 175.035V65.297q0-1.201 1.031-1.202l1.087-.003l1.858-.02l2.582-.051l8.65-.183l9.275-.172q4.893-.085 9.702-.086q13.05 0 21.982 3.263a38.1 38.1 0 0 1 14.34 8.758a33.6 33.6 0 0 1 7.814 12.108a40.2 40.2 0 0 1 2.405 13.824q0 13.741-6.355 22.669a35.9 35.9 0 0 1-16.6 12.756l-.573.21c-6.973 2.601-14.695 3.541-23.164 3.6l-1.316.004l-1.953-.01l-.985-.014l-1.098-.026l-.662-.026l-.402-.021l-.989-.036l-1.209-.025l-1.82-.013l-.405-.001v34.263a1.366 1.366 0 0 1-1.546 1.546H58.847q-1.204.001-1.203-1.374M80.84 84.703v35.792q2.23.173 4.12.172h5.668a40.3 40.3 0 0 0 11.533-1.727l.746-.233a18.5 18.5 0 0 0 8.759-5.668q3.228-3.807 3.344-10.492l.005-.499c.09-3.322-.774-6.6-2.491-9.445a16 16 0 0 0-7.47-6.097a31.8 31.8 0 0 0-12.537-2.146l-2.178.006l-1.374.012l-1.311.017l-1.85.036l-1.35.038l-.701.026l-.937.044l-.798.049l-.455.036l-.393.038l-.173.02zm123.93 29.284a40.2 40.2 0 0 0-9.458-3.442l-.76-.164a54.3 54.3 0 0 0-11.009-1.363l-.926-.011a22.2 22.2 0 0 0-6.44.773a5.8 5.8 0 0 0-3.35 2.146a5.4 5.4 0 0 0-.858 2.92a4.56 4.56 0 0 0 1.03 2.747a11.7 11.7 0 0 0 3.235 2.637l.372.197a72 72 0 0 0 7.556 3.52a75 75 0 0 1 16.4 7.814a24.94 24.94 0 0 1 8.416 8.845a23.6 23.6 0 0 1 2.49 10.99a24.7 24.7 0 0 1-4.122 14.169a27.1 27.1 0 0 1-11.936 9.53q-7.556 3.32-18.557 3.432l-.762.004a70 70 0 0 1-13.556-1.188l-.956-.186a46.3 46.3 0 0 1-10.905-3.435a2.22 2.22 0 0 1-1.202-1.89v-18.718a1.01 1.01 0 0 1 .43-.945a.83.83 0 0 1 .944.086a45.9 45.9 0 0 0 13.223 5.238a54.5 54.5 0 0 0 12.537 1.632q6.009 0 8.844-1.546a4.86 4.86 0 0 0 2.834-4.465q0-2.23-2.576-4.293q-1.08-.864-3.097-1.88l-.643-.316l-.686-.323l-.36-.164l-.754-.334l-.393-.17l-.82-.344l-.427-.175l-.886-.355l-.46-.18l-.953-.367l-.997-.373a63 63 0 0 1-15.199-7.728a26.2 26.2 0 0 1-8.071-9.016a23.7 23.7 0 0 1-2.49-10.905a24.6 24.6 0 0 1 3.606-12.88c2.7-4.27 6.576-7.67 11.163-9.788q7.555-3.776 18.89-3.779a83.6 83.6 0 0 1 13.224.945a34.7 34.7 0 0 1 9.206 2.49c.473.136.854.485 1.03.945c.117.419.174.852.172 1.288v17.345c.025.41-.172.803-.515 1.03a1.66 1.66 0 0 1-1.478 0"/></svg>',
    Stability: '<svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 256 213"><defs><linearGradient id="logosStabilityAiIcon0" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#9d39ff"/><stop offset="100%" stop-color="#a380ff"/></linearGradient></defs><path fill="url(#logosStabilityAiIcon0)" d="M72.418 212.45c49.478 0 81.658-26.205 81.658-65.626c0-30.572-19.572-49.998-54.569-58.043l-22.469-6.74c-19.71-4.424-31.215-9.738-28.505-23.312c2.255-11.292 9.002-17.667 24.69-17.667c49.872 0 68.35 17.667 68.35 17.667V16.237S123.583 0 73.223 0C25.757 0 0 24.424 0 62.236c0 30.571 17.85 48.35 54.052 56.798q3.802.95 3.885.976q8.26 2.556 22.293 6.755c18.504 4.425 23.262 9.121 23.262 23.2c0 12.872-13.374 20.19-31.074 20.19C21.432 170.154 0 144.36 0 144.36v47.078s13.402 21.01 72.418 21.01"/><path fill="#e80000" d="M225.442 209.266c17.515 0 30.558-12.67 30.558-29.812c0-17.515-12.67-29.813-30.558-29.813c-17.515 0-30.185 12.298-30.185 29.813s12.67 29.812 30.185 29.812"/></svg>',
    Affter: '<svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#00005b" rx="60"/><path fill="#99f" d="M105.157 156.12h-39.68l-8.107 25.173c-.213.96-1.066 1.6-2.026 1.494H35.29c-1.173 0-1.493-.64-1.173-1.92l34.347-98.454c.32-1.066.64-2.026 1.066-3.306c.427-2.24.64-4.587.64-6.934c-.106-.533.32-1.066.853-1.173H98.65c.747 0 1.28.32 1.387.853l38.933 108.8c.32 1.174 0 1.707-1.066 1.707H115.61c-.746.107-1.493-.427-1.706-1.173l-8.747-25.6zm-33.493-21.227h27.093c-.64-2.24-1.494-4.906-2.454-7.68c-.96-2.88-1.92-5.973-2.88-9.173c-1.066-3.307-2.026-6.507-3.093-9.813s-2.026-6.4-2.88-9.494c-.853-2.986-1.6-5.76-2.347-8.32h-.213c-.96 4.587-2.133 9.174-3.627 13.76c-1.6 5.12-3.2 10.454-4.906 15.787c-1.387 5.44-3.094 10.453-4.693 14.933m130.133 11.627h-33.813c.426 3.307 1.493 6.613 3.306 9.493c1.92 2.88 4.587 5.12 7.787 6.4c4.267 1.814 8.96 2.774 13.653 2.667c3.734-.107 7.467-.427 11.094-1.173a40 40 0 0 0 9.493-2.454c.533-.426.853-.213.853.854v16.32c0 .426-.106.853-.213 1.28c-.213.32-.427.533-.747.746a45.6 45.6 0 0 1-10.666 3.2a72 72 0 0 1-15.147 1.28c-8.107 0-14.933-1.28-20.48-3.733c-5.227-2.24-9.813-5.76-13.44-10.133a39.15 39.15 0 0 1-7.36-13.974c-1.493-5.013-2.24-10.24-2.24-15.573c0-5.76.853-11.413 2.667-16.96a43.5 43.5 0 0 1 8-14.613c3.52-4.267 7.893-7.68 12.906-10.134c5.014-2.453 10.987-3.306 17.814-3.306c5.653-.107 11.306.96 16.533 3.306c4.373 1.92 8.213 4.8 11.2 8.534c2.773 3.626 5.013 7.68 6.4 12.16c1.387 4.266 2.027 8.64 2.027 13.013c0 2.56-.107 4.8-.214 6.827c-.213 2.026-.32 3.52-.426 4.48c-.107.746-.747 1.386-1.494 1.386c-.64 0-1.813.107-3.52.214c-1.706.213-3.733.32-6.186.32c-2.454 0-5.014-.427-7.787-.427m-33.813-15.573h22.506c2.774 0 4.8 0 6.08-.107c.854-.107 1.707-.32 2.454-.853v-1.067a12.3 12.3 0 0 0-.64-3.947c-1.92-5.973-7.574-10.026-13.867-9.813a15.02 15.02 0 0 0-14.187 8.107c-1.28 2.453-2.026 5.013-2.346 7.68"/></g></svg>',
    Premiere: '<svg xmlns="http://www.w3.org/2000/svg" width="3.08em" height="3em" viewBox="0 0 256 250"><path fill="#00005b" d="M45.333 0h165.334C235.733 0 256 20.267 256 45.333v158.934c0 25.066-20.267 45.333-45.333 45.333H45.333C20.267 249.6 0 229.333 0 204.267V45.333C0 20.267 20.267 0 45.333 0"/><path fill="#99f" d="M60.8 175.04V65.28c0-.747.32-1.173 1.067-1.173l1.548-.003l1.198-.01l.845-.016l.9-.023l.967-.034l.515-.021c.96-.04 1.935-.065 2.93-.086l3.055-.064q.521-.012 1.051-.028l1.07-.035q1.44-.052 2.952-.08l3.093-.055l2.141-.047l1.095-.032c2.204-.07 4.361-.094 6.502-.102l3.204-.004c8.747 0 16 1.066 21.974 3.306A38.1 38.1 0 0 1 131.2 75.52a34 34 0 0 1 7.787 12.16c1.6 4.48 2.453 9.067 2.453 13.867q0 13.76-6.4 22.72c-4.267 5.973-10.24 10.453-17.173 13.013c-7.012 2.578-14.721 3.56-23.128 3.623H91.69l-1.187-.012l-.761-.018l-.448-.019l-.402-.024l-.359-.03a16 16 0 0 0-.692-.052l-.52-.023l-.57-.015l-.951-.013l-1.853-.004v34.24c.106.747-.427 1.387-1.174 1.494H62.08c-.853 0-1.28-.427-1.28-1.387m23.253-90.347v35.84l1.254.09a43 43 0 0 0 2.906.124h5.654c4.16 0 8.32-.64 12.266-1.92c3.414-.96 6.4-2.987 8.747-5.654c2.24-2.666 3.307-6.293 3.307-10.986a17.56 17.56 0 0 0-2.454-9.494c-1.737-2.657-4.161-4.727-7.082-5.928l-.384-.152c-3.947-1.6-8.214-2.24-12.587-2.133l-2.466.003l-1.159.007l-1.107.015l-1.051.024q-.769.02-1.47.058a37 37 0 0 0-.688-.028l-.639-.014l-.3-.002l-.566.003l-.514.014l-.238.01l-.437.025l-.384.03l-.173.016l-.303.035zm72.32 6.187h18.667c1.007 0 1.825.666 2.182 1.549l.058.158c.32.853.533 1.706.64 2.666c.213 1.067.427 2.24.533 3.307l.09 1.032c.07.881.124 1.818.124 2.808a39.7 39.7 0 0 1 10.82-8.849l.593-.324c4.907-2.774 10.56-4.16 16.213-4.16c.747-.107 1.387.426 1.494 1.173v21.227c0 .853-.534 1.173-1.707 1.173c-3.584-.1-7.26.173-10.77.903l-.75.164q-4.64.96-8.96 2.88c-2.027.96-3.947 2.24-5.44 3.946v54.4c0 1.067-.427 1.494-1.387 1.494H157.76c-.853.106-1.6-.427-1.707-1.28v-59.52c0-2.56 0-5.227-.106-8l-.064-2.08l-.086-4.16q-.024-1.04-.064-2.08c0-2.454-.213-4.8-.426-7.254c-.107-.533.213-1.066.746-1.173c0-.091.157-.104.269-.04z"/></svg>'
  };

  const icons = svgId.split(",").map(id => svgIcons[id.trim()]).filter(svg => svg);
  container.innerHTML = icons.join(""); // Añade todos los SVGs al contenedor
};
// Variables globales para manejar el estado del modal
let isVideoActive = false; // Indica si hay un video activo en el modal
let originalImageSrc = null; // Guarda la fuente original de la imagen del modal
let originalImageAlt = null; // Guarda el texto alternativo original de la imagen del modal

// Eventos de clic a cada elemento del portafolio
portfolioItem.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    // Obtener si el item tiene un video asociado
    const isVideo = this.getAttribute("data-video") === "true";

    if (!originalImageSrc) {
      // Guardar la imagen original del modal solo si no está guardada
      originalImageSrc = modalImgPortfolio.src;
      originalImageAlt = modalImgPortfolio.alt;
    }

    if (isVideo) {
      // Crear el elemento <video> solo para el item específico
      const videoElement = document.createElement("video");
      videoElement.width = 500; // Ajusta el ancho del video según tus necesidades
      videoElement.height = 350; // Ajusta la altura del video según tus necesidades
      videoElement.controls = true;

      // Crear las etiquetas <source> para el video
      const sourceMP4 = document.createElement("source");
      sourceMP4.src = "../assets/video/Web.mp4";
      sourceMP4.type = "video/mp4";

      const sourceOGG = document.createElement("source");
      sourceOGG.src = "../assets/video/Web.ogg";
      sourceOGG.type = "video/ogg";

      // Añadir las fuentes al video
      videoElement.appendChild(sourceMP4);
      videoElement.appendChild(sourceOGG);

      // Mensaje si el navegador no soporta el elemento video
      videoElement.innerHTML += "Your browser does not support the video tag.";

      // Reemplazar la imagen del modal temporalmente con el video
      modalImgPortfolio.style.display = "none"; // Ocultar la imagen original
      modalImgPortfolio.parentNode.appendChild(videoElement); // Añadir el video
      isVideoActive = true; // Marcar que un video está activo
    } else {
      // Restaurar la imagen para otros items
      modalImgPortfolio.style.display = "block";
      modalImgPortfolio.src = this.querySelectorAll("img")[1].src;
      modalImgPortfolio.alt = this.querySelectorAll("img")[1].alt;
      isVideoActive = false; // No hay video activo
    }

    // Actualizar el título, categoría, fecha, y descripción del modal
    const dateValue = this.getAttribute("data-date");
    const svgId = this.getAttribute("data-svg-id");

    modalTitlePortfolio.innerHTML = this.querySelector(".project-title").innerHTML;
    modalCategoryPortfolio.innerHTML = "Categoría actual: " + this.getAttribute("data-category");
    modalTimePortfolio.innerHTML = dateValue;
    modalTimePortfolio.setAttribute("datetime", dateValue);
    modalDescription.innerHTML = this.getAttribute("data-description");

    // Llamando la función addIcons para agregar los SVG correspondientes
    addIcons(svgId, modalIconContainer);

    // Muestra el modal
    portfolioModalFunc();
  });
});

// Función para cerrar el modal y restaurar el estado original
function closeModal() {
  portfolioModalFunc(); // Cierra el modal usando tu lógica existente

  // Restaurar la imagen original si el video estaba activo
  if (isVideoActive) {
    // Eliminar el elemento video
    const videoElement = modalImgPortfolio.parentNode.querySelector("video");
    if (videoElement) {
      videoElement.remove(); // Eliminar el video del DOM
    }
    // Restaurar la imagen original
    modalImgPortfolio.style.display = "block";
    modalImgPortfolio.src = originalImageSrc;
    modalImgPortfolio.alt = originalImageAlt;
    isVideoActive = false; // Resetear el flag del video activo
  }
}

// Cerrar el modal cuando se hace clic en el botón de cerrar o en el overlay
modalCloseBtnPortfolio.addEventListener("click", closeModal);
overlayPortfolio.addEventListener("click", closeModal);


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// Añadiendo los elementos a mostrar
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// Filtro de variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "todos") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// Agregando eventos en todos los elementos del botón de filtro para pantalla grande
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// Variables para la funcion de contacto
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Eventos a todos los campos de entrada del formulario
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// variables de navegación de página
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Agregar evento a todos los enlaces de navegación
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("[data-form]");
  const inputs = form.querySelectorAll("[data-form-input]");
  const submitButton = form.querySelector("[data-form-btn]");

  // Habilitar o deshabilitar el botón de enviar
  function toggleButtonState() {
    const allFieldsFilled = Array.from(inputs).every(input => input.value.trim() !== "");
    submitButton.disabled = !allFieldsFilled;
  }

  // Actualizar el estado del botón cada vez que cambia el valor de un campo
  inputs.forEach(input => {
    input.addEventListener("input", toggleButtonState);
  });

  // Manejar el envío del formulario
  submitButton.addEventListener("click", function() {
    const fullName = form.querySelector("input[name='fullname']").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();

    // Construir el enlace mailto
    const email = "designer.dg23@gmail.com";
    const subject = encodeURIComponent("Mensaje de " + fullName);
    const body = encodeURIComponent(message + "\n\nAtentamente,\n" + fullName);

    // Abrir Gmail con el contenido preestablecido
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    // Opcional: Limpiar el formulario después de abrir el cliente de correo
    form.reset();
    submitButton.disabled = true;
  });
});