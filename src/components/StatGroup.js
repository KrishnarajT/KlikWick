import React from "react";

const StatGroup = (props) => {
	const stats = [...props.data];
	const what_data = props.what_data;
	console.log(stats);
	return (
		<div className="stats w-2/3 shadow-lg">
			{stats.map((stat) => {
				console.log(stat);
				return (
					<div className="stat overflow-hidden bg-red-100 shadow-lg">
						<div className="stat-figure text-secondary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block h-8 w-8 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
						</div>
						<div className="stat-title">{stat.title}</div>
						{what_data === "light" ? (
							<div className="stat-value">
								{parseFloat(stat.value.light).toFixed(2)}
							</div>
						) : (
							<div className="stat-value">
								{parseFloat(stat.value.sound).toFixed(2)}
							</div>
						)}
						<div className="text-lg break-words">{stat.desc}</div>
					</div>
				);
			})}
		</div>
	);
};

export default StatGroup;
