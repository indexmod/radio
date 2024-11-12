# Это первая верссия радиостанции заморожена

Здесь сетка из страниц выводилась в скрытом виде на первую страницу и с помошью скрипта нужная программа подключалась к плееру - все работает, но есть проблемы перехода между сутками и другие разные глюки. Сейчас рабочая версия в репозитории air





# Документация для шаблона "Обложка эфира Indexmod"

## Описание

Данный HTML-шаблон используется для создания страницы с сеткой программ радиостанции "Эфир Indexmod". Он включает в себя стили, заголовок, фавиконы, а также программы, представленные в формате сетки с указанием времени и ссылок на аудиофайлы.

### Содержание:

1. [Основные метаданные и стили](#основные-метаданные-и-стили)
2. [Фавиконы](#фавиконы)
3. [Основная структура страницы](#основная-структура-страницы)
4. [Градиентный фон и заголовок](#градиентный-фон-и-заголовок)
5. [Аудиоплеер](#аудиоплеер)
6. [Сетка программ](#сетка-программ)
7. [Подключение скриптов](#подключение-скриптов)
8. [Дополнительная информация](#дополнительная-информация)

## Основные метаданные и стили

1. **Подключение шрифтов**: Используется шрифт "Old Standard TT" из Google Fonts:
   ```html
   <style>
   @import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap');
   </style>
   ```

2. **Отключение кэширования**: Для предотвращения кеширования страниц добавлены метатеги:
   ```html
   <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
   <meta http-equiv="Pragma" content="no-cache">
   <meta http-equiv="Expires" content="0">
   ```

3. **Основные метатеги**:
   ```html
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Эфир Indexmod</title>
   <link rel="stylesheet" href="/assets/css/styles-cover.css">
   ```

## Фавиконы

Шаблон поддерживает фавиконы для различных платформ и размеров:
```html
<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
<link rel="manifest" href="/favicon/manifest.json">
```

## Основная структура страницы

HTML-код страницы делится на несколько ключевых элементов:

1. **Основной фон**:
   ```html
   <div class="gradient"></div>
   ```
   Это элемент с градиентным фоном, который задаёт стилизацию страницы.

2. **Заголовок и информация о времени**:
   ```html
   <div class="header-info">
     <h3 class="old-standard-tt-regular">Эфир Indexmod</h3>
     <div class="blinking-circle"></div>
     <div id="timeDisplay"></div>
     <img src="/reload_icon.png" alt="Reload" onclick="location.reload()" />
   </div>
   ```
   Включает заголовок, мигающий индикатор и отображение текущего времени.

## Аудиоплеер

Скрытый аудиоплеер, который активируется по клику на соответствующую программу:
```html
<audio id="audioPlayer" controls=""></audio>
```

## Сетка программ

Программы представлены в формате сетки с указанием времени и ссылки на соответствующие страницы:

```html
<div id="programsContainer" class="programs-grid">
  <div class="program-card">
    <p class="program_time">00:00</p>
    <a href="/00">П Ь I Л Ь (Рик Уэст)</a>
    <a class="audio-link-00" href="/assets/audio/program00.mp3" style="display:none;">Audio</a>
  </div>
  <!-- Другие программы -->
</div>
```

### Описание элементов:
- **program_time** — отображает время начала программы.
- **audio-link** — скрытая ссылка на аудиофайл программы, который воспроизводится по нажатию на соответствующий элемент интерфейса.

## Подключение скриптов

Подключены следующие скрипты для взаимодействия с аудиоплеером, временем и мигающим кругом:
```html
<script src="/assets/js/audioPlayer.js"></script>
<script src="/assets/js/timeDisplay.js"></script>
<script src="/assets/js/blinkCurrentHour.js"></script>
```

## Дополнительная информация

В конце страницы размещена ссылка для подписки на телеграм-канал:
```html
<p><a href="https://t.me/efirindexmod" target="_blank">Подписаться на Эфир Indexmod</a></p>
```

### Заключение

Этот шаблон представляет собой базовый макет для отображения программы радиостанции с возможностью воспроизведения аудиофайлов и обновлением времени.
