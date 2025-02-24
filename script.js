let score1 = 0;
let score2 = 0;
let totalRounds = 5;
let currentRound = 0;

document.getElementById("startGame").addEventListener("click", startGame);
document.getElementById("rollButton").addEventListener("click", rollDice);
document.getElementById("resetButton").addEventListener("click", resetGame);

function startGame() {
    totalRounds = parseInt(document.getElementById("rounds").value);
    if (totalRounds < 1) {
        alert("Please enter a valid number of rounds.");
        return;
    }

    score1 = 0;
    score2 = 0;
    currentRound = 0;

    document.getElementById("score1").innerText = score1;
    document.getElementById("score2").innerText = score2;
    document.getElementById("winnerMessage").innerText = "";
    
    // Update label to show entered rounds
    document.getElementById("roundLabel").innerText = `Entered Number of Rounds: ${totalRounds}`;
    document.getElementById("rounds").style.display = "none";

    document.getElementById("roundDisplay").style.display = "block";
    document.getElementById("roundDisplay").innerText = `Turn: 1`;

    document.querySelector(".container").style.display = "flex";
    document.getElementById("rollButton").style.display = "block";
    document.getElementById("resetButton").style.display = "block";
    document.getElementById("startGame").style.display = "none";
}

function rollDice() {
    if (currentRound >= totalRounds) return;

    let roll1 = Math.floor(Math.random() * 6) + 1;
    let roll2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dice1").src = `dice${roll1}.png`;
    document.getElementById("dice2").src = `dice${roll2}.png`;

    score1 += roll1;
    score2 += roll2;

    document.getElementById("score1").innerText = score1;
    document.getElementById("score2").innerText = score2;

    currentRound++;

    if (currentRound >= totalRounds) {
        endGame();
    } else {
        updateRoundDisplay();
    }
}

function updateRoundDisplay() {
    let roundSuffix = getNumberSuffix(currentRound + 1);
    document.getElementById("roundDisplay").innerText = `${currentRound + 1}${roundSuffix} Turn`;
}

function endGame() {
    document.getElementById("rollButton").disabled = true;
    document.getElementById("winnerMessage").innerText =
        score1 > score2 ? "🏆 Player 1 Wins!" :
        score2 > score1 ? "🏆 Player 2 Wins!" :
        "🤝 It's a Tie!";
    document.getElementById("roundDisplay").innerText = "Game Over!";
}

function resetGame() {
    score1 = 0;
    score2 = 0;
    currentRound = 0;

    document.getElementById("score1").innerText = score1;
    document.getElementById("score2").innerText = score2;
    document.getElementById("dice1").src = `dice1.png`;
    document.getElementById("dice2").src = `dice1.png`;
    document.getElementById("winnerMessage").innerText = "";
    document.getElementById("roundDisplay").style.display = "none";

    document.getElementById("roundLabel").innerText = `Enter Number of Rounds:`;
    document.getElementById("rounds").style.display = "inline";
    
    document.getElementById("rollButton").disabled = false;
    document.querySelector(".container").style.display = "none";
    document.getElementById("rollButton").style.display = "none";
    document.getElementById("resetButton").style.display = "none";
    document.getElementById("startGame").style.display = "block";
}

function getNumberSuffix(number) {
    if (number === 1) return "st";
    if (number === 2) return "nd";
    if (number === 3) return "rd";
    return "th";
}
