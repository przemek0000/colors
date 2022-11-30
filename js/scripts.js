let button = document.querySelector(".js-button");
let whiteDark = document.querySelector(".js-whiteDark");
let container = document.querySelector(".js-container");
let imageWave = document.querySelector(".js-imageWave");
let imageResize = document.querySelector(".section__imageResize");

button.addEventListener("click", () => {
    container.classList.toggle("navigation__opositeTheme");
    whiteDark.innerText = container.classList.contains("navigation__opositeTheme") ? "Wyłącz" : "Włącz";
});

imageWave.addEventListener("click", () => {
    imageWave.classList.toggle("section__imageResize")
});