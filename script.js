// Set the date we're counting down to
var countDownDate = new Date("Jun 26, 2022 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="timer"
  document.getElementById("timer-days").innerHTML = days;
  document.getElementById("descroptionTimerDays").innerHTML =  " dani";

  document.getElementById("timer-space").innerHTML = " : ";

  document.getElementById("timer-hours").innerHTML = hours;
  document.getElementById("descroptionTimerHours").innerHTML =  " sati";

  document.getElementById("timer-space2").innerHTML = " : ";

  document.getElementById("timer-minutes").innerHTML = minutes;
  document.getElementById("descroptionTimerMinutes").innerHTML =  " minute";

  document.getElementById("timer-space3").innerHTML = " : ";

  document.getElementById("timer-seconds").innerHTML = seconds;
  document.getElementById("descroptionTimerSeconds").innerHTML =  " sekunde";
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

document.getElementById("prijaviSeNaHackathon").disabled = true;