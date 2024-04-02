import imgArticle from "../assets/images/frameworks-2.jpg";
import Title from "./Title";
const Framework = () => {
	return (
		<section id="framework" className="pt-[48px]">
			<div>
				<Title title={"Framework"}/>
			</div>
			<div className="flex flex-col bg-gray-900 p-5 rounded-md">
				<div className="flex flex-col lg:flex-row gap-4">
					<div className="flex-1">
						<img
							className="grow rounded-md"
							src={imgArticle}
							alt="imagen de computadora de escritorio"
						/>
					</div>
					<div className="flex-1 flex flex-col">
						<h1 className="text-center text:xl lg:text-2xl font-semibold border-2 rounded-md p-2 text-white">
							Qué es un framework de desarrollo web?
						</h1>
						<div className="flex items-center grow">
							<p className="text-white text:lg lg:text-xl text-center p-2">
								Un framework web es una estructura o un conjunto de herramientas
								predefinidas que proporciona una base para la construcción de
								aplicaciones web. Está diseñado para ayudar a los
								desarrolladores a crear sitios web de manera más eficiente y
								consistente, al proporcionar una serie de componentes y
								funciones comunes que se utilizan con frecuencia en el
								desarrollo web.
							</p>
						</div>
					</div>
				</div>
				<div>
					<h1 className="border-2 my-4 text-center text-xl lg:text-2xl font-semibold rounded-md p-2 text-white">
						Características de los frameworks
					</h1>

					<p className="text-white text-center text-base lg:text-lg">
						Algunos de los elementos y características comunes que incluyen son:
					</p>
					<ul className="text-white p-4 list-disc flex flex-col gap-2 text-sm lg:text-base">
						<li>
							<b>Enrutamiento:</b> suelen proporcionar un sistema de enrutamiento que
							facilita la gestión de las URL y las rutas de las páginas dentro
							de una aplicación.
						</li>
						<li>
							<b>Plantillas:</b> permiten crear un sitio web de manera más sencilla
							mediante el uso de plantillas predefinidas o motores de plantillas
							que ayudan a generar el código HTML de manera dinámica.
						</li>
						<li>
							<b>Controladores:</b> a menudo utilizan el patrón de diseño MVC
							(modelo-vista-controlador) o una variante de él, lo que significa
							que facilitan la separación de la lógica de negocio (controlador),
							de la presentación (vista) y los datos (modelo).
						</li>
						<li>
							<b>Manejo de solicitudes y respuestas:</b> ofrecen funciones para
							gestionar solicitudes HTTP entrantes y generar respuestas HTTP, lo
							que simplifica la interacción con el cliente.{" "}
						</li>
						<li>
							<b>Bases de datos:</b> muchos entornos integran herramientas y
							abstracciones para interactuar con bases de datos, lo que facilita
							el almacenamiento y recuperación de los mismos.{" "}
						</li>
						<li>
							<b>Seguridad:</b> suelen incluir mecanismos de seguridad incorporados
							para proteger contra amenazas tales como los ataques de inyección
							SQL o ataques de scripting entre sitios (XSS).
						</li>
						<li>
							<b>Sesiones y autenticación:</b> proporcionan funciones para gestionar
							las sesiones de usuario y su autenticación, lo que facilita la
							creación de sistemas de inicio de sesión y control de acceso.{" "}
						</li>
						<li>
							<b>Middleware:</b> permiten la inclusión de componentes de esta clase que
							pueden realizar tareas adicionales como la compresión de
							respuestas, el registro de solicitudes o la autenticación en el
							flujo de la aplicación.
						</li>
						<li>
							<b>API y servicios web:</b> facilitan la creación y consumo de estas
							interfaces y servicios, lo que permite la integración con otras
							aplicaciones y servicios.
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Framework;
