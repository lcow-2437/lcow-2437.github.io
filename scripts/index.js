const hamburger = document.querySelector(".hamburger-icon");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("nav-links-opened");
  if (navLinks.classList.contains("nav-links-opened")) {
    hamburger.innerHTML = "&times;";
  } else {
    hamburger.innerHTML = "&#9776;";
  }
});
