import logo from "../assets/images/logo.svg";
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
		<header className={`p-4 ${showBackground ? "bg-gray-200" : "bg-transparent"} flex place-content-between items-center p-2 w-full sticky top-0`}>
			<img src={logo} alt="logo" />
			<NavBar />
		</header>
	);
};

export default Header;
