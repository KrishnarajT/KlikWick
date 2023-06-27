// Simple componenet just to let the user select between light vs sound, and to check scores.
// also displays users name on top right corner.

import React from "react";
import "../style.css";
import NameChip from "./Chip";
import SelectionCard from "./Card";
import ComplexNavbar from "./Navbar";
const Game = () => {
	return (
		<div>
			<ComplexNavbar />
			<div className="m-4 flex flex-col justify-center gap-5 self-center p-4 text-center">
				<h1 className="product-sans font-light text-6xl text-accentcolor">
					What would you like to test?
				</h1>
			</div>
			<div className="flex flex-wrap justify-center gap-16 p-4">
                <SelectionCard props={{ type: "light" }} />
				<SelectionCard props={{ type: "sound" }} />
			</div>
		</div>
	);
};

export default Game;
