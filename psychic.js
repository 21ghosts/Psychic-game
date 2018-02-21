var letters = ['a', 'b', 'c',
                'd', 'e', 'f',
                'g', 'h', 'i',
                'j', 'k', 'l',
                'm', 'n', 'o',
                'p', 'q', 'r',
                's', 't', 'u',
                'v', 'w', 'x',
                'y', 'z'];

var guessThusFar = [];
var winCount = 0;
var lossCount = 0;
var guessCount = 8;


var letterToGuess = letters[Math.floor(Math.random() * letters.length)]; // selects random letter on screen load

document.onkeypress = function game(event) 
{

    var userInput = String.fromCharCode(event.keyCode).toLowerCase(); // this will store my userInput and push it to my guessThusFar array
    guessThusFar.push(userInput);
    

    if(userInput === letterToGuess) // if the userInput is equall to letterToguess, winCount will increment by 1, guessCount will return to 8, and guessThusFar will return to empty
    {
        winCount++;
        guessCount = 8;
        guessThusFar = [];
    }
   else if(guessCount === 0) // if guessCount becomes equal to 0 lossCount will be incremented by 1, guessCount will return to 8, and guessThusFar will retun to empty
   {
       lossCount++;
       guessCount = 8;
       guessThusFar = [];
   }
   else if(userInput !== letterToGuess){ // if userInput should not equal letterToGuess guessCount will decrease by 1
       guessCount--;
   }
   //this will display all changes and updates to intinded area in html
    var html = "<h1 class='text-center'>The Psyhcic Game</h1>" + "<hr>" + "<p class='text-center'>Guess the letter:</p>" + "<br>" + 
        "<p class='text-center'>Wins: " + winCount + "</p>" + "<br>" + "<p class='text-center'>Losses: " + lossCount + "</p>" + "<br>" +
        "<p class='text-center'>Remaining guesses: " + guessCount + "</p>" + "<br>" +"<p class='text-center'>Guesses thus far: " + guessThusFar + "</p>";

    document.querySelector("#content").innerHTML = html // dispays html to content id, in index.html
}

document.querySelector("#content").innerHTML = html