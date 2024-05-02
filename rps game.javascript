<!DOCTYPE html>
<html>
<head>
  <title>Rock Paper Scissors</title>
</head>
<body>
  <p>Rock Paper Scissors</p>
  <button onclick="play('paper')">Paper</button>
  <button onclick="play('scissors')">Scissors</button>

  <script>
    function play(userMove) {
      const randomNumber = Math.random();
      let computerMove = '';

      if (randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else {
        computerMove = 'scissors';
      }

      let result = '';

      if (computerMove === userMove) {
        result = 'It\'s a tie.';
      } else if (
        (userMove === 'rock' && computerMove === 'scissors') ||
        (userMove === 'paper' && computerMove === 'rock') ||
        (userMove === 'scissors' && computerMove === 'paper')
      ) {
        result = 'You win!';
      } else {
        result = 'Computer wins!';
      }

      alert(`You picked ${userMove}. Computer picked ${computerMove}. ${result}`);
    }
  </script>
</body>
</html>
