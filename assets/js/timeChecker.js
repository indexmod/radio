// Функция для проверки текущего времени и перезагрузки страницы в начале часа
function checkTimeAndReload() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds();

  // Обновляем страницу в 00 минут и 00 секунд каждого часа
  if (currentMinute === 0 && currentSecond === 0) {
    location.reload(); // Перезагрузка страницы
  }
}

// Функция для отображения актуального времени на странице
function displayCurrentTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Обновляем отображение времени в элементе с id "currentTime"
  const timeElement = document.getElementById('currentTime');
  if (timeElement) {
    timeElement.textContent = timeString;
  }
}

// Обновляем актуальное время каждую секунду
setInterval(displayCurrentTime, 1000);

// Проверяем время каждую секунду для перезагрузки страницы в начале часа
setInterval(checkTimeAndReload, 1000);
