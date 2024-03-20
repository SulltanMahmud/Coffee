function startCounter(elementId, finalValue, duration) {
  var start = 0;
  var totalChange = finalValue - start;
  var increment = totalChange / (duration * 60); // Calculate increment based on total change and total duration
  var element = document.getElementById(elementId);
  var interval = setInterval(function () {
    start += increment;
    element.textContent = Math.floor(start);
    if (start >= finalValue) {
      clearInterval(interval);
      element.textContent = finalValue;
    }
  }, 1000 / 60); // Update every frame (60 frames per second)
}

startCounter("happy-client", 2536, 5); // Adjust duration as needed
startCounter("total-project", 7562, 5);
startCounter("cups-coffee", 2013, 5);
startCounter("total-submitted", 10536, 5);
