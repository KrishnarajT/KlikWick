// Component to test the reaction time of the user to a light stimulus by changing screen colors from red to greeen.

import { React, useState } from "react";
import Navbar from "./Navbar";
import { Button } from "@material-tailwind/react";
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";

const Sound = () => {
	const [timeTaken, settimeTaken] = useState(0);

	// method to play game, play sound and then wait for user to click. Count the time in between.
	const playgame = () => {
		const playbutton = document.getElementById("play");
		playbutton.disabled = true;
		const timer = document.getElementById("timer");
		timer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="text-accentcolor mb-4 h-36 w-36 animate-pulse"><path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z"></path><path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z"></path></svg>`;

		// find a random time between 1 and 5 seconds in milliseconds
		let time_to_wait = Math.floor(Math.random() * 10000) + 1000;
		console.log("gonna wait for", time_to_wait);

		let playground = document.getElementById("playground");
		let audio = document.getElementById("audio-element");
		let start = new Date().getTime();
		let timeout = setTimeout(() => {
			audio.play();
			playbutton.disabled = false;
		}, time_to_wait);

		const listener = () => {
			// get the end time
			let end = new Date().getTime();
			// calculate the time taken
			let timeTaken = end - start;
			if (timeTaken < time_to_wait) {
				timer.innerHTML = "Too Early!";
				playground.removeEventListener("click", listener);
				clearTimeout(timeout);
				playbutton.disabled = false;
				return;
			}

			timeTaken = timeTaken - time_to_wait - 100;
			// set the time taken
			settimeTaken(timeTaken);
			// change the text to the time taken
			timer.innerHTML = timeTaken + "ms";
			playbutton.disabled = false;
			playground.removeEventListener("click", listener);
		};
		playground.addEventListener("click", listener);
	};

	const handleSave = () => {
		// get the score from localstorage
		let score = JSON.parse(localStorage.getItem("currentuser"));
		score = score.score.light;

		// update the score
		if (score === 0) {
			score = timeTaken;
		} else {
			score = (score + timeTaken) / 2;
		}
		// save the score to localstorage
		let userdata = JSON.parse(localStorage.getItem("userdata"));
		for (let i = 0; i < userdata.length; i++) {
			if (
				userdata[i].id ===
				JSON.parse(localStorage.getItem("currentuser")).id
			) {
				userdata[i].score.sound = score;
				break;
			}
		}
		localStorage.setItem("userdata", JSON.stringify(userdata));
		settimeTaken(0);
	};

	return (
		<div className="relative h-screen">
			<Navbar />
			{/* Header telling the user what to do */}
			<div>
				<div className="m-4 flex flex-col justify-center gap-5 self-center p-4 text-center">
					<h1 className="product-sans text-primarycolor text-6xl font-light">
						Press <u>Spacebar</u> or <u>Click</u> <i>as soon as</i>
						<br></br>
						<u>Hear</u> the beep
					</h1>
				</div>
			</div>
			<div
				className="secondarycolor flex h-2/4 flex-col items-center justify-center gap-36 "
				id="playground"
			>
				{/* Score in Ms */}
				<h1
					className="product-sans text-darkcolor text-9xl font-light"
					id="timer"
				>
					<SpeakerWaveIcon className="text-accentcolor mb-4 h-36 w-36 animate-pulse" />
				</h1>
				<audio
					id="audio-element"
					src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
				>
					<source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
				</audio>
			</div>
			<div className=" flex justify-center gap-28 p-8 align-middle">
				<Button
					size="lg"
					className="w-36 scale-110 transform bg-blue-400 transition duration-500 ease-in-out hover:scale-125 hover:shadow-xl"
					onClick={handleSave}
				>
					Save Score
				</Button>

				<Button
					size="lg"
					className="w-36 scale-110 transform bg-green-400 transition duration-500 ease-in-out hover:scale-125 hover:shadow-xl"
					onClick={playgame}
					id="play"
				>
					Play
				</Button>
			</div>
		</div>
	);
};

export default Sound;
