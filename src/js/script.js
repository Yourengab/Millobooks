function updateTime() {
  const timeText = document.querySelector("#current-time");
  const currentTime = new Date();
  timeText.innerText = currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

updateTime();
setInterval(updateTime, 10);
