/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/* When hovering over the image, change its source attribute to the value specified in the "data-hover"
attribute. */

(function() {

    const img = document.querySelector('img');
    const start = img.src; // kiss.svg
    const hover = img.getAttribute('data-hover'); //specified attribute kiss-wink-heart.svg

    img.onmouseover = function () { img.src = hover; }
    img.onmouseout = function () { img.src = start; } // revert
    
})();