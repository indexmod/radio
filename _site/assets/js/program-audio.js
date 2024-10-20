document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('audio-player');

  // Функция для воспроизведения и паузы аудио
  function toggleAudio() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  // Обработка кликов для настольных устройств
  document.addEventListener('click', function() {
    toggleAudio();
  });

  // Обработка нажатий на сенсорных устройствах
  document.addEventListener('touchstart', function() {
    toggleAudio();
  });

  // Обработка нажатий клавиш
  document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      event.preventDefault(); // Предотвращает прокрутку страницы
      toggleAudio();
    }
  });
});
