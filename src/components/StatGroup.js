import React from "react";

const StatGroup = (props) => {

    stat = [...props]

	return (
        <div className="stats shadow w-2/3" >
        {
            stats.map((stat)  => {
			<div className="stat">
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
				<div className="stat-title">stat.title</div>
				<div className="stat-value">stat.value</div>
				<div className="stat-desc">stat.desc</div>
			</div>
            })
        }
		</div>
	);
};

export default StatGroup;
