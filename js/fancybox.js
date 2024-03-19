// Initialize Fancybox when the DOM is ready
$(document).ready(function () {
  $('[data-fancybox="gallery"]').fancybox({
     
    loop: true,  
    buttons: [
      "slideShow",  
      "fullScreen",   
      "download",  
      "close",  
    ],
  });
});
