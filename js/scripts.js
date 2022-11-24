let button = document.querySelector(".js-navigation__button");
let whiteDark = document.querySelector(".js-navigation__whiteDark");
let container = document.querySelector(".js-container");
let imageWave = document.querySelector(".js-section__imageWave");
let imageResize = document.querySelector(".section__imageResize");

button.addEventListener("click", () => {
    container.classList.toggle("navigation__opositeTheme");
    whiteDark.innerText = container.classList.contains("navigation__opositeTheme") ? "Wyłącz" : "Włącz";
});

imageWave.addEventListener("click", () => {
    imageWave.classList.toggle("section__imageResize")
});