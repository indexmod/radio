// assets/js/custom-cusdis.js

const makeIframeContent = (target) => {
  const host = target.dataset.host || "https://cusdis.com";
  const iframeJsPath = target.dataset.iframe || `${host}/js/iframe.umd.js`;
  const cssPath = `${host}/js/style.css`;
  const customCssPath = "/assets/css/custom-cusdis-styles.css"; // Ваш файл стилей
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

// Остальные функции и код из исходного примера можно скопировать сюда, если они необходимы.
