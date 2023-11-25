const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnDer = document.querySelector("#btn-der");
const btnIzq = document.querySelector("#btn-izq");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function moverImgDer() {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.7s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 700);
}
btnDer.addEventListener('click', function() {
    moverImgDer();
});

function moverImgIzq() {
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.7s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 700);
}
btnIzq.addEventListener('click', function() {
    moverImgIzq();
});

/*setInterval(function() {
    moverImgDer();
    slider.style.transition = "0.7s";
}, 5000, );*/