import React from "react";
import {
	Navbar,
	MobileNav,
	Typography,
	Button,
	IconButton,
} from "@material-tailwind/react";
import NameChip from "./Chip";
import { Link } from "react-router-dom";

export default function Example() {
	const [openNav, setOpenNav] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	const navList = (
		<ul className="product-sans mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="product-sans transform p-1 text-xl font-semibold transition-all duration-500 ease-in-out hover:scale-105 hover:text-blue-600"
			>
				<Link to="/game">
					<a href="/" className="product-sans flex items-center">
						Home
					</a>
				</Link>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="product-sans transform p-1 text-xl transition-all duration-500 ease-in-out hover:scale-105 hover:text-blue-600"
			>
				<Link to="/scores">
					<a href="/" className="product-sans flex items-center">
						Scores
					</a>
				</Link>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="product-sans transform p-1 text-xl font-semibold transition-all duration-500 ease-in-out hover:scale-105 hover:text-blue-600"
			>
				<Link to="/statistics">
					<a href="/" className="product-sans flex items-center">
						Statistics
					</a>
				</Link>
			</Typography>

			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="product-sans transform p-1 text-xl font-semibold transition-all duration-500 ease-in-out hover:scale-105 hover:text-blue-600"
			>
				<Link to="/">
					<a href="/" className="product-sans flex items-center">
						New Player
					</a>
				</Link>
			</Typography>
		</ul>
	);

	return (
		<>
			<Navbar className="product-sans top sticky z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
				<div className="product-sans flex items-center justify-between text-blue-gray-900">
					<Typography
						as="a"
						href="#"
						className="product-sans mr-4 cursor-pointer py-1.5 text-2xl font-semibold leading-none"
					>
						<Link to={'/game'}>
						KlikWick By KPT
						</Link>
					</Typography>
					<div className="product-sans flex items-center gap-4">
						<div className="product-sans mr-4 hidden lg:block">
							{navList}
						</div>
						<NameChip />
						<IconButton
							variant="text"
							className="product-sans ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
							ripple={false}
							onClick={() => setOpenNav(!openNav)}
						>
							{openNav ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									className="product-sans h-6 w-6"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="product-sans h-6 w-6"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</IconButton>
					</div>
				</div>
				<MobileNav open={openNav}>
					{navList}
					<Button
						variant="gradient"
						size="sm"
						fullWidth
						className="product-sans mb-2"
					>
						<span>Buy Now</span>
					</Button>
				</MobileNav>
			</Navbar>
		</>
	);
}
