(function() {
  console.log("_appConfig", window._appConfig);
  if(window._appConfig) {
    window._appConfig = {
      baseUrl : ''
    }
  }
  var head = document.getElementsByTagName("head")[0],
    config = {
      "css": [
        "/css/leaflet.css",
        "/css/chunk-vendors.css",
        "/css/app.css"
      ],
      "js": [
        "/js/chunk-vendors.js",
        "/js/app.js"
      ]
    },
    now = new Date(),
    version = now.getTime();

  function loadCss(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url + "?v=" + version;
    head.appendChild(link);
  }

  function loadJs(url) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    document.body.appendChild(script);
    script.src = url + "?v=" + version;
  }



  for (var i in config.css) {
    loadCss(window._appConfig.baseUrl + config.css[i]);
  }

  for (var i in config.js) {
    loadJs(window._appConfig.baseUrl + config.js[i]);
  }
})();
