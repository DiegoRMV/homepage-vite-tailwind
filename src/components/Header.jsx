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
				showBackground ? "bg-teal-100	 dark:bg-zinc-950" : "bg-white dark:bg-black"
			} fixed top right-0 left-0 max-w-[1536px] mx-auto`}
		>
			<NavBar />
		</header>
	);
};

export default Header;
