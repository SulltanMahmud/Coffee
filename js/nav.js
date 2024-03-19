window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add('header-colour');
  } else {
    navbar.classList.remove('header-colour');
  }
});
