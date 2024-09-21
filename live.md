---
layout: cover
title: Эфир
permalink: live
---
  <!-- Основной градиентный фон -->
  <div class="gradient"></div>

  <!-- Аудиоплеер, скрытый по умолчанию -->
  <audio id="audioPlayer" controls></audio>

  + This page animation performed best in Google Chrome and Firefox

  <wrap>
  {% assign mypages = site.html_pages | sort: "start_time" %}
  {% for page in mypages %}
  {% unless page.exclude %}
  <figure>
  <a href="{{ page.permalink | absolute_url }}">{% include page.permalink %}.gif</a>
  <figcaption>
  <p class="shortname">{{page.title}}</p></figcaption>
  </figure>
  {% endunless %}
  {% endfor %}
  </wrap>
