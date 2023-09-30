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

  const removeSelections = () => {
    const removeSelections = document.querySelectorAll(".js-remove-selection");

    //console.log(removeSelections);

    // add eventlistener to all remove selection buttons
    removeSelections.forEach(removeSelection => {
      removeSelection.addEventListener("click", () => {

        console.log("remove selection");

        // remove clicked selection
        console.log(removeSelection.parentElement);
        removeSelection.parentElement.remove();
      });
    });
  }

  const init = () => {
    addSelections();
    removeSelections();
  };
  return { init };
})();

export default manageSelections;
