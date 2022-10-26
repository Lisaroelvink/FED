// JavaScript Document
console.log("hi");


// Hoe element aan te passen door click

// 1. Selecteer element waar op geclicked moet worden met `querySelector`
// 2. Voeg click listener toe met `addEventListener`
// 3. Voeg in deze addEventListener een function(){} toe (.addEventListener('click', function() {} ))
// 4. In die functie, selecteer element dat aangepast moet worden met `querySelector`
// 5. Voeg een className aan dat element toe door `.classList.add('CLASSNAME')`


// Main nav dropdown

// Selecteer button in de main nav. Voor querySelector mag je css selectors gebruiken
var mainNavButton = document.querySelector('main>header>nav>button')

var isMainNavOpen = false

function onMainNavButtonClick() {
    var list = document.querySelector('main>header>nav>ul')

    // list.classList.add('open')


    // Kan optioneel weggehaald en lijn hierboven weer un-commenten
    if (isMainNavOpen === false) {
        list.classList.add('open')
        isMainNavOpen = true
    } else {
        list.classList.remove('open')
        isMainNavOpen = false
    }
}


mainNavButton.addEventListener('click', onMainNavButtonClick)