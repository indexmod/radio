document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.getElementById('audioPlayer');
  const programCards = document.querySelectorAll('.program-card');
  const currentMinute = new Date().getMinutes();

  // Функция для запуска аудиофайла с текущей минуты
  function playAudio(audioFile) {
    // Установим источник аудиофайла
    audioPlayer.src = audioFile;

    // Ждем, пока метаданные загрузятся, чтобы установить текущее время
    audioPlayer.addEventListener('loadedmetadata', function () {
      // Если длительность известна, устанавливаем текущее время для воспроизведения с нужной минуты
      if (audioPlayer.duration > 0) {
        const startTime = currentMinute * 60; // Переводим минуты в секунды
        if (startTime < audioPlayer.duration) {
          audioPlayer.currentTime = startTime;
        }
      }
      audioPlayer.play();
    });

    // Загружаем и начинаем воспроизведение
    audioPlayer.load();
  }

  // Добавляем обработчик клика на любую часть страницы
  document.body.addEventListener('click', function () {
    // Найдем первый аудиофайл (первую скрытую ссылку)
    const firstAudioFile = document.querySelector('.audio-file').href;

    if (firstAudioFile) {
      playAudio(firstAudioFile);
    }
  });
});
