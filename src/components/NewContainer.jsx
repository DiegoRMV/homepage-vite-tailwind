import NewArticle from "./NewArticle";

const NewContainer = () => {
	return (
		<section className="bg-VeryDarkBlue text-OffWhite pt-[28px] px-[24px]">
			<h1 className="text-SoftOrange text-4xl font-bold">News</h1>
			<aside className="grid grid-row-3 divide-y">
				<NewArticle
					title="Hydrogen VS Electric Cars"
					text="Will hydrogen-fueled cars ever catch up to EVs?"
				/>
				<NewArticle
					title="The Downsides of AI Artistry"
					text="What are the possible adverse effects of on-demand AI image generation?"
				/>
				<NewArticle
					title="Is VC Funding Drying Up?"
					text="Private funding by VC firms is down 50% YOY. We take a look at what that means."
				/>
			</aside>
		</section>
	);
};

export default NewContainer;
