// toggle button navbar

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});

// change top header when scroll

const topBar = document.querySelector(".bg-transparent.mt-2");
const topBarText = topBar.querySelectorAll("span");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    topBarText.forEach((el) => {
      el.classList.remove(
        "text-white",
        "text-white/80",
        "text-white/60",
        "text-white/40",
        "text-gray-300"
      );
      el.classList.add("text-blue-800");
    });
  } else {
    topBarText.forEach((el) => {
      el.classList.remove("text-blue-800");
      if (el.textContent === "|") {
        el.classList.add("text-white/40");
      } else if (
        el.textContent.includes("+966") ||
        el.textContent.includes("تواصل")
      ) {
        el.classList.add("text-gray-300");
      } else if (el.textContent === "EN") {
        el.classList.add("text-white/60");
      } else {
        el.classList.add("text-white/80");
      }
    });
  }
});

// change colors on scroll navbar

const nav = document.querySelector("nav"); // Select the nav element
const navLinks = document.querySelectorAll("nav .lg\\:flex a"); // Select nav links

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("bg-blue-800", "rounded-lg"); // Add background and border radius
  } else {
    nav.classList.remove("bg-blue-800", "rounded-lg"); // Remove on scroll up
  }
});

//landing page slider
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
