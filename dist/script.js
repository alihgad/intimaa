document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});

const navLinks = document.querySelectorAll("nav .lg\\:flex a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navLinks.forEach((link) => {
      link.classList.add("text-blue-800");
    });
  } else {
    navLinks.forEach((link) => {
      link.classList.remove("text-blue-800");
    });
  }
});

// Declare currentSlide once at the top
let currentSlide = 0;
const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".dot");

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update active dot
  dots.forEach((dot, index) => {
    dot.classList.toggle("bg-gray-700", index === currentSlide);
    dot.classList.toggle("bg-gray-400", index !== currentSlide);
  });
}

function nextSlide() {
  const totalSlides = slider.children.length;
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  const totalSlides = slider.children.length;
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Initialize on page load
updateSlider();
