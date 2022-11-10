/*Antigua Funcionalidad boton Menu
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
})*/
function menu



//Funcionlidad Boton Ver imagenes
function mostrar() {
    let containerImg = document.getElementById("container-img");
    let containerImgStyle = getComputedStyle(containerImg);
    let cidisplay = containerImgStyle.getPropertyValue("display");
    if (cidisplay == "none") {
        document.getElementById("container-img").style.display = "flex";
    } if (cidisplay == "flex" ) {
        document.getElementById("container-img").style.display = "none";
    }
}