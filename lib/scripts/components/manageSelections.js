/* global window, document */

/**
 * Manage logo display
 * If logos list fits on viewport width its static, if not logos will rotate automatically
 * @params {*} none
 * @return {function} initializes a logo display
 */
 const manageSelections = (function() {
  const addSelections = () => {
    const addSelections = document.querySelector(".js-add-selection");

    // if add selections button already has eventListener, return
    if (addSelections.classList.contains("is-active")) return;

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
    // add is-active class to add selections button so we don't add multiple eventlisteners
    addSelections.classList.add("is-active");
  }

  const removeSelections = () => {
    const removeElement = (e) => {
      // remove clicked selection
      const thisElement = e.target.closest('.list-selection');
      //thisElement.removeEventListener("click", removeSelections);
      thisElement.remove();

      // relabel all remaining selections
      const allSelections = document.querySelectorAll(".list-selection");
      allSelections.forEach((selection, index) => {
        selection.childNodes[0].nodeValue = `Selection ${index + 1}`;
        selection.querySelector('select').name = `list.selections[${index}]`;
      });
    };

    // add eventlistener to all remove selection buttons
    const removeSelections = document.querySelectorAll(".js-remove-selection");
    removeSelections.forEach(removeSelection => {
      removeSelection.addEventListener("click", removeElement, { once: true });
    });
  }

  const init = () => {
    addSelections();
    removeSelections();
  };
  return { init };
})();

export default manageSelections;
