---
layout: cover
title: Эфир Indexmod
---

<!-- Основной градиентный фон -->
<div class="gradient"></div>

<!-- Контейнер с заголовком, мигающим кружком и временем -->
<div class="header-info">
  <span>{{ site.title }}</span>
  <div class="blinking-circle"></div>
  <div id="timeDisplay"></div>
  <img src="/reload_icon.png" alt="Reload" style="cursor: pointer; margin-left: 5px; height: 21px;" onclick="location.reload()">
</div>

<!-- Скрытый аудио плеер (сделаем его видимым, но стилизуем) -->
<div class="audio-container" style="visibility: hidden; height: 0;">
  <audio id="audioPlayer">
    <source id="audioSource" src="" type="audio/mpeg">
    Ваш браузер не поддерживает аудио элемент.
  </audio>
</div>

<!-- Кастомный аудио-плеер -->
<div class="custom-audio-player">
  <button id="play-pause-btn">Звук</button>
  <div class="progress-container">
    <div class="progress-bar" id="progress-bar"></div>
  </div>
  <span id="current-time">0:00</span><span style="color: black;">/</span><span id="duration">0:00</span>
</div>

<!-- Сетка программ -->
<div id="programsContainer" class="programs-grid">
  {% assign mypages = site.html_pages | where: "type", "program" | sort: "start_time" %}
  {% for page in mypages %}
    <div class="program-card">
      <p class="program_time">{{ page.start_time }}</p>
      <a href="{{ site.baseurl }}{{ page.permalink }}">{{ page.title }}</a>
      <a class="audio-link-{{ page.start_time | date: '%H' }}" href="/assets/audio/{{ page.permalink }}.mp3" style="display: none;">Audio</a>
    </div>
  {% endfor %}
</div>

<!-- Подключение скриптов -->
<script src="{{ site.baseurl }}/assets/js/timeDisplay.js"></script>
<script src="{{ site.baseurl }}/assets/js/blinkCurrentHour.js"></script>
<script src="{{ site.baseurl }}/assets/js/loadCurrentHourAudio.js"></script>

<!-- Скрипт для скрытия сетки программ -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Скрываем сетку программ
        const programsContainer = document.getElementById('programsContainer');
        programsContainer.style.display = 'none'; // Или используйте visibility: hidden; для сохранения места
    });
</script>
