function startCountdown(minutes) {
    var timerElement = document.getElementById('timer');
    var returnTimeElement = document.getElementById('return-time');
  
    var now = new Date().getTime();
    var endTime = now + minutes * 60 * 1000;
  
    // Update the countdown every second
    var countdownInterval = setInterval(updateCountdown, 1000);
  
    function updateCountdown() {
      var currentTime = new Date().getTime();
      var remainingTime = endTime - currentTime;
  
      var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
      timerElement.textContent = minutes + "m " + seconds + "s";
  
      // Calculate the expected time of return
      var expectedReturnTime = new Date(endTime);
      var hours = expectedReturnTime.getHours();
      var formattedHours = hours % 12 || 12;
      var amPm = hours >= 12 ? "PM" : "AM";
      var minutes = expectedReturnTime.getMinutes();
      var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  
      returnTimeElement.textContent = "Expected return time: " + formattedHours + ":" + formattedMinutes + " " + amPm;
  
      // If the countdown is finished, clear the interval
      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        timerElement.textContent = "Time's up!";
        returnTimeElement.textContent = "";
      }
    }
  }
  