import {
	Card,
	CardHeader,
	CardBody,
	Typography,
} from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import "remixicon/fonts/remixicon.css";

export default function Example(props) {

    const { title, name, score } = props;
    console.log(title, name, score)

	return (
		<Card
			shadow={false}
			className="mt-6 w-4/12 transform bg-red-100 shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl product-sans h-1/4"
		>
			<CardHeader
				color="transparent"
				floated={false}
				shadow={false}
				className="mx-4 flex flex-col items-center gap-4 pb-8 pt-0 align-middle justify-center text-center self-center"
			>
				<UserCircleIcon className="text-accentcolor h-16" />
				{/* <svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-user"
					width="50"
					height="50"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="#009988"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
					<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
				</svg> */}
				<div className="flex w-full flex-col gap-0.5">
					<div className="flex items-center justify-between">
						<Typography variant="h5" color="blue-gray" className="product-sans text-3xl text-center">
							{name}
						</Typography>
						{/* <div className="5 flex items-center gap-0">
							<StarIcon className="h-5 w-5 text-yellow-700" />
						</div> */}
					</div>
					{/* <Typography color="blue-gray product-sans">
						Frontend Lead @ Google
					</Typography> */}
				</div>
			</CardHeader>
			<CardBody className="mb-6 p-4 product-sans flex flex-col gap-5 items-center justify-center align-middle">
				<Typography className="product-sans text-4xl text-accentcolor">
                    {title}
                </Typography>
				<Typography className="product-sans text-3xl">
                    {score}
                </Typography>
			</CardBody>
		</Card>
	);
}
