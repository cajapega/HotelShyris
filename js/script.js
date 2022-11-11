/* --1--
Antigua Funcionalidad boton Menu
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
})*/

/* --2--
function mostrarMenu() {
    let navMenu = document.getElementById("nav-menu");
    let navMenuStyle = getComputedStyle(navMenu);
    let nmdisplay =navMenuStyle.getPropertyValue("display");

    if(nmdisplay == "none") {
        document.getElementById("nav-menu").style.display = "flex";
    } if (nmdisplay == "flex" ) {
        document.getElementById("nav-menu").style.display = "none";
    }
}*/

//https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
//Aqui hago lo mismo de arriba pero escuchando 1 evento sin usar onclick
const navToggle = document.querySelector(".nav-toggle") //se puede usar tambien  getEle..ById
let eventNavToggle = navToggle.addEventListener("click", mostrarMenu, true);
function mostrarMenu() {
    let navMenu = document.getElementById("nav-menu");
    let navMenuStyle = getComputedStyle(navMenu);
    let nmdisplay =navMenuStyle.getPropertyValue("display");

    if(nmdisplay == "none") {
        document.getElementById("nav-menu").style.display = "flex";
    } if (nmdisplay == "flex" ) {
        document.getElementById("nav-menu").style.display = "none";
    }
}

//Funcionlidad Boton Ver imagenes
function mostrar() {
    let containerImg = document.getElementById("container-img");
    let containerImgStyle = getComputedStyle(containerImg);
    let cidisplay = containerImgStyle.getPropertyValue("display");
    /*if (cidisplay == "none") {
        document.getElementById("container-img").style.display = "flex";
    } if (cidisplay == "flex" ) {
        document.getElementById("container-img").style.display = "none";
    }*/
    (cidisplay == "none") ? (containerImg.style.display = "flex") : containerImg.style.display = "none";
}