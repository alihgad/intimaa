

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });







  const nav = document.querySelector("nav"); // Select the nav element
  // const navLinks = document.querySelectorAll("nav .lg\\:flex a"); // Select nav links

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      nav.classList.add("bg-white", "rounded-lg"); // Add background and border radius
    } else {
      nav.classList.remove("bg-white", "rounded-lg"); // Remove on scroll up
    }
  });


  let moreButton = document.querySelector(".more-button");
  let target = document.querySelector(".target");
  let targetData = target.innerHTML;

  moreButton.addEventListener("click", async function () {
    // loader.classList.toggle("hidden"); 
    moreButton.innerHTML = `<div class="fas fa-spinner fa-pulse text-white "></div>`

    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    for (let i = 0; i < 10; i++) {
      target.innerHTML += targetData;
    }

    moreButton.innerHTML = `المزيد`;



  })


  let jobPopUp = document.getElementById("job-popup");
  let openJobPopUp = document.getElementById("open-job-popup");
  let closeJobPopUp = document.getElementById("close-job-popup");

  openJobPopUp.addEventListener("click", function () {
    console.log("Open job popup clicked");

    jobPopUp.classList.remove("hidden");
    jobPopUp.classList.add("flex");
  });

  closeJobPopUp.addEventListener("click", function () {
    jobPopUp.classList.add("hidden");
    jobPopUp.classList.remove("flex");
  });




});