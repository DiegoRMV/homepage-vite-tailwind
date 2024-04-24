import ArticleContainer from "../components/ArticleContainer";
import Title from "../components/Title";

const Trending = () => {
	return (
		<section id="trending" className="pt-[48px] px-8">
			<Title title={"Trending"} />
			<ArticleContainer />
		</section>
	);
};

export default Trending;
