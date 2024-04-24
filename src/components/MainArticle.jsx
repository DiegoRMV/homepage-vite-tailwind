import imageMobile from "/img/image-web-3-mobile.jpg";
import imageDesktop from "/img/image-web-3-desktop.jpg";

const MainArticle = () => {
	return (
		<section className="mb-2">
			<picture className="flex">
				<source media="(max-width: 640px)" srcSet={imageMobile} />
				<source media="(min-width: 641px)" srcSet={imageDesktop } />
				<img src={imageMobile} alt="Articulo principal imagen" className="grow"></img>
			</picture>
			<div className="sm:flex mt-8">
				<div className="flex-1 flex">
					<h2 className="text-[42px] font-bold sm:text-[58px] leading-none w-[320px] sm:w-[300px] dark:text-white">
						The Bright Future of Web 3.0?
					</h2>
				</div>
				<div className="flex-1 flex flex-col justify-between pr-4">
					<p className="text-sm mb-10 sm:text-base md:text-lg dark:text-white">
						We dive into the next evolution of the web that claims to put the
						power of the platforms back into the hands of the people. But is it
						really fulfilling its promise?
					</p>
					<button className="bg-SoftRed w-[190px] h-[40px] uppercase text-OffWhite hover:bg-VeryDarkBlue tracking-widest">
						Read more
					</button>
				</div>
			</div>
		</section>
	);
};

export default MainArticle;
