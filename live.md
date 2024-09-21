---
layout: cover
title: Эфир
permalink: live
---
  <!-- Основной градиентный фон -->
  <div class="gradient"></div>

  <!-- Аудиоплеер, скрытый по умолчанию -->
  <audio id="audioPlayer" controls></audio>

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
    <!-- Цикл по страницам с фильтрацией и сортировкой -->
    {% assign mypages = site.html_pages | where: "type", "program" | sort: "start_time" %}
    {% for page in mypages %}
      {% unless page.exclude %}
        <div class="program-card">
          <!-- Отображение обложки программы -->
          <img src="{{ page.cover | default: '/images{{ page.permalink }}.gif' }}" alt="{{ page.title }} обложка" class="program-cover">
          <!-- Название программы -->
          <h3>{{ page.title }}</h3>
          <!-- Время старта программы -->
          <p>Время старта: {{ page.start_time }}</p>
          <!-- Ссылка на страницу программы -->
          <a href="{{ page.url }}" class="program-link">Подробнее</a>
        </div>
      {% endunless %}
    {% endfor %}
  </div>
