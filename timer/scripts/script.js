"use strict";

function startTimer() {

	if (timer.seconds !== -1) {
		timer.setTimer();
	}
	else {
		return;
	}

	timer.seconds -= 1;

}

function setTimer(timer) {
	return {
		setTimer: () => {
			let minutes = Math.floor(timer.seconds / 60);
			let seconds = Math.floor(timer.seconds % 60);

			seconds < 10 ? seconds = "0" + seconds : seconds;
			timer.domProperties.domTimer.textContent = `${minutes}:${seconds}`;
		}
	};
}


function createTimer() {
	let getSeconds = document.getElementById("enter-seconds").value;

	let timer = {
		seconds: getSeconds,
		minutes: 0,
		domProperties: {
			domTimer: document.getElementById("timer-text"),
		}
	};

	return Object.assign(timer, setTimer(timer));
}


const startButton = document.getElementById("start-timer");
const stopButton = document.getElementById("stop-timer");
const resetButton = document.getElementById("reset-timer");

let timer = createTimer();
let interval;
startButton.onclick = function () {

	timer.seconds = document.getElementById("enter-seconds").value;

	clearInterval(interval);
	interval = setInterval(startTimer, 1000);

	stopButton.onclick = function () {
		clearInterval(interval);
	};

	resetButton.onclick = function () {
		clearInterval(interval);
		timer.seconds = 0;
		timer.setTimer();
	};
};



