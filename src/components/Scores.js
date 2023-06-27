// A new tab kinda thing that shows the scores of the players, and the average and high scores.

import React from "react";

import Navbar from "./Navbar";
import Table from "./Table";
const Scores = () => {
	return (
		<div>
			<Navbar />
			<div className="m-4 flex flex-col justify-center gap-5 self-center p-4 text-center">
				<h1 className="product-sans text-darkcolor text-6xl font-light">
					Scores
				</h1>
				<Table />
			</div>
		</div>
	);
};

export default Scores;
