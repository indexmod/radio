// Получаем текущий час
function getCurrentHour() {
    const now = new Date();
    return String(now.getHours()).padStart(2, '0'); // Форматируем в 2 знака
}

// Функция для мигания времени программы
function blinkCurrentProgramTime() {
    const programTimes = document.querySelectorAll('.program_time');
    const currentHour = getCurrentHour();

    programTimes.forEach(programTime => {
        // Сравниваем текущее время программы с текущим часом
        if (programTime.textContent.startsWith(currentHour)) {
            programTime.classList.add('blinking'); // Добавляем класс для мигания
        } else {
            programTime.classList.remove('blinking'); // Удаляем класс для неактивных
        }
    });
}

// Запускаем мигание каждую секунду
setInterval(blinkCurrentProgramTime, 1000);
