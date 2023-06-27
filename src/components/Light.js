// Component to test the reaction time of the user to a light stimulus by changing screen colors from red to greeen.

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Button } from "@material-tailwind/react";

const Light = () => {
	const [timeTaken, settimeTaken] = useState(0);

	// function to play game
	const playGame = () => {
		// get the playground
		let playground = document.getElementById("playground");
		// get the timer
		let timer = document.getElementById("timer");

		timer.innerHTML = "Wait for Green";

		// find a random time between 1 and 5 seconds in milliseconds
		let time_to_wait = Math.floor(Math.random() * 10000) + 1000;
		console.log("gonna wait for", time_to_wait);
		// start the timer
		let start = new Date().getTime();

		let timeout = setTimeout(() => {
			// change the color of the playground to green
			playground.classList.remove("bg-red-500");
			playground.classList.add("bg-green-500");
			// change the text to "Click!"
			timer.innerHTML = "Click!";
		}, time_to_wait);

		const event_handle = () => {
			// get the end time
			let end = new Date().getTime();
			// calculate the time taken
			let timeTaken = end - start;
			if (timeTaken < time_to_wait) {
				timer.innerHTML = "Too Early!";
				playground.removeEventListener("click", event_handle);
				clearTimeout(timeout);
				return;
			}

			timeTaken = timeTaken - time_to_wait - 100;
			// set the time taken
			settimeTaken(timeTaken);
			// change the text to the time taken
			timer.innerHTML = timeTaken + "ms";

			// change the color of the playground to red
			playground.classList.remove("bg-green-500");
			playground.classList.add("bg-red-500");
			// remove the event listener
			playground.removeEventListener("click", event_handle);
		};
		// add event listener to the playground
		playground.addEventListener("click", event_handle);
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
				userdata[i].score.light = score;
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
						the Color turns{" "}
						<span className="text-green-500">Green</span>
					</h1>
				</div>
			</div>
			<div
				className="flex h-2/4 flex-col items-center justify-center bg-red-500 hover:cursor-pointer"
				id="playground"
			>
				{/* Score in Ms */}
				<h1
					className="product-sans text-9xl font-light text-red-200"
					id="timer"
				>
					Go!
				</h1>
			</div>
			<div className=" flex justify-center gap-28 p-8 align-middle">
				<Button
					size="lg"
					className="scale-110 transform bg-blue-400 transition duration-500 ease-in-out hover:scale-125 hover:shadow-xl"
					onClick={handleSave}
				>
					Save Score
				</Button>

				<Button
					size="lg"
					className="scale-110 transform bg-green-400 transition duration-500 ease-in-out hover:scale-125 hover:shadow-xl"
					onClick={playGame}
				>
					Play
				</Button>
			</div>
		</div>
	);
};

export default Light;
