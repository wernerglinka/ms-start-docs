const loadLeaflet = (function() {
  const isStylesheetLoaded = (url) => {
    return Array.from(document.styleSheets).some(styleSheet => {
      if (styleSheet.href) {
        return styleSheet.href === url;
      }
      return false;
    });
  }

  const loadStylesheet = (url, integrity, crossOrigin) => {
    if (!isStylesheetLoaded(url)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      link.integrity = integrity;
      link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
    } else {
      console.log('Stylesheet is already loaded.');
    }
  }

  const loadLeafletScript = () => {
    return new Promise((resolve, reject) => {
        if (typeof L !== 'undefined') {
            resolve();
            return;
        }

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
        script.crossOrigin = '';

        script.onload = function() {
            resolve();
        };

        script.onerror = function() {
            reject(new Error('Failed to load the Leaflet script.'));
        };

        document.head.appendChild(script);
    });
  }

  const init = () => {

    console.log("loading leaflet script");

    loadStylesheet('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=', '');

    loadLeafletScript().then((res, err) => {
      console.log("script has been loaded");
      
      const allMaps = document.querySelectorAll(".js-leaflet-map > div");

      console.log(`allMaps: ${JSON.stringify(allMaps, null, 2)}`);
      

      allMaps.forEach(map => {
        const mapId = map.getAttribute('id');
        const mapContainer = document.getElementById(mapId);
        const centerX = mapContainer.dataset.centerx;
        const centerY = mapContainer.dataset.centery;
        const zoom = mapContainer.dataset.zoom;

        console.log(`centerX: ${centerX}, centerY: ${centerY}, zoom: ${zoom}`);
        
        const mapOptions = {
          center: [ centerX, centerY ],
          zoom
        };

        const thisMap = new L.map(mapId, mapOptions);

        const layer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

        thisMap.addLayer(layer);
      });

    }).catch(error => {
        console.error(error);
    });
  }


  return { init };
})();

export default loadLeaflet;