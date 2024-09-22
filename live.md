---
layout: cover
title: Эфир
permalink: live
---

  <!-- Основной градиентный фон -->
  <div class="gradient"></div>

  <!-- Кнопка для скрытия/показа контента -->
<button id="toggleButton" class="button-toggle">
  <img src="{{ site.baseurl }}/images/button.png" alt="Toggle Button" />
</button>

<script src="{{ site.baseurl }}/asserts/js/script.js"></script>


  <!-- Аудиоплеер, скрытый по умолчанию -->
  <audio id="audioPlayer" controls></audio>

  <!-- Секция для отображения карточек программ -->
  <div id="programsContainer" class="programs-grid">
    <!-- Получаем текущий час -->
    {% assign current_hour = site.time | date: "%H" %}

    <!-- Переводим current_hour в число -->
    {% assign current_hour_number = current_hour | plus: 0 %}

    <!-- Рассчитываем следующие два часа с учетом перехода через полночь -->
    {% assign next_hour_1 = current_hour_number | plus: 1 %}
    {% assign next_hour_2 = current_hour_number | plus: 2 %}
    {% if next_hour_1 == 24 %}
      {% assign next_hour_1 = 0 %}
    {% endif %}
    {% if next_hour_2 == 24 %}
      {% assign next_hour_2 = 0 %}
    {% endif %}
    {% if next_hour_2 == 25 %}
      {% assign next_hour_2 = 1 %}
    {% endif %}

    <!-- Цикл по страницам с фильтрацией и сортировкой -->
    {% assign mypages = site.html_pages | where: "type", "program" | sort: "start_time" %}
    {% for page in mypages %}
      <!-- Фильтрация по текущему часу и двум последующим -->
      {% assign page_hour = page.start_time | date: "%H" | plus: 0 %}

      <!-- Проверяем, находится ли программа в пределах текущего часа и двух следующих -->
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
          <!-- Время программы -->
          <p class="program_time">{{ page.start_time }}</p>
          <!-- Название программы Ссылка на страницу программы -->
          <a href="{{ site.baseurl }}{{ page.permalink }}">{{ page.title }}</a>
        </div>
      {% endif %}
    {% endfor %}
  </div>
