// Improved Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];
const galleryImages = document.querySelectorAll(".gallery-item img");

let currentIndex = -1;

// Open lightbox
function openLightbox(index) {
  const img = galleryImages[index];
  lightbox.style.display = "block";
  lightbox.classList.add("fade-in");
  lightboxImg.src = img.src;
  captionText.innerHTML = img.alt;
  currentIndex = index;
}

// Close lightbox
function closeLightbox() {
  lightbox.classList.remove("fade-in");
  lightbox.style.display = "none";
  currentIndex = -1;
}

// Next / Previous navigation
function showNext() {
  if (currentIndex < galleryImages.length - 1) {
    openLightbox(currentIndex + 1);
  }
}
function showPrev() {
  if (currentIndex > 0) {
    openLightbox(currentIndex - 1);
  }
}

// Event listeners for gallery images
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});

// Close button
closeBtn.onclick = closeLightbox;

// Close when clicking outside image
window.onclick = function(event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
};

// Keyboard navigation
document.addEventListener("keydown", (event) => {
  if (lightbox.style.display === "block") {
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") showNext();
    if (event.key === "ArrowLeft") showPrev();
  }
});
