import {
	Card,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";
import {
	RocketLaunchIcon,
	SunIcon as SunIconSolid,
	SpeakerWaveIcon as SpeakerWaveIconSolid,
} from "@heroicons/react/24/solid";
import {
	ArrowLongRightIcon,
	SunIcon as SunIconOutline,
	SpeakerWaveIcon as SpeakerWaveIconOutline,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SelectionCard({ ...props }) {
	const type = props.props.type;
	const [iconHovering, seticonHovering] = useState(false);

	let navigate = useNavigate();
	const handleOnClick = () => {
		if (type === "light") {
			navigate("/light");
		} else {
			navigate("/sound");
		}
	};

	return (
		<Card
			className="mt-6 hover:cursor-pointer hover:shadow-xl hover:scale-105 transform transition-all duration-500 ease-in-out w-4/12"
			onClick={handleOnClick}
		>
			<CardBody className="flex flex-col items-center justify-center gap-5">
				{type === "light" ? (
					iconHovering === false ? (
						<SunIconOutline
							className="mb-4 h-12 w-12 text-accentcolor"
							onMouseEnter={() => {
								seticonHovering(true);
							}}
						/>
					) : (
						<SunIconSolid
							className="mb-4 h-12 w-12 text-accentcolor"
							onMouseLeave={() => {
								seticonHovering(false);
							}}
						/>
					)
				) : iconHovering === false ? (
					<SpeakerWaveIconOutline
						className="mb-4 h-12 w-12 text-accentcolor"
						onMouseEnter={() => {
							seticonHovering(true);
						}}
					/>
				) : (
					<SpeakerWaveIconSolid
						className="mb-4 h-12 w-12 text-accentcolor"
						onMouseLeave={() => {
							seticonHovering(false);
						}}
					/>
				)}
				<Typography variant="h5" color="blue-gray" className="mb-2 product-sans text-2xl">
					Test Response to {type ? type : "A Stimulus"}
				</Typography>
			</CardBody>
		</Card>
	);
}
