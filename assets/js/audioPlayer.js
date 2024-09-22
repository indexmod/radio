document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.getElementById('audioPlayer');

  // Найдем все карточки программ
  const programCards = document.querySelectorAll('.program-card');

  // Добавим обработчик клика на каждую карточку
  programCards.forEach(card => {
    card.addEventListener('click', function () {
      // Найдем скрытую строку с аудиофайлом
      const audioFile = card.querySelector('.audio-file').innerText;

      // Установим источник аудиоплеера и запустим воспроизведение
      audioPlayer.src = audioFile;
      audioPlayer.play();
    });
  });
});
