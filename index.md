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

<!-- Кнопка Пауза с подсказкой -->

{% include spacebar.html %}

<!-- Аудиоплеер, скрытый по умолчанию -->
<audio id="audioPlayer" controls></audio>

<!-- Сетка программ -->
<div id="programsContainer" class="programs-grid">
  <!-- Цикл по страницам с фильтрацией и сортировкой -->
  {% assign mypages = site.html_pages | where: "type", "program" | sort: "start_time" %}

  <!-- Вывод программ в сетке 6 на 4 -->
  {% for page in mypages %}
    <div class="program-card">
    <!-- Скрытая ссылка на обложку <img class="program_icon" src="/images/{{ page.permalink | remove: '/' }}.gif" alt="Program Icon"> -->
      <p class="program_time">{{ page.start_time }}</p>
      <a href="{{ site.baseurl }}{{ page.permalink }}">{{ page.title }}</a>
      <!-- Скрытая ссылка на аудиофайл с динамическим классом, основанным на времени начала программы -->
<a class="audio-link-{{ page.start_time | date: '%H' }}" href="{{ page.audio_file }}" style="display:none;">Audio</a>

    </div>
  {% endfor %}

<!-- Подключение скриптов -->
<script src="{{ site.baseurl }}/assets/js/audioPlayer.js"></script>
<script src="{{ site.baseurl }}/assets/js/timeDisplay.js"></script>
<script src="{{ site.baseurl }}/assets/js/blinkCurrentHour.js"></script>
