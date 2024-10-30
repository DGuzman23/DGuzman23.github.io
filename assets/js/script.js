"use strict";

// Variables
const avatarBox = document.getElementById("avatar-box");
const avatarImage = document.getElementById("avatar-image");

// Imágenes que se alternarán
const images = [
  "../assets/images/logo-dg.webp", // Imagen original
  "../assets/images/DG.webp" // Otra imagen o SVG
];

let currentImageIndex = 0;

// Función para alternar la imagen con el giro
function flipImage() {
  // Cambia a la siguiente imagen
  currentImageIndex = (currentImageIndex + 1) % images.length;

  // Añade la clase para el giro
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

// Función para agregar SVGs al modal
const addIcons = (svgId, container) => {
  const svgIcons = {
    AdobeAI: '<svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 256 250"><rect width="256" height="249.6" fill="#300" rx="42.5"/><path fill="#ff9a00" d="M124.054 149.79h-39.67l-8.072 25.073a2.02 2.02 0 0 1-2.061 1.546H54.158q-1.718 0-1.202-1.89l34.347-98.918q.515-1.545 1.03-3.52c.45-2.292.68-4.62.687-6.955a1.063 1.063 0 0 1 1.202-1.203h27.306q1.2 0 1.374.86l38.983 109.908q.515 1.72-1.03 1.718h-22.326a1.59 1.59 0 0 1-1.717-1.202zm-33.488-21.638H117.7l-.387-1.277l-.621-2.022l-.443-1.42l-.707-2.236l-1.503-4.707l-1.322-4.173l-3.433-10.87a334 334 0 0 1-2.46-8.138l-.628-2.21l-.734-2.613l-1.12-4.05l-.21-.763h-.171a139 139 0 0 1-3.136 12.23l-2.548 8.196l-1.402 4.528l-1.415 4.584q-.383 1.242-.765 2.456l-.76 2.398l-.756 2.342l-.752 2.284l-.748 2.227q-.372 1.1-.743 2.17zm90.501-46.025a12.46 12.46 0 0 1-9.445-3.778a13.6 13.6 0 0 1-3.607-9.789a12.6 12.6 0 0 1 3.864-9.53a13.27 13.27 0 0 1 9.165-3.697l.366.004q6.183 0 9.704 3.692a13.26 13.26 0 0 1 3.52 9.531a13.4 13.4 0 0 1-3.692 9.79a13.18 13.18 0 0 1-9.508 3.79zm-11.85 92.564V92.603q-.001-1.546 1.374-1.546h21.124q1.373 0 1.374 1.546v82.088q0 1.72-1.374 1.718h-20.952q-1.464 0-1.541-1.542z"/></svg>',
    AdobePS: '<svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 256 250"><rect width="256" height="249.6" fill="#001e36" rx="42.5"/><path fill="#31a8ff" d="M57.644 175.035V65.297q0-1.201 1.031-1.202l1.087-.003l1.858-.02l2.582-.051l8.65-.183l9.275-.172q4.893-.085 9.702-.086q13.05 0 21.982 3.263a38.1 38.1 0 0 1 14.34 8.758a33.6 33.6 0 0 1 7.814 12.108a40.2 40.2 0 0 1 2.405 13.824q0 13.741-6.355 22.669a35.9 35.9 0 0 1-16.6 12.756l-.573.21c-6.973 2.601-14.695 3.541-23.164 3.6l-1.316.004l-1.953-.01l-.985-.014l-1.098-.026l-.662-.026l-.402-.021l-.989-.036l-1.209-.025l-1.82-.013l-.405-.001v34.263a1.366 1.366 0 0 1-1.546 1.546H58.847q-1.204.001-1.203-1.374M80.84 84.703v35.792q2.23.173 4.12.172h5.668a40.3 40.3 0 0 0 11.533-1.727l.746-.233a18.5 18.5 0 0 0 8.759-5.668q3.228-3.807 3.344-10.492l.005-.499c.09-3.322-.774-6.6-2.491-9.445a16 16 0 0 0-7.47-6.097a31.8 31.8 0 0 0-12.537-2.146l-2.178.006l-1.374.012l-1.311.017l-1.85.036l-1.35.038l-.701.026l-.937.044l-.798.049l-.455.036l-.393.038l-.173.02zm123.93 29.284a40.2 40.2 0 0 0-9.458-3.442l-.76-.164a54.3 54.3 0 0 0-11.009-1.363l-.926-.011a22.2 22.2 0 0 0-6.44.773a5.8 5.8 0 0 0-3.35 2.146a5.4 5.4 0 0 0-.858 2.92a4.56 4.56 0 0 0 1.03 2.747a11.7 11.7 0 0 0 3.235 2.637l.372.197a72 72 0 0 0 7.556 3.52a75 75 0 0 1 16.4 7.814a24.94 24.94 0 0 1 8.416 8.845a23.6 23.6 0 0 1 2.49 10.99a24.7 24.7 0 0 1-4.122 14.169a27.1 27.1 0 0 1-11.936 9.53q-7.556 3.32-18.557 3.432l-.762.004a70 70 0 0 1-13.556-1.188l-.956-.186a46.3 46.3 0 0 1-10.905-3.435a2.22 2.22 0 0 1-1.202-1.89v-18.718a1.01 1.01 0 0 1 .43-.945a.83.83 0 0 1 .944.086a45.9 45.9 0 0 0 13.223 5.238a54.5 54.5 0 0 0 12.537 1.632q6.009 0 8.844-1.546a4.86 4.86 0 0 0 2.834-4.465q0-2.23-2.576-4.293q-1.08-.864-3.097-1.88l-.643-.316l-.686-.323l-.36-.164l-.754-.334l-.393-.17l-.82-.344l-.427-.175l-.886-.355l-.46-.18l-.953-.367l-.997-.373a63 63 0 0 1-15.199-7.728a26.2 26.2 0 0 1-8.071-9.016a23.7 23.7 0 0 1-2.49-10.905a24.6 24.6 0 0 1 3.606-12.88c2.7-4.27 6.576-7.67 11.163-9.788q7.555-3.776 18.89-3.779a83.6 83.6 0 0 1 13.224.945a34.7 34.7 0 0 1 9.206 2.49c.473.136.854.485 1.03.945c.117.419.174.852.172 1.288v17.345c.025.41-.172.803-.515 1.03a1.66 1.66 0 0 1-1.478 0"/></svg>',
    Stability: '<svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 256 213"><defs><linearGradient id="logosStabilityAiIcon0" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#9d39ff"/><stop offset="100%" stop-color="#a380ff"/></linearGradient></defs><path fill="url(#logosStabilityAiIcon0)" d="M72.418 212.45c49.478 0 81.658-26.205 81.658-65.626c0-30.572-19.572-49.998-54.569-58.043l-22.469-6.74c-19.71-4.424-31.215-9.738-28.505-23.312c2.255-11.292 9.002-17.667 24.69-17.667c49.872 0 68.35 17.667 68.35 17.667V16.237S123.583 0 73.223 0C25.757 0 0 24.424 0 62.236c0 30.571 17.85 48.35 54.052 56.798q3.802.95 3.885.976q8.26 2.556 22.293 6.755c18.504 4.425 23.262 9.121 23.262 23.2c0 12.872-13.374 20.19-31.074 20.19C21.432 170.154 0 144.36 0 144.36v47.078s13.402 21.01 72.418 21.01"/><path fill="#e80000" d="M225.442 209.266c17.515 0 30.558-12.67 30.558-29.812c0-17.515-12.67-29.813-30.558-29.813c-17.515 0-30.185 12.298-30.185 29.813s12.67 29.812 30.185 29.812"/></svg>'
    
  };

  const icons = svgId.split(",").map(id => svgIcons[id.trim()]).filter(svg => svg);
  container.innerHTML = icons.join(""); // Añade todos los SVGs al contenedor
};

// Eventos de clic a cada elemento del portafolio
portfolioItem.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    // Actualizar la imagen, título, categoría, y SVG del modal
    const mainImage = this.querySelectorAll("img")[1];
    const dateValue = this.getAttribute("data-date");
    const svgId = this.getAttribute("data-svg-id"); // Obtener el ID de los SVG

    modalImgPortfolio.src = mainImage.src;
    modalImgPortfolio.alt = mainImage.alt;
    modalTitlePortfolio.innerHTML =
      this.querySelector(".project-title").innerHTML;
    modalCategoryPortfolio.innerHTML =
      "Categoría actual: " + this.getAttribute("data-category");
    modalTimePortfolio.innerHTML = dateValue;
    modalTimePortfolio.setAttribute("datetime", dateValue);
    modalDescription.innerHTML = this.getAttribute("data-description");

    addIcons(svgId, modalIconContainer); // Llamando la función addIcons para agregar los SVG correspondientes

    // Muestra el modal
    portfolioModalFunc();
  });
});

// Cerrar el modal cuando se hace clic en el botón de cerrar o en el overlay
modalCloseBtnPortfolio.addEventListener("click", portfolioModalFunc);
overlayPortfolio.addEventListener("click", portfolioModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

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
};

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
