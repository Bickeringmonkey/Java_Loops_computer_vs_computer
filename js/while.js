var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
}

while( guess !== randomNumber ) {
    guess = getRandomNumber( upper );
    attempts +=1;
}
document.write("<p>The random number that was generated was: " + randomNumber + "</p>");
document.write("<p>It took Bob the computer " + attempts + " attempts to get it correct.</p>");