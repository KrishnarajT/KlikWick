import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Avatar,
} from "@material-tailwind/react";
import { StarIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import "remixicon/fonts/remixicon.css";

export default function Example() {
	return (
		<Card
			shadow={false}
			className="mt-6 w-4/12 transform bg-red-100 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl product-sans"
		>
			<CardHeader
				color="transparent"
				floated={false}
				shadow={false}
				className="mx-4 flex items-center gap-4 pb-8 pt-0"
			>
				{/* <UserCircleIcon className="text-accentcolor h-16" /> */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-user"
					width="44"
					height="44"
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
				</svg>
				<div className="flex w-full flex-col gap-0.5">
					<div className="flex items-center justify-between">
						<Typography variant="h5" color="blue-gray product-sans">
							Candice Wu
						</Typography>
						<div className="5 flex items-center gap-0">
							<StarIcon className="h-5 w-5 text-yellow-700" />
						</div>
					</div>
					<Typography color="blue-gray product-sans">
						Frontend Lead @ Google
					</Typography>
				</div>
			</CardHeader>
			<CardBody className="mb-6 p-4 product-sans">
				<Typography className="product-sans text-2xl">
					&quot;I found solution to all my design needs from Creative
					Tim. I use them as a freelancer in my hobby projects for
					fun! And its really affordable, very humble guys !!!&quot;
				</Typography>
			</CardBody>
		</Card>
	);
}
