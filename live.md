---
layout: cover
title: Эфир
permalink: live
---

<!-- Основной градиентный фон -->
<div class="gradient"></div>

<!-- Аудиоплеер, скрытый по умолчанию -->
<audio id="audioPlayer" controls></audio>

<!-- Секция для отображения карточек программ -->
<div id="programsContainer" class="programs-grid">
  <!-- Получаем текущий час -->
  {% assign current_hour = site.time | date: "%H" %}
  {% assign current_minute = site.time | date: "%M" %}

  <!-- Остальной код остаётся без изменений... -->
  {% assign mypages = site.html_pages | where: "type", "program" | sort: "start_time" %}
  {% for page in mypages %}
    {% assign page_hour = page.start_time | date: "%H" | plus: 0 %}
    {% if page_hour == current_hour_number or page_hour == next_hour_1 or page_hour == next_hour_2 %}
      <!-- Определяем текст: "Сейчас", "Далее", "Скоро" -->
      {% if page_hour == current_hour_number %}
        <h2 class="blinking-text">Сейчас</h2>
      {% elsif page_hour == next_hour_1 %}
        <h2>Далее</h2>
      {% elsif page_hour == next_hour_2 %}
        <h2>Скоро</h2>
      {% endif %}
      <!-- Карточка программы -->
      <div class="program-card">
        <p class="program_time">{{ page.start_time }}</p>
        <a href="{{ site.baseurl }}{{ page.permalink }}">{{ page.title }}</a>
      </div>
    {% endif %}
  {% endfor %}
</div>

<!-- Скрипт для запуска аудиоплеера по клику на окно -->
<script>
  document.addEventListener('click', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const currentMinute = new Date().getMinutes();

    // Получаем путь к аудиофайлу из front matter текущей страницы
    const audioFile = '{{ page.audio_file }}'; // Убедитесь, что этот ключ доступен в front matter

    // Устанавливаем источник аудиоплеера
    audioPlayer.src = audioFile + '?start=' + currentMinute; // Пример с параметром старта, если нужно

    // Запускаем аудиоплеер
    audioPlayer.play();
  });
</script>
