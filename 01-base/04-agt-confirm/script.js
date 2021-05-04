/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/* (function () {

    let answer = false;
    while (answer == false) {
        age = prompt('What is your age?');
        gender = prompt('What is your gender?');
        town = prompt('What is your town?');
        if (confirm('Are you ' + age + ', are you ' + gender + ', and are you from ' + town + '? Is your info correct?')) {
            answer = true;
        }
    }

})(); */

(function checkIdentity() {

    let age = prompt('What is your age?');
    let gender = prompt('What is your gender?');
    let town = prompt('What is your town?');

    let identity = confirm('Are you ' + age + ', Are you ' + gender + ', and are you from ' + town + '? Is your info correct?');
    if (identity == true) {
        alert('I heard ' + town + ' is a nice city!')
    }
      else {
          checkIdentity();
    }
  })();