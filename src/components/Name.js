import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Input,
	Checkbox,
	Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Name() {
	let navigate = useNavigate();

	// save to localstorage
	const handleName = () => {
		let name = document.getElementById("name-input").value;
		let id = uuidv4();

		let userdata = JSON.parse(localStorage.getItem("userdata"));

		// some data exists, then you gotta check if the name is the same
		if (userdata) {
			for (let i = 0; i < userdata.length; i++) {
				if (userdata[i].name === name) {
					alert("Name already exists!");
					return;
				}
			}
			userdata.push({
				id: id,
				name: name,
				score: { light: 0, sound: 0 },
			});
			localStorage.setItem("userdata", JSON.stringify(userdata));
		} else {
			const data = {
				id: id,
				name: name,
				score: {
					light: 0,
					sound: 0,
				},
			};
			localStorage.setItem("userdata", JSON.stringify(data));
		}

		localStorage.setItem(
			"currentuser",
			JSON.stringify({ id: id, name: name })
		);
		navigate("/game");
	};
	return (
		<div className="container-div flex h-screen flex-col justify-evenly align-top">
			<div className="flex flex-col gap-5 self-center text-center">
				<h1 className="product-sans text-6xl text-light-blue-700">
					Welcome to KlikWick!
				</h1>
				<h3 className="product-sans text-xl italic text-blue-700">
					How fast can you click?
				</h3>
			</div>

			<div className="flex self-center align-middle">
				<Card className="backgroundcolor w-96">
					<CardHeader
						variant="gradient"
						className="primarycolor mb-4 grid h-28 place-items-center"
					>
						<Typography
							variant="h3"
							color="white"
							className="product-sans text-center text-3xl"
						>
							Enter your Name to Start!
						</Typography>
					</CardHeader>
					<CardBody className="product-sans flex flex-col gap-4">
						<Input label="Name" size="lg" id="name-input" />
					</CardBody>
					<CardFooter className="pt-0">
						<Button
							variant="gradient"
							fullWidth
							className="product-sans"
							onClick={handleName}
						>
							Start!
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
