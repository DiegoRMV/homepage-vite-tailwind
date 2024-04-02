import PropTypes from "prop-types"

const NewArticle = ({title, text}) => {
  return (
    <article className="border-GrayishBlue py-10">
        <h2 className="cursor-pointer hover:text-SoftOrange text-[22px] mb-2 font-bold dark:text-black">{title}</h2>
        <p className="text-[16px] leading-relaxed">{text}</p>
    </article>
  )
}

NewArticle.propTypes = {
	title: PropTypes.string,
  text: PropTypes.string,
};

export default NewArticle
