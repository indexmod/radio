document.addEventListener('DOMContentLoaded', function () {
  const timeDisplay = document.getElementById('timeDisplay');

  function updateTime() {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString();
  }

  setInterval(updateTime, 1000);
  updateTime(); // начальное обновление
});
