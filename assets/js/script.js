'use strict';

// Variables
const avatarBox = document.getElementById('avatar-box');
const avatarImage = document.getElementById('avatar-image');

// Imágenes que se alternarán
const images = [
  '../assets/images/DG.png', // Imagen original
  '../assets/images/logo-dg.svg' // Otra imagen o SVG
];

let currentImageIndex = 0;

// Función para alternar la imagen con el giro
function flipImage() {
  // Cambia a la siguiente imagen
  currentImageIndex = (currentImageIndex + 1) % images.length;

  // Añade la clase para el giro
  avatarBox.classList.add('flip');

  // Espera hasta que la animación termine (1s) y luego cambia la imagen
  setTimeout(() => {
    avatarImage.src = images[currentImageIndex];
    avatarBox.classList.remove('flip');
  }, 500); // Coincide con la duración de la animación en CSS (1s)
}

// Ejecuta el giro y cambio de imagen cada 5 segundos
setInterval(flipImage, 5000);


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// Variables para la sección de portafolio
const portfolioItem = document.querySelectorAll(".project-item");
const modalContainerPortfolio = document.querySelector("[data-modal-container-portfolio]");
const modalCloseBtnPortfolio = document.querySelector("[data-modal-close-btn-portfolio]");
const overlayPortfolio = document.querySelector("[data-overlay-portfolio]");

// Variables para el contenido del modal
const modalImgPortfolio = document.querySelector("[data-modal-img-portfolio]");
const modalTitlePortfolio = document.querySelector("[data-modal-title-portfolio]");
const modalCategoryPortfolio = document.querySelector("[data-modal-category-portfolio]");

// Función para alternar el modal
const portfolioModalFunc = function () {
  modalContainerPortfolio.classList.toggle("active");
  overlayPortfolio.classList.toggle("active");
};

// Agregar eventos de clic a cada elemento del portafolio
for (let i = 0; i < portfolioItem.length; i++) {

  portfolioItem[i].addEventListener("click", function (event) {
    event.preventDefault(); // Evita la navegación predeterminada del enlace

    // Asigna la imagen principal del portafolio (segundo <img> dentro de .project-img) al modal
    const mainImage = this.querySelectorAll("img")[1]; // Selecciona la segunda imagen (logo-1.png)
    modalImgPortfolio.src = mainImage.src; // Toma la src de la imagen principal
    modalImgPortfolio.alt = mainImage.alt; // Toma el alt de la imagen principal
    modalTitlePortfolio.innerHTML = this.querySelector(".project-title").innerHTML; // Toma el título del portafolio

    // Muestra el modal
    portfolioModalFunc();
  });

}

// Cerrar el modal cuando se hace clic en el botón de cerrar o en el overlay
modalCloseBtnPortfolio.addEventListener("click", portfolioModalFunc);
overlayPortfolio.addEventListener("click", portfolioModalFunc);




// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
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

}

// add event in all filter button items for large screen
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



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
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



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
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

