// Получаем элемент, в который будем выводить текущее время
const timeDisplay = document.getElementById('timeDisplay'); // Изменение здесь

// Функция для обновления времени
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Обновляем время каждую секунду
setInterval(updateTime, 1000);

// Вызываем функцию один раз при загрузке страницы
updateTime();
