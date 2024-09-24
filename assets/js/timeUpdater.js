// Функция для обновления страницы в начале нового часа
function updatePageAtNewHour() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds();

  // Проверяем, если это начало нового часа (00 минут и 00 секунд)
  if (currentMinute === 0 && currentSecond === 0) {
    location.reload(); // Перезагружаем страницу
  }
}

// Функция для динамического отображения текущего времени
function updateCurrentTimeDisplay() {
  const currentTime = new Date();
  const currentHour = String(currentTime.getHours()).padStart(2, '0');
  const currentMinute = String(currentTime.getMinutes()).padStart(2, '0');

  // Отображаем текущее время на странице (если необходимо)
  document.querySelectorAll('.program_time').forEach(element => {
    element.textContent = currentHour + ':' + currentMinute;
  });
}

// Устанавливаем интервал для проверки времени и обновления страницы каждую секунду
setInterval(() => {
  updatePageAtNewHour();
  updateCurrentTimeDisplay();
}, 1000); // Проверяем каждую секунду
