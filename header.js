const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
navMenu.classList.toggle("nav-menu_visible");

if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
} else {
    navToggle.setAttribute("aria-label", "Abrir menú");
}
});
//Revober clases 
setTimeout(function(){
    document.querySelector("h1").classList.remove("animate__animated", "animate__bounceIn");
}, 1000);
setTimeout(function(){
    document.querySelector("main").classList.remove("animate__animated", "animate__fadeIn");
}, 1000);
setTimeout(function(){
    document.getElementById("text-screen1").classList.remove("animate__animated", "animate__bounceOut")
}, 1000);