document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('audio-player');

  // Обработка кликов для настольных устройств
  document.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
    }
  });

  // Обработка нажатий на сенсорных устройствах
  document.addEventListener('touchstart', function() {
    if (audio.paused) {
      audio.play();
    }
  });
});
