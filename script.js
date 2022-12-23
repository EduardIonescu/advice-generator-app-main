const url = "https://api.adviceslip.com/advice";

const adviceNumber = document.querySelector("#advice-number");
const quote = document.querySelector(".quote");
const diceButton = document.querySelector(".button-dice");

diceButton.addEventListener("click", showNewQuote);

async function getQuote() {
	try {
		let res = await fetch(url).then((res) => res.json());
		return res;
	} catch (err) {
		console.log(err);
	}
}

async function showNewQuote() {
	const data = await getQuote();
	const adviceId = data.slip.id;
	const adviceQuote = data.slip.advice;

	adviceNumber.textContent = adviceId;
	quote.textContent = adviceQuote;
}
