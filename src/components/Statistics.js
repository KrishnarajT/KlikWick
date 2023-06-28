// should display basic stats like score of everyone in a table, and maybe some graphs.

import React from "react";
import Navbar from "./Navbar";
import StatCard from "./StatCard";
const Statistics = () => {
	return (
		<div>
			<Navbar />
			<div className="m-4 flex flex-col justify-center gap-5 self-center p-4 text-center">
				<h1 className="product-sans text-accentcolor text-6xl font-light">
					Statistics
				</h1>
			</div>
			<div className="flex flex-wrap justify-center gap-16 p-4">
				<StatCard />
				<StatCard />
				<StatCard />
				<StatCard />
			</div>
		</div>
	);
};

export default Statistics;
