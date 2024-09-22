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

    <!-- Переводим current_hour в число -->
    {% assign current_hour_number = current_hour | plus: 0 %}

    <!-- Цикл по страницам с фильтрацией и сортировкой -->
    {% assign mypages = site.html_pages | where: "type", "program" | sort: "start_time" %}
    {% for page in mypages %}
      <!-- Фильтрация по текущему часу и двум последующим -->
      {% assign page_hour = page.start_time | date: "%H" | plus: 0 %}

      <!-- Проверяем, находится ли программа в пределах текущего часа и двух следующих -->
      {% if page_hour >= current_hour_number and page_hour <= current_hour_number | plus: 2 %}
        <div class="program-card">
          <!-- Время программы -->
          <p class="program_time">{{ page.start_time }}</p>
          <!-- Название программы Ссылка на страницу программы -->
          <a href="{{ site.baseurl }}{{ page.permalink }}">{{ page.title }}</a>
        </div>
      {% endif %}
    {% endfor %}
  </div>
