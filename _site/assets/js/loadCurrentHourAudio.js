document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.getElementById('audioPlayer');
  const audioSource = document.getElementById('audioSource');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const progressBar = document.getElementById('progress-bar');
  const currentTimeDisplay = document.getElementById('current-time');
  const durationDisplay = document.getElementById('duration');

  // Получение текущего часа и минуты
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();

  // Поиск аудиофайла текущего часа
  const audioLink = document.querySelector(`.audio-link-${currentHour}`);

  if (audioLink) {
    audioSource.src = audioLink.href;
    audioPlayer.load();

    // Обновление отображения времени после загрузки метаданных
    audioPlayer.addEventListener('loadedmetadata', function () {
      if (audioPlayer.duration) {
        durationDisplay.textContent = formatTime(audioPlayer.duration);

        // Устанавливаем текущее время на количество секунд, прошедших с начала текущего часа
        const secondsFromHourStart = currentMinute * 60;
        audioPlayer.currentTime = Math.min(secondsFromHourStart, audioPlayer.duration); // Убедимся, что текущее время не превышает продолжительность аудио
      } else {
        durationDisplay.textContent = '0:00';
      }
    });
  } else {
    console.error("Аудиофайл для текущего часа не найден.");
    durationDisplay.textContent = '0:00';
  }

  // Обработчик кнопки воспроизведения/паузы
  playPauseBtn.addEventListener('click', function () {
    if (audioPlayer.paused) {
      audioPlayer.play().then(() => {
        playPauseBtn.textContent = 'Пауза';
      }).catch(error => {
        console.error("Ошибка воспроизведения:", error);
      });
    } else {
      audioPlayer.pause();
      playPauseBtn.textContent = 'Звук';
    }
  });

  // Обновление прогресса аудио
  audioPlayer.addEventListener('timeupdate', function () {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = progress + '%';
    currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
  });

  // Форматирование времени
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }
});
