import PropTypes from "prop-types";
import urlImage from "../assets/images/image-retro-pcs.jpg";

const Article = ({ position, name, description }) => {
	return (
		<article className="flex flex-col justify-center items-center lg:flex-row gap-3 border border-gray-700 rounded-md dark:border-white">
			<div className="">
				<img src={urlImage} alt="imagen de PC" />
			</div>
			<div className="flex-1 p-2">
				<p className="text-GrayisHBlue text-xl md:text-2xl lg:text-3xl mb-[10px] font-bold dark:text-white">
					{position}
				</p>
				<h2 className="font-bold hover:text-SoftOrange text-sm md:text-base cursor-pointer mb-[8px] dark:text-white">
					{name}
				</h2>
				<div className="overflow-y-auto h-40">
					<p className="text-gray-600 text-xs md:text-sm lg:text-base dark:text-white">{description}</p>
				</div>
			</div>
		</article>
	);
};

Article.propTypes = {
	position: PropTypes.number,
	name: PropTypes.string,
	description: PropTypes.string,
};

export default Article;
