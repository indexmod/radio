---
layout: cover
title: Радио
---

<!-- Основной градиентный фон -->
<div class="gradient"></div>

<!-- Аудиоплеер, скрытый по умолчанию -->
<audio id="audioPlayer" controls></audio>

<!-- Блок с мигающим кружком и текущим временем -->
<div class="header-info">
  <div class="blinking-circle"></div>
  <div id="currentTime" class="time-display"></div>
</div>

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

<!-- Подключение скрипта для обновления времени -->
<script src="{{ site.baseurl }}/assets/js/audioPlayer.js"></script>
<script>
  function updateTime() {
    const timeElement = document.getElementById('currentTime');
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString();
  }

  // Обновляем время каждую секунду
  setInterval(updateTime, 1000);
  updateTime();
</script>
