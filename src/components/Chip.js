import { Chip, Avatar, Typography } from "@material-tailwind/react";
import React from "react";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NameChip() {
	let navigate = useNavigate();
	const userdata = localStorage.getItem("currentuser");
	let name = userdata ? JSON.parse(userdata).name : "Guest";
	return (
		<Chip
			icon={
				<Avatar
					size="xs"
					variant="circular"
					className="h-full w-full -translate-x-0.5"
					alt="candice wu"
					src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
				/>
			}
			value={
				<Typography
					variant="small"
					color="white"
					className="wellfleet font-medium capitalize leading-none"
				>
					{name}
				</Typography>
			}
			
			className="max-w-fit rounded-full px-3.5 py-1.5 accentcolor"
			onClick={() => {
				navigate(`/profile/:${name}`);
			}}
		/>
	);
}
