---
layout: cover
title: Радио
---
  <!-- Основной градиентный фон -->
  <div class="gradient"></div>

  <!-- Овальная кнопка для запуска программы -->
  <div id="startButton" class="oval-button" onclick="startProgram()">
    <div class="triangle"></div>
  </div>

  <!-- Аудиоплеер, скрытый по умолчанию -->
  <audio id="audioPlayer" controls></audio>

  <!-- Контейнер для отображения содержимого файла schedule.html -->
  <div id="scheduleContainer" style="display: none;">
    {% include schedule.html %}
  </div>

  <!-- Подключение скрипта -->
  <script src="{{ '/assets/js/script.js' | relative_url }}"></script>
