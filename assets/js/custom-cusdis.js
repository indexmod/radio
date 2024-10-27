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
    <script>
      window.CUSDIS_LOCALE = ${JSON.stringify(window.CUSDIS_LOCALE)}
      window.__DATA__ = ${JSON.stringify(target.dataset)}
    <\/script>
    <style>
      :root {
        color-scheme: light;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script src="${iframeJsPath}" type="module"></script>
  </body>
</html>`;
};

let singleTonIframe;

// Функция для создания iframe
function createIframe(target) {
  if (!singleTonIframe) {
    singleTonIframe = document.createElement("iframe");
    listenEvent(singleTonIframe, target);
  }
  singleTonIframe.srcdoc = makeIframeContent(target);
  singleTonIframe.style.width = "100%";
  singleTonIframe.style.border = "0";
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
function listenEvent(iframe, target) {
  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const onMessage = (e) => {
    try {
      const msg = JSON.parse(e.data);
      if (msg.from === "cusdis") {
        switch (msg.event) {
          case "onload":
            if (target.dataset.theme === "auto") {
              postMessage("setTheme", darkModeQuery.matches ? "dark" : "light");
            }
            break;
          case "resize":
            iframe.style.height = msg.data + "px";
            break;
        }
      }
    } catch (e2) {
      console.error("Error parsing message from iframe:", e2);
    }
  };

  window.addEventListener("message", onMessage);

  function onChangeColorScheme(e) {
    const isDarkMode = e.matches;
    if (target.dataset.theme === "auto") {
      postMessage("setTheme", isDarkMode ? "dark" : "light");
    }
  }

  darkModeQuery.addEventListener("change", onChangeColorScheme);

  return () => {
    darkModeQuery.removeEventListener("change", onChangeColorScheme);
    window.removeEventListener("message", onMessage);
  };
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
window.CUSDIS.setTheme = function (theme) {
  postMessage("setTheme", theme);
};

// Инициализация виджета
function initial() {
  let target;
  if (window.cusdisElementId) {
    target = document.querySelector(`#${window.cusdisElementId}`);
  } else if (document.querySelector("#cusdis_thread")) {
    target = document.querySelector("#cusdis_thread");
  }

  if (target) {
    render(target);
  }
}

// Запуск инициализации
window.CUSDIS.initial = initial;
initial();
