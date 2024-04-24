import PropTypes from "prop-types";

const Article = ({ position, name, image, description }) => {
	return (
		<article className="w-auto gap-3 border border-gray-700 rounded-md dark:border-white">
			<div className="bg-black flex justify-center h-1/2">
				<img
					src={image}
					alt={`image de ${name}`}
					className="object-contain w-full"
				/>
			</div>
			<div className="h-1/2 flex flex-col p-4">
				<p className="text-GrayisHBlue text-xl md:text-2xl lg:text-3xl mb-[10px] font-bold dark:text-white">
					{position}
				</p>
				<h2 className="font-bold hover:text-SoftOrange text-sm md:text-base cursor-pointer mb-[8px] dark:text-white">
					{name}
				</h2>
				<div className="overflow-y-auto wrap">
					<p className="text-gray-600 text-xs md:text-sm lg:text-base dark:text-white">
						{description}
					</p>
				</div>
			</div>
		</article>
	);
};

Article.propTypes = {
	position: PropTypes.number,
	name: PropTypes.string,
	image: PropTypes.string,
	description: PropTypes.string,
};

export default Article;
