document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.getElementById('audioPlayer');
  const currentMinute = new Date().getMinutes();
  let isPlaying = false;

  // Функция для запуска аудиофайла с текущей минуты
  function playAudio(audioFile) {
    // Установим источник аудиофайла
    audioPlayer.src = audioFile;

    // Ждем, пока метаданные загрузятся, чтобы установить текущее время
    audioPlayer.addEventListener('loadedmetadata', function () {
      if (audioPlayer.duration > 0) {
        const startTime = currentMinute * 60; // Переводим минуты в секунды
        if (startTime < audioPlayer.duration) {
          audioPlayer.currentTime = startTime;
        }
      }
      audioPlayer.play();
      isPlaying = true;
    });

    // Загружаем и начинаем воспроизведение
    audioPlayer.load();
  }

  // Добавляем обработчик клика или касания (тапа) на любую часть страницы
  function handleInteraction() {
    const firstAudioFile = document.querySelector('.audio-link').href;

    if (firstAudioFile) {
      playAudio(firstAudioFile);
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
          audioPlayer.pause();
          isPlaying = false;
        } else {
          audioPlayer.play();
          isPlaying = true;
        }
      } else {
        // Если аудиофайл ещё не загружен, найдём и запустим
        const firstAudioFile = document.querySelector('.audio-link').href;
        if (firstAudioFile) {
          playAudio(firstAudioFile);
        }
      }
    }
  });
});
