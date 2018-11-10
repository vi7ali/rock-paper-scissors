	let roundCount = 1;
	let playerScore = 0;
	let computerScore = 0;	

	const buttons = document.querySelectorAll("button");
	const resultDiv = document.querySelector("#result");

	buttons.forEach((button) => {
		button.addEventListener('click', (e) => {
			let comChoice = chooseComputer();
			let humChoice = button.id;
			playRound(humChoice, comChoice);
		})
	})

	function chooseComputer() {

		let play = Math.floor(Math.random() * 3) + 1;	//random number between 1 and 3
		
		if(play == 1) play = "rock";
		else if(play == 2) play = "scissors";
		else play = "paper";

		return play;
	}

	function checkWin(roundResult) { //Score, Round and Win check

		let statusMessage = `Player - ${playerScore}, Computer - 
				${computerScore}, Round ${roundCount}`;

		if(roundResult == "playerWin") playerScore++;		
		else if(roundResult == "computerWin") computerScore++;
		
		if(roundCount < 5) { 
			resultDiv.textContent = statusMessage;
			roundCount++;
		}
		else { //Final round
		 	if(computerScore>playerScore) {
				resultDiv.textContent = statusMessage + " COMPUTER WINS";
			}
			else if(computerScore<playerScore) {
				resultDiv.textContent = statusMessage + " Player Wins";
			}
			else {
				resultDiv.textContent = statusMessage + " Draw!";
			}
			roundCount = 1;
			playerScore = 0;
			computerScore = 0;
		}
	}

	function playRound (playerSelection, computerSelection)	{

		switch(playerSelection) {
			case "rock":
				if(computerSelection=="rock")	{
					checkWin("draw");
					break;
				}
				else if(computerSelection=="scissors") {
					checkWin("playerWin");
					break;
				}
				else {
					checkWin("computerWin");
					break;
				}
			case "scissors":
				if(computerSelection=="rock")	{
					checkWin("computerWin");
					break;
				}
				else if(computerSelection=="scissors") {
					checkWin("draw");
					break;
				}
				else {
					checkWin("playerWin");
					break;
				}
			case "paper":
				if(computerSelection=="rock")	{
					checkWin("playerWin");
					break;
				}
				else if(computerSelection=="scissors") {
					checkWin("computerWin");
					break;
				}
				else {
					checkWin("draw");
					break;
				}
			}			
	}
