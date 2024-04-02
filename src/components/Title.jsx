import PropTypes from "prop-types";

const Title = ({ title }) => {
	return (
		<h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold p-4">
			{title}
		</h1>
	);
};

Title.propTypes = {
	title: PropTypes.string,
};

export default Title;
