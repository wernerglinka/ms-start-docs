/* global window, document */

/**
 * Manage logo display
 * If logos list fits on viewport width its static, if not logos will rotate automatically
 * @params {*} none
 * @return {function} initializes a logo display
 */
 const lists = (function() {
  const init = () => {
    if (document.querySelector(".js-logos")) {
      logoLists();
    }
    if (document.querySelector(".js-add-selection")) {
      addSelections();
    }
  };

  const logoLists = () => {
    const allLogosLists = document.querySelectorAll(".js-logos");
    let viewportWidth = window.innerWidth;
    allLogosLists.forEach(logosList => {
      if (logosList.offsetWidth > viewportWidth) {
        logosList.parentElement.classList.remove("no-animation");
      } else {
        logosList.parentElement.classList.add("no-animation");
      }
    });

    // add a resize observer to check if logos list fits on viewport width
    const resizeObserver = new ResizeObserver(entries => {
      viewportWidth = window.innerWidth;

      allLogosLists.forEach(logosList => {
        if (logosList.offsetWidth > viewportWidth) {
          logosList.parentElement.classList.remove("no-animation");
        } else {
          logosList.parentElement.classList.add("no-animation");
        }
      });
    });

    // observe all logos lists
    allLogosLists.forEach(logosList => {
      resizeObserver.observe(document.body);
    });  
  }

  const addSelections = () => {
    const addSelections = document.querySelector(".js-add-selection");

    // add event listener to add selection button
    addSelections.addEventListener("click", () => {
      // get all existing selections
      const allSelections = document.querySelectorAll(".list-selection");
      // get number of selections
      const selectionsCount = allSelections.length;
      // get last selection
      const lastSelection = allSelections[selectionsCount - 1];
      // build new selection
      const newSelection = lastSelection.cloneNode(true);
      // update label
      newSelection.childNodes[0].nodeValue = `Selection ${selectionsCount + 1}`;
      // update select name
      newSelection.querySelector('select').name = `list.selections[${selectionsCount}]`;
      // append new selection after last selection
      lastSelection.after(newSelection);
    });
  }
  return { init };
})();

export default lists;
