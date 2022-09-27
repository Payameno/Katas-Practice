let prompt = require("prompt-sync")();

  console.log("Welcome to Number Guesser!")
  let answer = prompt("Guess a number: ");
  const randomNumber = Math.floor(Math.random() * 1000);
  let attempts = 3;
  
  const numberGuesser = function() {

    if (answer == randomNumber) {
      console.log("Congratulations! YOu guessed it right!")
    }
    
    if (randomNumber > answer) {
      attempts -= 1;
      console.log("Too Low!")
      if (attempts === 0) {
        console.log("You got it! You took 3 attempts!");
      } else {
        answer = prompt("Guess a number: ");
        numberGuesser();
      }

    }
  
    if (randomNumber < answer) {
      attempts -= 1;
      console.log("Too High!")
      if (attempts === 0) {
        console.log("You got it! You took 3 attempts!");
      } else {
        answer = prompt("Guess a number: ");
        numberGuesser();
      }
    }
  
  }

  numberGuesser();