const secretNumber = Math.round(Math.random() * 10);

for (let attempts = 3; attempts > 0; attempts--) {
  const guess = prompt(`Guess a number between 1 and 10. ${attempts} attempts left`);
  const guessNumber = Number(guess);
  if (guessNumber === secretNumber) {
    console.log('Correct! You guessed the number 🎉');
    break;
  } else if (attempts > 1) {
    if (guessNumber < secretNumber) {
      console.log('Too low! Try again.');
    } else {
      console.log('Too high! Try again.');
    }
  } else {
    console.log('Sorry, you lose!');
  }
}
