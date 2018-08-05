var wins = 0;
var losses = 0;
var remaining_guesses = 9;
var guesses = [];


var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];



var rand = Math.floor(Math.random() * 27);
var letter = letters[rand];
letter = letter.toUpperCase();

document.addEventListener("keypress", function(event){

   var input = String.fromCharCode(event.which);
   input = input.toUpperCase();

   if(input === letter)
   {
        wins = addWin(wins);
       remaining_guesses = resetRemainingGuesses();
       guesses = resetGuesses(guesses);
       listGuesses(guesses);
       letter = newLetter(letter, letters);
   }
   else
   {
       guesses = addGuess(input, guesses);
       listGuesses(guesses);
       remaining_guesses = reduceGuesses(remaining_guesses);

       if(remaining_guesses < 1)
       {
           losses = addLoss(losses);
           remaining_guesses = resetRemainingGuesses();
           guesses = resetGuesses(guesses);
           listGuesses(guesses);
           letter = newLetter(letter, letters);
       }
   }
});

function addLoss(losses){
    losses++;
    document.getElementById("loss-counter").innerHTML = losses;
    return losses;
}

function reduceGuesses(num){
    num--;
    document.getElementById("remaining-guesses").innerHTML = num;
    return num;
}

function newLetter(letter, letters)
{
    var rand = Math.floor(Math.random() * 27);
    letter = letters[rand];
    letter = letter.toUpperCase();
    return letter;
}

function addWin(num){
    num++;
    document.getElementById("win-counter").innerHTML = num;
    return num;
}

function resetRemainingGuesses(remaining_guesses){
    remaining_guesses = 9;
    document.getElementById("remaining-guesses").innerHTML = remaining_guesses;
    return remaining_guesses;
}

function resetGuesses(guesses)
{
    var empty = [];
    return empty;
}

function addGuess(char, guesses){
    guesses.push(char);
    return guesses;
}

function listGuesses(guesses){
    var str = "";
    for(var i = 0; i < guesses.length; i++)
    {
        if(i == 0)
        {
            str += guesses[i];
        }
        else
        {
            str += ", ";
            str += guesses[i];
        }
    }
    
    document.getElementById("guesses").innerHTML = str;
        
}