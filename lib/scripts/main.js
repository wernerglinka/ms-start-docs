/* global window, document, localStorage */
import docs from "./docs.js";

import loadYouTubeAPI from "./components/youtube-api.js";
import inlineVideos from "./components/inline-video.js";
import navigation from "./components/navigation";
import modalVideo from "./components/modal-video.js";
import lists from "./components/lists.js";
import loadLeafletMap from "./components/load-leaflet.js";  

// end imports

loadYouTubeAPI.init();

function initPage() {
  if(document.getElementById('js-docs-wrapper')) {
    docs.init();
  };

  if(document.querySelector(".list-wrapper")) {
    lists.init();
  }

  if(document.querySelector(".js-leaflet-map")) {
    loadLeafletMap.init();
  }

  inlineVideos.init();
  navigation.init();
	modalVideo.init();
  // end inits
}

window.addEventListener("load", function() {
  initPage();
});
