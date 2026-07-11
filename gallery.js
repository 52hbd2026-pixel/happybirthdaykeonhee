' use strict ';

function openModal(imageSrc) {
    const modal = document.getElementById("galleryModal");
    const modalImg = document.getElementById("modalImg");
    
    modalImg.src = imageSrc; 
    modal.style.display = "flex"; 
}


function closeModal() {
    const modal = document.getElementById("galleryModal");
    modal.style.display = "none"; 
}