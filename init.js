(function() {

  if (!window.PGRConfig) {
    window.PGRConfig = {
      baseUrl: ''
    }
  }

  var head = document.getElementsByTagName("head")[0],
    config = {
      "css": [
        "/css/leaflet.css",
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

  function loadJs(url, callback) {
    console.log('Loading JS', url);
    var script = document.createElement("script");

    if (script.readyState) { //IE
      script.onreadystatechange = function() {
        if (script.readyState == "loaded" ||
          script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else { //Others
      script.onload = function() {
        callback();
      };
    }

    script.type = "text/javascript";
    document.body.appendChild(script);
    script.src = url + "?v=" + version;
  }


  function loadJsByIndex(index) {
    if(index < config.js.length) {
      loadJs(window.PGRConfig.baseUrl + config.js[index], function() {
        index++;
        loadJsByIndex(index);
      })
    } else {
      console.log("JS loaded!");
    }
  }


  for (var i = 0; i < config.css.length; i++) {
    loadCss(window.PGRConfig.baseUrl + config.css[i]);
  }

  loadJsByIndex(0);

})();
