document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.getElementById('audioPlayer');
  let isPlaying = false;

  // Функция для запуска аудиофайла с текущей минуты
  function playAudio(audioFile) {
    audioPlayer.src = audioFile;

    // Ждем, пока метаданные загрузятся, чтобы установить текущее время
    audioPlayer.addEventListener('loadedmetadata', function () {
      const currentMinute = new Date().getMinutes(); // Получаем текущую минуту
      const startTime = currentMinute * 60; // Переводим минуты в секунды

      // Проверяем, что продолжительность аудиофайла больше 0
      if (audioPlayer.duration > 0 && startTime < audioPlayer.duration) {
        audioPlayer.currentTime = startTime; // Устанавливаем текущее время
      }
      audioPlayer.play(); // Запускаем воспроизведение
      isPlaying = true;
    });

    // Загружаем и начинаем воспроизведение
    audioPlayer.load();
  }

  // Функция для получения аудиофайла по текущему часу
  function getAudioFileForCurrentHour() {
    const currentHour = new Date().getHours(); // Получаем текущий час (0-23)

    // Ищем соответствующую ссылку по ID или классу, основанную на текущем часе
    const audioLink = document.querySelector(`.audio-link-${currentHour}`); // Например, class="audio-link-0", "audio-link-1", и т.д.

    return audioLink ? audioLink.href : null;
  }

  // Добавляем обработчик клика или касания на любую часть страницы
  function handleInteraction() {
    const audioFile = getAudioFileForCurrentHour(); // Получаем файл по текущему часу

    if (audioFile) {
      playAudio(audioFile);
    }
  }

  // Добавляем обработчик клика и касания
  document.body.addEventListener('click', handleInteraction);
  document.body.addEventListener('touchstart', handleInteraction);

  // Добавляем обработчик нажатия пробела
  document.body.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
      event.preventDefault(); // Отключаем прокрутку при нажатии пробела
      if (audioPlayer.src && audioPlayer.src !== "") {
        if (isPlaying) {
          audioPlayer.pause(); // Ставим на паузу
          isPlaying = false;
        } else {
          audioPlayer.play(); // Запускаем воспроизведение
          isPlaying = true;
        }
      } else {
        const audioFile = getAudioFileForCurrentHour();
        if (audioFile) {
          playAudio(audioFile);
        }
      }
    }
  });
});
