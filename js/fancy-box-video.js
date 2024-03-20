document.addEventListener("DOMContentLoaded", function () {
  var fancyboxElements = document.querySelectorAll("[data-fancybox]");
  fancyboxElements.forEach(function (element) {
    element.addEventListener("click", function () {
      var options = {
        youtube: {
          controls: 0,
          showinfo: 0,
        },
      };

      fancybox.getInstance(element).opts = options;
    });
  });
});
