document.addEventListener("DOMContentLoaded", function() {
  // Получаем текущий час и минуту
  const currentDate = new Date();
  const currentHour = currentDate.getHours().toString().padStart(2, '0');
  const currentMinute = currentDate.getMinutes();

  // Получаем элементы аудиоплеера и ссылки на аудиофайлы
  const audioPlayer = document.getElementById('audioPlayer');
  const audioLink = document.querySelector(`.audio-link-${currentHour}`);

  if (audioLink) {
    // Устанавливаем ссылку на текущую программу в аудиоплеер
    audioPlayer.src = audioLink.href;

    // Рассчитываем текущее время начала воспроизведения в секундах
    const startTimeInSeconds = currentMinute * 60;
    audioPlayer.currentTime = startTimeInSeconds;

    // Автоматически воспроизводим аудио при загрузке
    audioPlayer.play().catch(error => console.log("Автовоспроизведение заблокировано браузером:", error));
  } else {
    console.log("Аудиофайл для текущего времени не найден.");
  }

  // Функция для переключения воспроизведения/паузы
  function togglePlayPause() {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }

  // Обработчики кликов, тапов и нажатий клавиш
  document.addEventListener("click", togglePlayPause);
  document.addEventListener("touchstart", togglePlayPause);
  document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
      event.preventDefault(); // Предотвращаем прокрутку страницы при нажатии пробела
      togglePlayPause();
    }
  });
});
