/* global window, document */

/**
 * Manage Map Markers display
 * 
 * @params {*} none
 * @return {function} 
 */
 const manageMapMarkers = (function() {
  const addMarker = () => {
    const addMarker = document.querySelector(".js-add-marker");

    // if add button button already has eventListener, return
    if (addMarker.classList.contains("is-active")) return;

    // add event listener to add selection button
    addMarker.addEventListener("click", () => {
      // get all existing markers
      const allMarkers = document.querySelectorAll(".js-markers-wrapper");
      // get number of ctas
      const markersCount = allMarkers.length;
      // get last marker
      const lastMarker = allMarkers[markersCount - 1];
      // build new marker
      const newMarker = lastMarker.cloneNode(true);
      // update title
      newMarker.querySelector(".markerTitle input").name = `leaflet.markers[${markersCount}].title`;
      // update latitute name
      newMarker.querySelector(".markerLatitute input").name = `leaflet.markers[${markersCount}].latitute`;
      // update longitude name
      newMarker.querySelector(".markerLongitude input").name = `leaflet.markers[${markersCount}].longitude`;
      // update content title name
      newMarker.querySelector(".markerContentTitle input").name = `leaflet.markers[${markersCount}].content.title`;
      // update content body name
      newMarker.querySelector(".markerContentBody textarea").name = `leaflet.markers[${markersCount}].content.body`;
      // update content link name
      newMarker.querySelector(".markerContentLink input").name = `leaflet.markers[${markersCount}].content.link`;
      // append new selection after last selection
      lastMarker.after(newMarker);
    });
    // add is-active class to add selections button so we don't add multiple eventlisteners
    addMarker.classList.add("is-active");
  }

  const removeMarker = () => {
    const removeElement = (e) => {
      // remove clicked Marker
      const thisElement = e.target.closest('.js-markers-wrapper');
      thisElement.remove();

      // relabel all remaining markers
      const allMarkers = document.querySelectorAll(".js-markers-wrapper");
      allMarkers.forEach((marker, index) => {
        // update title name
        marker.querySelector(".markerTitle input").name = `leaflet.markers[${index}].title`;
        // update latitute name
        marker.querySelector(".markerLatitute input").name = `leaflet.markers[${index}].latitute`;
        // update longitude name
        marker.querySelector(".markerLongitude input").name = `leaflet.markers[${index}].longitude`;
        // update content tile name
        marker.querySelector(".markerContentTitle input").name = `leaflet.markers[${index}].content.title`;
        // update content body name
        marker.querySelector(".markerContentBody textarea").name = `leaflet.markers[${index}].content.body`;
        // update content link name
        marker.querySelector(".markerContentLink input").name = `leaflet.markers[${index}].content.link`;
      });
    };

    // add eventlistener to all remove cta buttons
    const removeMarkers = document.querySelectorAll(".js-remove-marker");
    removeMarkers.forEach(removeMarker => {
      removeMarker.addEventListener("click", removeElement, { once: true });
    });
  }

  const init = () => {
    addMarker();
    removeMarker();
  };
  return { init };
})();

export default manageMapMarkers;
