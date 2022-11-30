{
    const onChangeBackgroundClick = () => {
        const whiteDark = document.querySelector(".js-whiteDark");
        const container = document.querySelector(".js-container");
        container.classList.toggle("navigation__opositeTheme");
        whiteDark.innerText = container.classList.contains("navigation__opositeTheme") ? "Wyłącz" : "Włącz";
    };

    const init = () => {
        const imageWave = document.querySelector(".js-imageWave");
        const button = document.querySelector(".js-button");
        imageWave.addEventListener("click", () => {
            imageWave.classList.toggle("science__imageResize");
        });
        button.addEventListener("click", onChangeBackgroundClick);
    };
    
    init();
};