import Footer from "./components/Footer";
import Framework from "./components/Framework";
import Header from "./components/Header";
import Home from "./components/Home";
import Trending from "./components/Trending";

function App() {
	return (
		<main className="px-4 container mx-auto">
			<Header />
			<Home />
			<Framework />
			<Trending />

			<Footer />
		</main>
	);
}

export default App;
