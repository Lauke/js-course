/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// With an IF/ELSE

/* (function () {
  let passOne = '';
  document.getElementById('pass-one').addEventListener('input', function () {
    passOne = document.getElementById('pass-one').value;

    if (passOne.length < 10) {
      document.getElementById('counter').innerHTML = passOne.length + '/10';
    } else {
      document.getElementById('pass-one').setAttribute('maxlength', 10);
      document.getElementById('counter').innerHTML = passOne.length + '/10';
    }
  });
})(); */

// LITTLE BIT MORE SIMPLIFIED

(function () {
  const passOne = document.getElementById('pass-one');
  const counter = document.getElementById('counter');

  passOne.setAttribute('maxlength', '10');

  passOne.addEventListener('input', () => {
    const value = passOne.value;
    counter.innerHTML = `${value.length}/10`;
  });
})();
