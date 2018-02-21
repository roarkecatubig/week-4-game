//VARIABLES
var additionArray = [];
var gameObjective;
var winsCount = 0;
var lossesCount = 0;
var totalScore = 0;
var crystalBag = {
    Red: 0,
    Blue: 0,
    Yellow: 0,
    Green: 0
};

$(document).ready(function(){

//FUNCTIONS

// This function initializes the game by reseting variables.
function initGame() {
    additionArray.length = 0;
    gameObjective;
    totalScore = 0;
    crystalBag = {
        Red: 0,
        Blue: 0,
        Yellow: 0,
        Green: 0
    };
    objectiveSelector()
    document.querySelector("#totalScore").innerHTML = totalScore;
    }

// This function selects a random number between 19 and 120.
function objectiveSelector() {
    gameObjective = 0;
    max = Math.ceil(120);
    min = Math.floor(19);
    gameObjective = Math.floor(Math.random() * (max - min)) + min;
    document.querySelector("#gameMatch").innerHTML = gameObjective;
    console.log("Random number: " + gameObjective);
    crystalValueSelector()
}

// This function iterates over each property in var crystalBag and selects a crystal value for each crystal.
function crystalValueSelector() {
    for (var property1 in crystalBag) {
        max = Math.ceil(13);
        min = Math.floor(1);
        crystalBag[property1] = Math.floor(Math.random() * (max - min)) + min;
    }

    console.log(crystalBag);
}

// Monitors the clicks of the user and updates total score based on crystal button they click. 
function crystalClicks() {
    $(".redCrystal").on("click", function() {
        additionArray.push(crystalBag.Red);
        console.log(additionArray);
        totalScore = additionArray.reduce(addArray);
        document.querySelector("#totalScore").innerHTML = totalScore;
        winCondition(totalScore);
        console.log(totalScore);
    });

    $(".blueCrystal").on("click", function() {
        additionArray.push(crystalBag.Blue);
        console.log(additionArray);
        totalScore = additionArray.reduce(addArray);
        document.querySelector("#totalScore").innerHTML = totalScore;
        winCondition(totalScore);
        console.log(totalScore);
    });

    $(".yellowCrystal").on("click", function() {
        additionArray.push(crystalBag.Yellow);
        console.log(additionArray);
        totalScore = additionArray.reduce(addArray);
        document.querySelector("#totalScore").innerHTML = totalScore;
        winCondition(totalScore);
        console.log(totalScore);
    });

    $(".greenCrystal").on("click", function() {
        additionArray.push(crystalBag.Green);
        console.log(additionArray);
        totalScore = additionArray.reduce(addArray);
        document.querySelector("#totalScore").innerHTML = totalScore;
        winCondition(totalScore);
        console.log(totalScore);
    });
}

// This function adds all the elements in the additionArray
function addArray(total, num) {
    return total + num;
}

// This function compares the total score and checks for a win/lose condition to occur.
function winCondition(total) {    
    total = totalScore
    if (totalScore === gameObjective) {
        document.querySelector("#gamePrompts").innerHTML = "GAME OVER YOU WIN!";
        console.log("GAME OVER YOU WIN! Click button to Start New Game")
        winsCount += 1
        document.querySelector("#wins").innerHTML = winsCount;
        initGame()

    }

    else if (totalScore > gameObjective) {
        document.querySelector("#gamePrompts").innerHTML = "GAME OVER YOU LOSE! Click button to Start New Game";
        console.log("GAME OVER YOU LOSE!")
        lossesCount += 1
        document.querySelector("#losses").innerHTML = lossesCount;
        initGame()
    }

}

//GAME EXECUTION
$(".start").on("click", initGame) 
crystalClicks()
});
