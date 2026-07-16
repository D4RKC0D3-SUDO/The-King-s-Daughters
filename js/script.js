// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll(".gallery-item img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

closeBtn.onclick = function() {
  lightbox.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
};
