import { Frameworks } from "../data/data";
import Article from "./Article";

const ArticleContainer = () => {
	const frameworks = Frameworks;
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
			{frameworks.map((framework) => {
				return (
					<Article
						key={framework.id}
						name={framework.name}
						image={framework.image}
						position={framework.id}
						description={framework.description}
					/>
				);
			})}
		</section>
	);
};

export default ArticleContainer;
