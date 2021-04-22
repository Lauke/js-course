/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("target").innerHTML = new Date().toUTCString();

    /*  OVERCOMPLICATED CODE  */
    /*   const date = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      document.getElementById('target').innerHTML = date.toLocaleDateString('en-US', options) + ' ' + time; */

})();