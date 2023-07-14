window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  window.ui = SwaggerUIBundle({
    url: "https://jonathan-vandenberg.github.io/api/swagger.yaml",
    dom_id: '#swagger-ui',
    deepLinking: true,
    filter: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIKongTheme,
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: 'KongLayout',
    theme:
        {
          "swaggerAbsoluteTop": "0px", // the top most container is set absolute at this distance from top. (default 0)
          "hasSidebar": true, // enables sidebar (default off)
          "languages" : [ // sets langagues for sidebar (default bash, javascript, python, ruby)
            {
              "prismLanguage":"bash",
              "target":"shell",
              "client":"curl"
            },{
              "prismLanguage":"ruby",
              "target":"ruby"
            }]
        }
  });

  //</editor-fold>
};
