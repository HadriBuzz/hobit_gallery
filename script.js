// Ouvrir la lightbox avec l'image sélectionnée
function openLightbox(image) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightbox.style.display = "flex";
    lightboxImg.src = image.src;
}

// Fermer la lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}
