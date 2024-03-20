window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("header-colour");
  } else {
    navbar.classList.remove("header-colour");
  }
});

// Humburger
document.addEventListener("DOMContentLoaded", function () {
  var hamburgerElements = document.querySelectorAll(".hamburger");
  hamburgerElements.forEach(function (element) {
    element.addEventListener("click", function () {
      this.classList.toggle("is-active");
    });
  });
});
