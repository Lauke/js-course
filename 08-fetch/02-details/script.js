/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById('run').addEventListener('click', function () {

        let input = document.querySelector('input').value;

        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(data => {

                    let heroes = data;

                    let findId = parseInt(document.getElementById('hero-id').value);
                    let result = heroes.find(hero => hero.id === findId);

                        let template = document.getElementById('tpl-hero').content.cloneNode(true);
                        let target = document.getElementById('target');

                        template.querySelector('strong.name').innerText = result.name;
                        template.querySelector('em.alter-ego').innerText = result.alterEgo;
                        template.querySelector('p.powers').innerText = result.abilities;

                        target.appendChild(template);
                    })
                })

})();

// TO DO:
// ALLE FUNCTIES BUITEN DE EVENTLISTENER ZETTEN
// ALLE DATA OP ID BINNENHALEN