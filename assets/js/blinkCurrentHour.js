document.addEventListener('DOMContentLoaded', function () {
  const blinkingCircle = document.querySelector('.blinking-circle');

  setInterval(function () {
    blinkingCircle.classList.toggle('blinking');
  }, 1000); // мигает каждые 1000 мс (1 секунда)
});
