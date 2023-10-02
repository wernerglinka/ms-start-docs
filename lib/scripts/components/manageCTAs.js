/* global window, document */

/**
 * Manage logo display
 * If logos list fits on viewport width its static, if not logos will rotate automatically
 * @params {*} none
 * @return {function} initializes a logo display
 */
 const manageCTAs = (function() {
  const addCTAs = () => {
    const addCTA = document.querySelector(".js-add-cta");

    // if add button button already has eventListener, return
    if (addCTA.classList.contains("is-active")) return;

    // add event listener to add selection button
    addCTA.addEventListener("click", () => {
      // get all existing ctas
      const allCTAs = document.querySelectorAll(".js-cta-fields-wrapper");
      // get number of ctas
      const ctasCount = allCTAs.length;
      // get last cta
      const lastCTA = allCTAs[ctasCount - 1];
      // build new cta
      const newCTA = lastCTA.cloneNode(true);
      // update url name
      newCTA.querySelector(".url input").name = `ctas[${ctasCount}].url`;
      // update label name
      newCTA.querySelector(".label input").name = `ctas[${ctasCount}].label`;
      // update isExternal name
      newCTA.querySelector(".isExternal input").name = `ctas[${ctasCount}].isExternal`;
      // update isButton name
      newCTA.querySelector(".isButton input").name = `ctas[${ctasCount}].isButton`;
      // update buttonStyle name
      newCTA.querySelector(".buttonStyle input").name = `ctas[${ctasCount}].buttonStyle`;
      // append new selection after last selection
      lastCTA.after(newCTA);
    });
    // add is-active class to add selections button so we don't add multiple eventlisteners
    addCTA.classList.add("is-active");
  }

  const removeCTAs = () => {
    const removeElement = (e) => {
      // remove clicked CTA
      const thisElement = e.target.closest('.js-cta-fields-wrapper');
      thisElement.remove();

      // relabel all remaining CTA
      const allCTAs = document.querySelectorAll(".js-cta-fields-wrapper");
      allCTAs.forEach((cta, index) => {
        // update url name
        cta.querySelector(".url input").name = `ctas[${index}].url`;
        // update label name
        cta.querySelector(".label input").name = `ctas[${index}].label`;
        // update isExternal name
        cta.querySelector(".isExternal input").name = `ctas[${index}].isExternal`;
        // update isButton name
        cta.querySelector(".isButton input").name = `ctas[${index}].isButton`;
        // update buttonStyle name
        cta.querySelector(".buttonStyle input").name = `ctas[${index}].buttonStyle`;  
      });
    };

    // add eventlistener to all remove cta buttons
    const removeCTAs = document.querySelectorAll(".js-remove-cta");
    removeCTAs.forEach(removeCTA => {
      removeCTA.addEventListener("click", removeElement, { once: true });
    });
  }

  const init = () => {
    addCTAs();
    removeCTAs();
  };
  return { init };
})();

export default manageCTAs;
