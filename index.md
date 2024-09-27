---
layout: cover
title: Радио
---

<!-- Основной градиентный фон -->
<div class="gradient"></div>

<!-- Контейнер с заголовком, мигающим кружком и временем -->
<div class="header-info">
  <span>{{ site.title }}</span>
  <div class="blinking-circle"></div>
  <div id="timeDisplay"></div>
</div>

<!-- Аудиоплеер, скрытый по умолчанию -->
<audio id="audioPlayer" controls></audio>

<!-- Сетка программ -->
<div id="programsContainer" class="programs-grid">
  <!-- Цикл по страницам с фильтрацией и сортировкой -->
  {% assign mypages = site.html_pages | where: "type", "program" | sort: "start_time" %}

  <!-- Вывод программ в сетке 6 на 4 -->
  {% for page in mypages %}
    <div class="program-card">
      <p class="program_time">{{ page.start_time }}</p>
      <a href="{{ site.baseurl }}{{ page.permalink }}">{{ page.title }}</a>
    </div>
  {% endfor %}
</div>

<!-- Подключение скрипта -->
<script src="{{ site.baseurl }}/assets/js/audioPlayer.js"></script>
<script src="{{ site.baseurl }}/assets/js/timeDisplay.js"></script>
<script src="{{ site.baseurl }}/assets/js/blinkCurrentHour.js"></script>
