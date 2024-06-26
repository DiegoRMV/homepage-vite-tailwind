import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

const DarkMode = () => {
  // MODO OSCURO!
  const [theme, setTheme] = useState(document.documentElement.classList.value);
  // MODO OSCURO!
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);
  // MODO OSCURO!
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <button
        onClick={handleTheme}
        className="font-cardo rounded-md cursor-pointer py-1  ml-2 text-black dark:text-white"
        aria-label="darkMode"
      >
        {theme === "dark" ? <MdDarkMode size={28} /> : <BsSun size={28} />}
      </button>
    </>
  );
};
export default DarkMode;
