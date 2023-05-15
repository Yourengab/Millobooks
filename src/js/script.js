function updateTime() {
  const timeText = document.querySelector("#current-time");
  const currentTime = new Date();
  timeText.innerText = currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

updateTime();
setInterval(updateTime, 10);

$(".slider").slick({
  dots: true,
  speed: 300,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
