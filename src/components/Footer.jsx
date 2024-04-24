import { Logo, Facebook, Linkedin, Github } from "../utils/SVGs";

const Footer = () => {
	return (
		<section className="p-4 mt-10 border-t-2 border-black dark:border-white">
			<div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
				<div className="hidden md:flex justify-center items-center">
					<Logo className="dark:fill-white" />
				</div>
				<div className="flex items-center justify-center gap-4">
					<a
						href="#"
						className="rounded-lg hover:scale-110 transition-all hover:opacity-75"
					>
						<Facebook className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
					</a>
					<a
						href="https://www.linkedin.com/in/diego-rub%C3%A9n-menchaca-vera-ba46b9262/"
						className="rounded-lg hover:scale-110 transition-all hover:opacity-75"
					>
						<Linkedin className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
					</a>
					<a
						href="https://github.com/DiegoRMV"
						className="rounded-lg hover:scale-110 transition-all hover:opacity-75"
					>
						<Github className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 dark:fill-white" />
					</a>
				</div>
				<div className="flex justify-center items-center font-semibold text-xs md:text-sm lg:text-base dark:text-white">
					<p>😁 Derechos Reservados DiegoRMV</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
