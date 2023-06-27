// Component to test the reaction time of the user to a light stimulus by changing screen colors from red to greeen.

import React from "react";
import Navbar from "./Navbar";
import { Button } from "@material-tailwind/react";

const Light = () => {
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
				className="flex h-2/4 flex-col items-center justify-center bg-red-500"
				id="playground"
			>
				{/* Score in Ms */}
				<h1
					className="product-sans text-darkcolor text-9xl font-light"
					id="timer"
				>
					3
				</h1>
			</div>
			<div className=" flex justify-center gap-28 p-8 align-middle">
				<Button
					size="lg"
					className="scale-110 transform bg-blue-400 transition duration-500 ease-in-out hover:scale-125 hover:shadow-xl"
				>
					Save Score
				</Button>

				<Button
					size="lg"
					className="scale-110 transform bg-green-400 transition duration-500 ease-in-out hover:scale-125 hover:shadow-xl"
				>
					Play Again
				</Button>
			</div>
		</div>
	);
};

export default Light;
