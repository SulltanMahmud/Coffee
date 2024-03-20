document.addEventListener("DOMContentLoaded", function () {
  var galleryElements = document.querySelectorAll('[data-fancybox="gallery"]');
  galleryElements.forEach(function (element) {
    element.addEventListener("click", function () {
      var options = {
        loop: true,
        buttons: ["slideShow", "fullScreen", "download", "close"],
      };
      fancybox.getInstance(element).opts = options;
    });
  });
});
