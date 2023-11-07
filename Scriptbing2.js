const carrusel = document.querySelector(".carrusel");
const imagenes = document.querySelectorAll(".carrusel img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

function mostrarImagen(index) {
    const imageWidth = imagenes[0].clientWidth; // Ancho de una imagen
    carrusel.style.transition = "transform 0.5s"; // Agrega una transición suave
    carrusel.style.transform = `translateX(-${index * imageWidth}px)`;
}

function siguienteImagen() {
    if (currentIndex < imagenes.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Vuelve a la primera imagen al llegar al final
    }
    mostrarImagen(currentIndex);
}

function imagenAnterior() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = imagenes.length - 1; // Salta a la última imagen al llegar al principio
    }
    mostrarImagen(currentIndex);
}

nextBtn.addEventListener("click", siguienteImagen);
prevBtn.addEventListener("click", imagenAnterior);

setInterval(siguienteImagen, 3000); // Cambiar de imagen automáticamente cada 3 segundos
