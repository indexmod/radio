document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseBtn = document.getElementById("play-pause-btn");
    const progressBar = document.getElementById("progress-bar");
    const currentTimeDisplay = document.getElementById("current-time");
    const durationDisplay = document.getElementById("duration");

    // Получаем текущий час
    const currentHour = new Date().getHours();
    const audioSource = document.getElementById("audio-source");
    const audioLink = document.querySelector(`.audio-link-${currentHour}`);

    // Проверяем, существует ли ссылка с классом, соответствующим текущему часу
    if (audioLink) {
        audioSource.src = audioLink.href; // Подставляем путь к аудиофайлу
        audioPlayer.load(); // Загружаем новый источник
    } else {
        console.warn("Аудиофайл для текущего времени не найден.");
    }

    // Установка длительности аудио при загрузке
    audioPlayer.addEventListener("loadedmetadata", function () {
        durationDisplay.textContent = formatTime(audioPlayer.duration);
    });

    // Обновление времени и прогресс-бара во время воспроизведения
    audioPlayer.addEventListener("timeupdate", function () {
        currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
        progressBar.style.width = (audioPlayer.currentTime / audioPlayer.duration) * 100 + '%';
    });

    // Обработчик нажатия кнопки воспроизведения/паузы
    playPauseBtn.addEventListener("click", function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = "Пауза";
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = "Звук";
        }
    });

    // Функция для форматирования времени
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});
