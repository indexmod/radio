let programs = [];

// Функция для загрузки и анализа плейлиста
function loadPlaylist() {
  fetch('assets/playlist.m3u')
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n');
      programs = lines
        .filter(line => line && !line.startsWith('#'))
        .map(line => line.trim());
    })
    .catch(error => console.error('Ошибка загрузки плейлиста:', error));
}

// Функция для получения текущего часа
function getCurrentHour() {
  const now = new Date();
  return now.getHours();
}

// Функция для запуска программы
function startProgram() {
  const audioPlayer = document.getElementById('audioPlayer');
  const currentHour = getCurrentHour();

  if (programs.length === 0) {
    console.error('Плейлист не загружен');
    return;
  }

  const programIndex = currentHour * 2; // Индекс для программы
  const jingleIndex = programIndex + 1; // Индекс для джингла

  if (programs[programIndex] && programs[jingleIndex]) {
    // Запускаем программу
    audioPlayer.src = programs[programIndex];
    audioPlayer.play();

    // Воспроизведение джингла через 59 минут и 45 секунд
    setTimeout(() => {
      if (programs[jingleIndex]) {
        audioPlayer.src = programs[jingleIndex];
        audioPlayer.play();
      }
    }, (59 * 60 + 45) * 1000); // 59 минут 45 секунд

    // Скрываем кнопку запуска
    document.getElementById('startButton').style.display = 'none';

    // Показ содержимого schedule.html
    document.getElementById('scheduleContainer').style.display = 'block';
  } else {
    console.error('Файлы для текущего часа не найдены');
  }
}

// Функция для выделения текущего часа в таблице
function highlightCurrentHour() {
  const currentHour = getCurrentHour();

  // Формируем id для ячейки вида "left-cell-XX", где XX - текущий час
  const currentCell = document.getElementById("left-cell-" + (currentHour < 10 ? "0" + currentHour : currentHour));

  // Удаляем предыдущий кружок, если он существует
  const previousCircle = document.querySelector('.blinking-circle');
  if (previousCircle) {
    previousCircle.remove();
  }

  // Добавляем мигающий кружок в текущую ячейку
  if (currentCell) {
    const circle = document.createElement("div");
    circle.classList.add("blinking-circle");
    currentCell.appendChild(circle);
  }
}

// Общий обработчик загрузки страницы
window.onload = function() {
  loadPlaylist(); // Загрузка плейлиста
  highlightCurrentHour(); // Выделение текущего часа

  // Обновляем выделение текущего часа каждую минуту
  setInterval(highlightCurrentHour, 60000); // 60000 миллисекунд = 1 минута

  // Назначение обработчика для кнопки
  document.getElementById('startButton').addEventListener('click', startProgram);
};
