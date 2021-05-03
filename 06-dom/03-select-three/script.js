/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // SHORT VERSION
    let target = document.querySelectorAll(".target");
    target.forEach(element => element.innerHTML = "Owned!");
   
    // LONG VERSION
    
/* // Get get all elements with class="target"
var x = document.querySelectorAll(".target");

// Create a for loop and change content of all elements with class=".target"
var i;
for (i = 0; i < x.length; i++) {
  x[i].innerHTML = "Owned!";
}  */

})();