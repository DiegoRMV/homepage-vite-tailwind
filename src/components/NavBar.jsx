import burguer from "../assets/images/icon-menu.svg";
import DarkMode from "./DarkMode";

const NavBar = () => {
	return (
		<>
			<ul className="hidden sm:flex sm:w-[438px] sm:place-content-around sm:text-[18px] text-[16px] sm:items-center">
				<li>
					<a href="#home" className="font-semibold hover:text-gray-600">
						Home
					</a>
				</li>
				<li>
					<a href="#framework" className="font-semibold hover:text-gray-600">
						Framework
					</a>
				</li>
				<li>
					<a href="#trending" className="font-semibold hover:text-gray-600">
						Trending
					</a>
				</li>
				<li>
					<DarkMode />
				</li>
			</ul>
			<img
				className="w-10 h-4 cursor-pointer sm:hidden"
				src={burguer}
				alt="logo hamburgues"
			></img>
		</>
	);
};

export default NavBar;
