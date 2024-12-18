window.CUSDIS = {};

// Создаем контент для iframe
const makeIframeContent = (target) => {
    const host = target.dataset.host || "https://cusdis.com";
    const iframeJsPath = target.dataset.iframe || `${host}/js/iframe.umd.js`;
    const cssPath = `${host}/js/style.css`;
    const customCssPath = "/assets/css/custom-cusdis-styles.css"; // Ваш кастомный CSS файл

    return `<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="${cssPath}">
    <link rel="stylesheet" href="${customCssPath}"> <!-- Подключаем ваши стили -->
    <base target="_parent" />
    <style>
      body, html {
        margin: 0;
        padding: 0;
        height: 100%; /* Задаем 100% высоты */
        overflow: hidden; /* Убираем прокрутку */
      }
    </style>
    <script>
      window.CUSDIS_LOCALE = ${JSON.stringify(window.CUSDIS_LOCALE)};
      window.__DATA__ = ${JSON.stringify(target.dataset)};
    <\/script>
</head>
<body>
    <div id="root"></div>
    <script src="${iframeJsPath}" type="module"></script>
</body>
</html>`;
};

let singleTonIframe; // Убираем дублирование

// Функция для создания iframe
function createIframe(target) {
    if (!singleTonIframe) {
        singleTonIframe = document.createElement("iframe");
        listenEvent(singleTonIframe, target);
    }
    singleTonIframe.srcdoc = makeIframeContent(target);
    singleTonIframe.style.width = "100%";
    singleTonIframe.style.height = "auto"; // Автоматическая высота
    singleTonIframe.style.border = "none"; // Убираем рамки
    singleTonIframe.style.overflow = "hidden"; // Убираем прокрутку
    singleTonIframe.style.display = "block"; // Блочный элемент для корректного расчета высоты
    return singleTonIframe;
}

// Отправка сообщений в iframe
function postMessage(event, data) {
    if (singleTonIframe) {
        singleTonIframe.contentWindow.postMessage(
            JSON.stringify({
                from: "cusdis",
                event,
                data,
            })
        );
    }
}

// Слушаем события из iframe
function listenEvent(iframe) {
    const onMessage = (e) => {
        try {
            const msg = JSON.parse(e.data);
            if (msg.from === "cusdis") {
                if (msg.event === "resize") {
                    iframe.style.height = msg.data + "px"; // Устанавливаем высоту на основе содержимого
                }
            }
        } catch (e2) {
            console.error("Error parsing message from iframe:", e2);
        }
    };

    window.addEventListener("message", onMessage);
}

// Функция рендеринга
function render(target) {
    if (target) {
        target.innerHTML = "";
        const iframe = createIframe(target);
        target.appendChild(iframe);
    }
}

// Экспортируем функции
window.renderCusdis = render;
window.CUSDIS.renderTo = render;

// Инициализация виджета
function initial() {
    let target = document.querySelector(`#${window.cusdisElementId}`) || document.querySelector("#cusdis_thread");

    if (target) {
        render(target);
    }
}

// Запуск инициализации
window.CUSDIS.initial = initial;
initial();
