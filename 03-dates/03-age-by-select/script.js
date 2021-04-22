/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    /* collect input from the HTML form */
    document.getElementById("run").addEventListener("click", event => {
    let dobDay = document.getElementById("dob-day").value;
    let dobMonth = document.getElementById("dob-month").value;
    let dobYear = document.getElementById("dob-year").value;
    let dobComplete = dobMonth + "/" + dobDay + "/" +dobYear;

    /* get the current date + dob complete */
    
    let now = new Date();
    let dateofBirth = new Date (dobComplete);

    /* calculate the difference   */

    let diff = now.getTime() - dateofBirth.getTime();
    let age = Math.floor(diff / 1000 / 60 / 60 / 24 / 365.25);

    alert (age);
    })

})();
