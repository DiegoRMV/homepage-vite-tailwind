import MainArticle from "../components/MainArticle";
import NewContainer from "../components/NewContainer";

const Home = () => {
	return (
		<section className="lg:flex justify-center sm:gap-8 px-8 pt-20" id="home">
			<MainArticle />
			<NewContainer />
		</section>
	);
};

export default Home;
