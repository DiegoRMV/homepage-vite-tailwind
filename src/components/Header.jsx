import NavBar from "./NavBar";
import { useState, useEffect } from "react";

const Header = () => {
	const TOP_OFFSET = 50;
	const [showBackground, setShowBackground] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			console.log(window.scrollY);
			if (window.scrollY >= TOP_OFFSET) {
				setShowBackground(true);
			} else {
				setShowBackground(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<header
			className={`py-4 px-10 ${
				showBackground ? "bg-gray-300 dark:bg-zinc-950" : "bg-white dark:bg-black"
			} w-full fixed right-0 left-0 sm:sticky top-0`}
		>
			<NavBar />
		</header>
	);
};

export default Header;
