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
      <h2 class="blinking-text">СЕЙЧАС &#9654;</h2>
        <p class="program_time">{{ page.start_time }}</p>
        <a href="{{ page.audio_file }}" class="audio-link" style="display: none;"></a>
        <a href="{{ site.baseurl }}{{ page.permalink }}">{{ page.title }}</a>
      </div>
    {% endif %}
  {% endfor %}

  <hr style="border: 1px solid green; width: 100%; margin: 20px auto;">

  <!-- Карточка для оставшихся программ на сегодня -->
  <div class="program-card">
    <h2>СЕГОДНЯ</h2>
    <p>
      {% for page in mypages %}
        {% assign page_hour = page.start_time | date: "%H" | plus: 0 %}
        {% if page_hour > current_hour_number %}
          <span class="program_time">{{ page.start_time }}</span>
          <a href="{{ site.baseurl }}{{ page.permalink }}">{{ page.title }}</a>;
        {% endif %}
      {% endfor %}
    </p>
  </div>

  <hr style="border: 1px solid green; width: 100%; margin: 20px auto;">

  <div class="program-card">
    <h2>ПОСЛЕ ПОЛУНОЧИ</h2>
    <p>
      {% for page in mypages %}
        {% assign page_hour = page.start_time | date: "%H" | plus: 0 %}
        {% if page_hour < current_hour_number %}
          <span class="program_time">{{ page.start_time }}</span>
          <a href="{{ site.baseurl }}{{ page.permalink }}">{{ page.title }}</a>;
        {% endif %}
      {% endfor %}
    </p>
  </div>

  <!-- Отображение актуального времени -->
  <div id="currentTime" style="font-size: 24px; margin-top: 20px;"></div>

</div>

<script src="{{ site.baseurl }}/assets/js/audioPlayer.js"></script>
<script src="{{ site.baseurl }}/assets/js/timeChecker.js"></script>
