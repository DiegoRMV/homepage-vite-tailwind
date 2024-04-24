import Article from "./Article";

const ArticleContainer = () => {
	const frameworks = [
		{
			id: 1,
			name: "React",
			image: "/react.jpg",
			description: "React, también conocido como React.js, es una biblioteca de JavaScript que me encanta utilizar en mis proyectos de desarrollo web. Fue desarrollada por Facebook y es una herramienta poderosa para crear interfaces de usuario interactivas y componentes reutilizables en aplicaciones web.",
		},
		{
			id: 2,
			name: "Angular",
			image: "/angular.png",
			description: "Angular, una de las tecnologías más emocionantes en el mundo del desarrollo web, es un framework que suelo utilizar en mis proyectos. Fue desarrollado por Google; es una poderosa herramienta para la construcción de aplicaciones web de una sola página (SPA) y aplicaciones web en general.",
		},
		{
			id: 3,
			name: "Vue.js",
			image: "/vuejs.jpg",
			description: "Vue.js es un entorno de JavaScript que encuentro extremadamente atractivo y versátil para el desarrollo web. Vue.js es conocido por ser un framework progresivo, lo que significa que puedes usarlo de manera incremental en tus proyectos: esto lo hace muy accesible para desarrolladores de todos los niveles de experiencia.",
		},
		{
			id: 4,
			name: "Django",
			image: "/django.jpg",
			description: "Django es un framework de desarrollo web de código abierto que me parece excepcional y que me encanta utilizar en mis proyectos. Fue creado originalmente por un equipo de especialistas en la agencia de noticias Lawrence Journal-World y se convirtió en un proyecto de código abierto respaldado por la comunidad. Django se destaca por su enfoque en la productividad y la elegancia en el desarrollo de aplicaciones web.",
		},
		{
			id: 5,
			name: "Flask",
			image: "/flask.png",
			description: "Flask es un microframework de desarrollo web en Python que me parece extremadamente sencillo y flexible de utilizar. A pesar de su simplicidad, Flask es muy poderoso y versátil, esto lo convierte en una excelente opción para desarrolladores que desean crear aplicaciones web de manera rápida y eficiente.",
		},
		{
			id: 6,
			name: "Ruby	on Rails",
			image: "/ruby.png",
			description: "Ruby on Rails, a menudo simplemente llamado «Rails», es un entorno de desarrollo web de código abierto que me parece muy potente y eficiente para crear aplicaciones web. Está escrito en el lenguaje de programación Ruby y sigue el principio de «convención sobre configuración» (convention over configuration) y «DRY» (don't repeat yourself), es decir, que se enfoca en simplificar el desarrollo web al proporcionar convenciones y abstracciones predefinidas para tareas comunes.",
		},
	];
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
