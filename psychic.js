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
var guessCount = 5;


var letterToGuess = letters[Math.floor(Math.random() * letters.length)]; // selects random letter on screen load

document.onkeypress = function game(event) 
{

    var userInput = String.fromCharCode(event.keyCode).toLowerCase();
    guessThusFar.push(userInput);
    

    if(userInput === letterToGuess)
    {
        winCount++;
        guessCount = 5;
        guessThusFar = [];
    }
   else if(guessCount === 0)
   {
       lossCount++;
       guessCount = 5;
       guessThusFar = [];
   }
   else if(userInput !== letterToGuess){
       guessCount--;
   }

    var html = "<h1>The Psyhcic Game</h1>" + "<p>Guess the letter:</p>" + 
        "<p>Wins: " + winCount + "</p>" + "<p>Losses: " + lossCount + "</p>" + 
        "<p>Remaining guesses: " + guessCount + "</p>" + "<p>Guesses thus far: " + guessThusFar + "</p>";

    document.querySelector("#content").innerHTML = html
}

document.querySelector("#content").innerHTML = html