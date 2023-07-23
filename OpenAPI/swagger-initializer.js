window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  window.ui = SwaggerUIBundle({
    url: "https://jonathan-vandenberg.github.io/api/swagger.yaml", // The URL of the github pages site pointing to the wagger.yaml file in the root directory. Something like https://leonAcosta.github.io/arttaca-backend/swagger.yaml
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
