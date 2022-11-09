//Funcionalidad boton Menu
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
})

//Funcionlidad Boton Ver imagenes
const buttonRooms = document.querySelector(".button-rooms");
const containerImg  = document.querySelector(".container-img");

buttonRooms.addEventListener("click", () => {
    containerImg.classList.toggle("container-img_visible");
})