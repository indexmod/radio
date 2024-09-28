document.addEventListener("DOMContentLoaded", function() {
  // Получаем текущий час
  const currentDate = new Date();
  const currentHour = currentDate.getHours().toString().padStart(2, '0');

  // Получаем элементы аудиоплеера и ссылки на аудиофайлы
  const audioPlayer = document.getElementById('audioPlayer');
  const audioLink = document.querySelector(`.audio-link-${currentHour}`);

  if (audioLink) {
    // Устанавливаем ссылку на текущую программу в аудиоплеер
    audioPlayer.src = audioLink.href;
    audioPlayer.play();
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

  // Обработчик кликов и тапов
  document.addEventListener("click", togglePlayPause);
  document.addEventListener("touchstart", togglePlayPause);

  // Обработчик нажатий клавиш
  document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
      event.preventDefault(); // Предотвращаем прокрутку страницы при нажатии пробела
      togglePlayPause();
    }
  });
});
