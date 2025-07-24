function formatTime(time) {

  return time < 10 ? `0${time}` : time;
}

function startCountdown() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");


  const currentYear = new Date().getFullYear();
  const endDate = new Date(`December 31, ${currentYear} 23:59:59`);

  const interval = setInterval(() => {
    const now = new Date();
    const timeLeft = endDate - now;

    if (timeLeft < 0) {
      clearInterval(interval);
      document.getElementById("countdown").style.display = "none";
      document.querySelector(".title").innerText = "A NEW YEAR HAS BEGUN!";
      document.querySelector(".quote").innerText = "To a heroic new year!";
      return;
    }


    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


    daysEl.innerText = days;
    hoursEl.innerText = formatTime(hours);
    minutesEl.innerText = formatTime(minutes);
    secondsEl.innerText = formatTime(seconds);
  }, 1000);
}


startCountdown();
