document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.getElementById('audioPlayer');
  let isPlaying = false;

  // Функция для запуска аудиофайла с текущей минуты
  function playAudio(audioFile) {
    // Установим источник аудиофайла
    audioPlayer.src = audioFile;

    // Ждем, пока метаданные загрузятся, чтобы установить текущее время
    audioPlayer.addEventListener('loadedmetadata', function () {
      const currentMinute = new Date().getMinutes(); // Получаем текущую минуту
      const startTime = currentMinute * 60; // Переводим минуты в секунды

      // Проверяем, что продолжительность аудиофайла больше 0
      if (audioPlayer.duration > 0) {
        if (startTime < audioPlayer.duration) {
          audioPlayer.currentTime = startTime; // Устанавливаем текущее время
        }
      }
      audioPlayer.play(); // Запускаем воспроизведение
      isPlaying = true;
    });

    // Загружаем и начинаем воспроизведение
    audioPlayer.load();
  }

  // Добавляем обработчик клика или касания на любую часть страницы
  function handleInteraction() {
    const firstAudioFile = document.querySelector('.audio-link').href; // Измените класс на тот, который соответствует вашей разметке

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
          audioPlayer.pause(); // Ставим на паузу
          isPlaying = false;
        } else {
          audioPlayer.play(); // Запускаем воспроизведение
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
