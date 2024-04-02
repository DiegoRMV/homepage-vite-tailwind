import MainArticle from "./MainArticle";
import NewContainer from "./NewContainer";

const Home = () => {
	return (
		<section className="lg:flex justify-center sm:gap-8 px-8" id="home">
			<MainArticle />
			<NewContainer />
		</section>
	);
};

export default Home;
