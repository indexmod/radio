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
          <!-- Название программы -->
          <p>{{ page.start_time }}</p>
          <!-- Название программы -->
          <!-- Ссылка на страницу программы -->
          <a href="{{ site.baseurl }}{{ page.permalink }}">{{ page.title }}</a>
        </div>
      {% endunless %}
    {% endfor %}
  </div>
