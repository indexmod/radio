---
layout: cover
title: Радио
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

  <!-- Переводим current_hour в число -->
  {% assign current_hour_number = current_hour | plus: 0 %}

  <!-- Цикл по страницам с фильтрацией и сортировкой -->
  {% assign mypages = site.html_pages | where: "type", "program" | sort: "start_time" %}

  <!-- Карточка для текущего часа -->
  {% for page in mypages %}
    {% assign page_hour = page.start_time | date: "%H" | plus: 0 %}

    {% if page_hour == current_hour_number %}
      <div class="program-card">
        <h2 class="blinking-text">СЕЙЧАС</h2>
        <p class="program_time">{{ page.start_time }}</p>
        <a href="{{ site.baseurl }}{{ page.permalink }}">{{ page.title }}</a>
      </div>
    {% endif %}
  {% endfor %}

  <!-- Карточка для оставшихся программ на сегодня -->
  <div class="program-card">
    <h2>СЕГОДНЯ</h2>
    <p>
      {% for page in mypages %}
        {% assign page_hour = page.start_time | date: "%H" | plus: 0 %}
        {% if page_hour > current_hour_number %}
          {{ page.start_time }} <a href="{{ site.baseurl }}{{ page.permalink }}">{{ page.title }}</a>;
        {% endif %}
      {% endfor %}
    </p>
  </div>
</div>

<script src="{{ site.baseurl }}/assets/js/audioPlayer.js"></script>
