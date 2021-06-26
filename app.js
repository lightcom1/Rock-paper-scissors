const buttons = document.querySelectorAll('.choice');
const botChoiceText = document.querySelector('.bot-choice');
const result = document.querySelector('.result');
let botChoice = ['scissors', 'paper', 'rock'];

const check = (e) => {
	let userChoice = e.target.classList[0];
	if(userChoice === 'restart') {
		restartGame();
		return;
	}
	let botChoiceIndex = Math.floor(Math.random() * 3);
	let botChoiceRes = 0;
	botChoiceRes = botChoice[botChoiceIndex] === 'rock' ? 'Камень' : botChoice[botChoiceIndex] === 'scissors' ? 'Ножницы' : botChoice[botChoiceIndex] === 'paper' ? 'Бумагу' : '';
	botChoiceText.textContent = '';
	if((userChoice === 'scissors' &&  botChoice[botChoiceIndex] === 'scissors') ||
	    userChoice === 'paper' &&  botChoice[botChoiceIndex] === 'paper' ||
		userChoice === 'rock' &&  botChoice[botChoiceIndex] === 'rock') {
			botChoiceText.textContent = botChoiceRes;
			result.textContent = 'Ничья 😏👏';
			disableButtons(userChoice);
			return;
	}
	if((userChoice === 'scissors' &&  botChoice[botChoiceIndex] === 'paper') ||
	    userChoice === 'paper' &&  botChoice[botChoiceIndex] === 'rock' ||
		userChoice === 'rock' &&  botChoice[botChoiceIndex] === 'scissors') {
			botChoiceText.textContent = botChoiceRes;
			result.textContent = 'Ты победил 👍, купи себе конфетку 😉';
			disableButtons(userChoice);
			return;
	}
	if((botChoice[botChoiceIndex] === 'scissors' &&  userChoice === 'paper') ||
		botChoice[botChoiceIndex] === 'paper' &&  userChoice === 'rock' ||
		botChoice[botChoiceIndex] === 'rock' &&  userChoice === 'scissors') {
			botChoiceText.textContent = botChoiceRes;
			result.textContent = 'Ты проиграл 👎, попробуй ещё раз 🤭';
			disableButtons(userChoice);
			return;
	}
}
buttons.forEach(btn => {
	btn.addEventListener('click', check);
});

const restartGame = () => {
	buttons.forEach(btn => {
		btn.disabled = false;
		btn.classList.remove('hide');
	});
	botChoiceText.textContent = '';
	result.textContent = '';
}

const disableButtons = (current) => {
	buttons.forEach(btn => {
		if(btn.classList[0] != current && btn.classList[0] != 'restart') {
			btn.classList.add('hide');
		}
		if(btn.classList[0] != 'restart') {
			btn.disabled = true;
		}
	});
}