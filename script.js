
const choices = ["rock", "paper", "scissors"];
const results = document.getElementById("results");

const playerSelection = document.querySelectorAll("button");
playerSelection.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

function playRound(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const outcome = determineOutcome(playerChoice, computerChoice);
  results.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${outcome}`;
}

function determineOutcome(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  const winningCombos = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (winningCombos[playerChoice] === computerChoice) {
    return "You win!";
  } else {
    return "You lose!";
  }
}
