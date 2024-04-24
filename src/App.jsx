import Header from "./components/Header";
import Home from "./view/Home";
import Framework from "./view/Framework";
import Trending from "./view/Trending";
import Footer from "./components/Footer";

function App() {
	return (
		<main className="2xl:container mx-auto dark:bg-black">
			<Header />
			<Home />
			<Framework />
			<Trending />
			<Footer />
		</main>
	);
}

export default App;
