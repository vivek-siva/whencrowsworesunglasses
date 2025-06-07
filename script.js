// Image Rotation
const images = ["images/book1.png", "images/book2.png"];
let index = 0;
const img = document.getElementById("rotating-image");

setInterval(() => {
  index = (index + 1) % images.length;
  img.src = images[index];
}, 4000);

// Modal
document.getElementById("about-btn").onclick = (e) => {
  e.preventDefault();
  document.getElementById("about-modal").style.display = "flex";
};
document.getElementById("modal-close").onclick = () => {
  document.getElementById("about-modal").style.display = "none";
};