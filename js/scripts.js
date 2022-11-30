let button = document.querySelector(".js-button");
let whiteDark = document.querySelector(".js-whiteDark");
let container = document.querySelector(".js-container");
let imageWave = document.querySelector(".js-imageWave");

button.addEventListener("click", () => {
    container.classList.toggle("navigation__opositeTheme");
    whiteDark.innerText = container.classList.contains("navigation__opositeTheme") ? "Wyłącz" : "Włącz";
});

imageWave.addEventListener("click", () => {
    imageWave.classList.toggle("science__imageResize")
});