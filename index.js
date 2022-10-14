let homeScore = document.getElementById("homeScoreEl") // create a variable and link it to an id 
let awayScore = document.getElementById("awayScoreEl") // create a variable and link it to an id
let countHome = 0 // create a variable for home score
let countAway = 0 // create a variable for away score

function increment1Home() { // create a function and its name
    countHome += 1 // define a calculation for the function
    homeScore.textContent = countHome // declare the function output to a variable
}

function increment2Home() {
    countHome += 2
    homeScore.textContent = countHome
}

function increment3Home() {
    countHome += 3
    homeScore.textContent = countHome
}

function increment1Away() {
    countAway += 1
    awayScore.textContent = countAway
}

function increment2Away() {
    countAway += 2
    awayScore.textContent = countAway
}

function increment3Away() {
    countAway += 3
    awayScore.textContent = countAway
}

function resetEl() { 
    countHome = 0 // define the function action on a variable
    countAway = 0
    homeScore.textContent = 0
    awayScore.textContent = 0
}
