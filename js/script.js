// Seleziono gli elementi su cui devo lavorare
const slider = document.querySelector(`.image-slider`);
const arrowUp = document.querySelector(`.arrow-up`);
const arrowDown = document.querySelector(`.arrow-down`);

// Creo l'array con le immagini
const images = ["../img/01.jpg", "../img/02.jpg", "../img/03.jpg", "../img/04.jpg", "../img/05.jpg"];
console.log(images);

// Quando l'utente clicca sulla freccia in alto, faccio vedere l'immagine che segue
let currentImage = 0;

function slide(currentImage){
    slider.style.backgroundImage = `url(..img/${images[currentImage]})`
}

arrowUp.addEventListener(`click`, () => {
    currentImage++;

    if (currentImage > images.length - 1) {
        currentImage = 0;
        console.log(currentImage);
    }

    slide(currentImage);
});

arrowDown.addEventListener(`click`, () =>{
    currentImage--;

    if(currentImage < 0) {
       currentImage = images.length - 1;
       console.log(currentImage);
    }

    slide(currentImage);
});