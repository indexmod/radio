---
layout: docs
permalink: docs
title: "Доки"
---


# Документация для сайта "Радио"

## Описание проекта
Сайт представляет собой радиоплатформу, которая автоматически воспроизводит аудиопрограммы в течение 24 часов с использованием заранее загруженных аудиофайлов. Каждая программа стартует в начале часа и заканчивается за несколько секунд до следующего часа, после чего играет короткий джингл. Пользователи могут взаимодействовать с плеером, а контент динамически обновляется в зависимости от текущего времени.

## Структура страниц

1. **Главная страница**  
   На главной странице сайта находится список программ, которые отображаются в зависимости от текущего времени. Заголовки обозначают текущее, следующее и ближайшее после него время трансляции.

   - Программа, которая идет в данный момент, отмечается как "Сейчас" и мигает для привлечения внимания.
   - Следующие программы отображаются с заголовками "Далее" и "Скоро".

2. **Аудиоплеер**  
   Аудиоплеер находится на странице, но скрыт по умолчанию. При клике на любой элемент страницы он активируется и начинает воспроизведение соответствующей программы с текущей минуты часа.

## Логика работы
1. **Отображение программы**  
   Программы фильтруются и отображаются на основании текущего времени (текущий час и два последующих). Каждый элемент программы содержит ссылку на отдельную страницу с подробностями программы, а также скрытую ссылку на аудиофайл, который используется для воспроизведения.

2. **Запуск аудио**  
   По клику в любое место страницы автоматически запускается плеер, который начинает воспроизведение с текущей минуты в часе, основываясь на времени пользователя. Аудиоплеер подстраивается под продолжительность файла, чтобы начать воспроизведение с нужного момента.

3. **Обновление контента**  
   Сайт автоматически обновляется в реальном времени, отображая актуальную программу в зависимости от текущего часа.

## Дизайн и стили

1. **Фон**  
   Фоновый градиент меняется плавно с помощью анимации и заполняет всю страницу, создавая плавный переход между цветами.

2. **Шрифты и стили текста**  
   Заголовки и текстовые элементы используют шрифт фиксированной ширины, придавая сайту минималистичный и аккуратный вид. Размер всех шрифтов по умолчанию составляет 30px.

3. **Карточки программ**  
   Каждая карточка программы содержит информацию о времени начала программы и ссылку на страницу программы. Карточки визуально разделены, имеют закругленные углы и чёткие границы для улучшения восприятия.

## Структура файлов и папок

- **Основные страницы**  
  Содержатся в папке `pages`, каждая страница представляет отдельную программу с информацией о начале программы и аудиофайлом для воспроизведения.

- **Файлы аудио**  
  Аудиофайлы для программ загружаются и привязываются к страницам программ. Они хранятся в системе и подгружаются при необходимости.

- **Скрипты**  
  Основные JavaScript-файлы управляют поведением плеера, запускают аудиофайлы, а также обрабатывают события на странице (например, клики для запуска воспроизведения).

## Взаимодействие с пользователем

1. **Запуск воспроизведения**  
   Пользователи могут кликнуть в любое место страницы, чтобы начать воспроизведение программы с текущей минуты. Это делает интерфейс простым и понятным даже для новичков.

2. **Обновление программы**  
   Контент сайта автоматически адаптируется к времени, и пользователи всегда видят актуальные программы, которые транслируются в ближайшее время.

## Возможности для дальнейшего расширения

- **Интерактивные элементы**  
  Можно добавить больше интерактивных элементов, например, возможность переключения между программами вручную.

- **Уведомления**  
  Возможность уведомления пользователей о начале новой программы или запуске специальных выпусков.

## Заключение

Сайт "Радио" представляет собой удобную платформу для автоматического воспроизведения программ, организованную по времени суток. Весь функционал построен с учетом простоты взаимодействия для пользователя, а динамическое обновление программы гарантирует, что пользователи всегда получают актуальный контент.
