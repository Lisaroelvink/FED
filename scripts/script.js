// JavaScript Document
console.log("hi");


// Hoe element aan te passen door click

// 1. Selecteer element waar op geclicked moet worden met `querySelector`
// 2. Voeg click listener toe met `addEventListener`
// 3. Voeg in deze addEventListener een function(){} toe (.addEventListener('click', function() {} ))
// 4. In die functie, selecteer element dat aangepast moet worden met `querySelector`
// 5. Voeg een className aan dat element toe door `.classList.add('CLASSNAME')`



// Header nav hamburgermenu

var headerNavButton = document.querySelector('header>nav>button')
var headerNavList = document.querySelector('header>nav>ul')

function headerNavOpen() {
    headerNavList.classList.toggle('isNuOpen');
}

headerNavButton.addEventListener('click', headerNavOpen);

// Tekst vergroten

var deButton = document.querySelector("header>nav>button:nth-of-type(2)");

function groot() {
    document.documentElement.classList.toggle("groot");
}
deButton.addEventListener("click", groot);

// Main nav dropdown

// Selecteer button in de main nav. Voor querySelector mag je css selectors gebruiken
var mainNavButton = document.querySelector('main>header>nav>button')
var mainNavList = document.querySelector('main>header>nav>ul')

function onMainNavButtonClick() {
    mainNavList.classList.toggle('open')
}


mainNavButton.addEventListener('click', onMainNavButtonClick)


// Dark theme

var maanButton = document.querySelector("body>header>nav>button:nth-of-type(3)");

maanButton.addEventListener("click", dark);

function dark() {
    document.documentElement.classList.toggle("dark");
}