/* global window, document, localStorage */
import docs from "./docs.js";

import loadYouTubeAPI from "./components/youtube-api.js";
import inlineVideos from "./components/inline-video.js";
import navigation from "./components/navigation";
import modalVideo from "./components/modal-video.js";

// end imports

function initPage() {
  docs.init();
  loadYouTubeAPI.init();
  inlineVideos.init();
  navigation.init();
	modalVideo.init();
  // end inits
}

window.addEventListener("load", function() {
  initPage();
});
