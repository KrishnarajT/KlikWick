import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Light", "Sound"];
let TABLE_ROWS = ["Guest", 0, 0] 

export default function Example() {
	// get table dat from localstorage
	const user_data = JSON.parse(localStorage.getItem("userdata"));
    
    // convert user_data to table rows by spreading the object
    TABLE_ROWS = [...user_data];

    console.log(TABLE_ROWS);
    

	return (
		<Card className="h-full w-full overflow-scroll">
			<table className="w-full min-w-max table-auto text-left">
				<thead>
					<tr>
						{TABLE_HEAD.map((head) => (
							<th
								key={head}
								className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
							>
								<Typography
									variant="small"
									color="blue-gray"
									className="font-normal leading-none opacity-70"
								>
									{head}
								</Typography>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{TABLE_ROWS.map(({ id, name, score }, index) => {
						const isLast = index === TABLE_ROWS.length - 1;
						const classes = isLast
							? "p-4"
							: "p-4 border-b border-blue-gray-50";

						return (
							<tr key={id}>
								<td className={classes}>
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal"
									>
										{name}
									</Typography>
								</td>
								<td className={`${classes} bg-blue-gray-50/50`}>
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal"
									>
										{score.light}
									</Typography>
								</td>
								<td className={classes}>
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal"
									>
										{score.sound}
									</Typography>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</Card>
	);
}
