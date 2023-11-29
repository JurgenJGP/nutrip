import CardMotiva from "./components/cards/CardMotiva";
import CardTestimonio from "./components/cards/CardTestimonio";
import NavBar from "./navbar/NavBar"

export default function App() {
	return (
		<>
			<NavBar/>
			<section id="hero">
				<div className="containers pt-[94px] pb-[54px] grid gap-5 md:grid-cols-2 items-center">
					<div className=" ">
						<h1
							className="text-[#094D10] font-[Sora] font-bold text-center text-[45px] leading-tight
              md:text-left">
							Valoramos la agricultura orgánica y sus historias
						</h1>
						<p
							className="text-[24px] text-center  mt-5 font-[Mulish] font-semibold
              md:text-left">
							Vive la experiencia saludable y orgánica de la palta arequipeña, y te obsequiamos xxx por tu primera
							compra.
						</p>
						<div className="flex justify-center md:justify-normal">
							<button
								className="bg-[#89C241]  rounded-[25px] px-10 sm:px-20 mt-8 py-4 text-[20px] font-[Inter] font-bold text-white
                md:bg-[#F64B25]">
								Consultar pedido
							</button>
						</div>
					</div>
					<img src="image/hero.png" alt="" className="w-auto" />
				</div>
			</section>
			<section id="motiva" className="bg-green-200">
				<div className="containers pt-[144px] pb-[72px]  ">
					<div>
						<h2>
							¿Qué nos motiva cada día?
						</h2>
						<div
							className="grid gap-y-[180px] 
              			sm:grid-cols-2 sm:gap-x-4 md:gap-y-[150px] lg:grid-cols-3 lg:gap-[96px] mb-[131px]">
							<CardMotiva 
								title="Hola" 
								text="Resilencia en el sistema de producción de alimentos orgánicos"
								img="/image/motiva/motiva1.jpg">
							</CardMotiva>
							<CardMotiva 
								title="Hola2" 
								text="Resilencia en el sistema de producción de alimentos orgánicos"
								img="/image/motiva/motiva2.jpg">
							</CardMotiva>
							<CardMotiva 
                title="Hola3" 
                text="Resilencia en el sistema de producción de alimentos orgánicos"
								img="/image/motiva/motiva3.jpg">
							</CardMotiva>
						</div>
					</div>
					<div className="flex justify-center">
						<button
							className="bg-[#F64B25] rounded-[25px] px-[40px] py-[14px] text-[20px] text-white mt-[32px] md:mt-[48px]">
							Consulta tu pedido
						</button>
					</div>
				</div>
			</section>
			<section id="inicios">
				<div className="containers grid gap-[88px] pt-[40px] md:grid-cols-2 md:pt-[107px]">
					<div className="flex justify-center relative  mx-w-[328px]">
						<img src="/image/inicios/inicios1.png" alt="" className="w-[80%] md:h-[512px] rounded-lg" />
						<img src="/image/inicios/inicios2.png" alt=""
							className="absolute top-[40%] w-[60%] rounded-lg" />
					</div>
					<div className=" lg:mb-[200px] relative">
						<h2
							className="text-[#094D10] font-bold text-center md:text-left">
							Nuestros inicios
						</h2>
						<p
							className="text-[16px] pt-[18px] px-4 text-center md:text-left md:leading-9">
							Los hermanos Hipo y Pancho Cáceres, empezaron su aventura de <br></br> producción de paltas por el 2019, en su tierra natal, Tomepampa <br></br>
							Arequipa y siendo ellos muy autodidactas y emprendedores, decidieron aprender cómo lograr una producción más orgánica, viendo videos de YouTube, con lápiz y cuaderno en mano tomando buenas prácticas de otros países y consultando a otros amig@s productores.
							<br></br>
							<br></br>
							<br></br>
							Desde entonces, cada año, esperan con ansias la nueva cosecha, a base de esfuerzo y cariño para lograr una producción que le devuelva el valor a la biodiversidad de su tierra.Te invitamos a descubrir más de sus aventuras aquí.
						</p>
						<div className="flex justify-center">
							<button
								className="bg-[#F64B25] mb-9 rounded-[25px] px-10 ms:px-20 mt-[52px] py-3.5 text-[20px] text-white">
								Lee nuestras historias
							</button>
						</div>
					</div>
				</div>
			</section>
			<section id="testimonios" className="bg-green-200">
				<div className="containers grid justify-center py-[40px] md:py-[72px]">
					<h2
						className="text-center">
						Ellos ya probaron nuestros productos
					</h2>
					<div className="grid gap-8 sm:grid-cols-2 sm:gap-x-4 md:grid-cols-3 lg:gap-[182px] lg:px-[80px]">
						<CardTestimonio
							img="/image/testimonios/testimonio1.png"
							text1="Me ayudaron a  complementar mi dieta con productos de calidad y alimentación saludable."
							text2="Martita, 25 años">
						</CardTestimonio>
						<CardTestimonio
							img="/image/testimonios/testimonio2.png"
							text1="Me ayudaron a  complementar mi dieta con productos de calidad y alimentación saludable."
							text2="Martita, 25 años">
						</CardTestimonio>
						<CardTestimonio
							img="/image/testimonios/testimonio3.png"
							text1="Me ayudaron a  complementar mi dieta con productos de calidad y alimentación saludable."
							text2="Martita, 25 años">
						</CardTestimonio>
					</div>
				</div>
			</section>
			<footer >
				<div
					className="bg-cover bg-center w-full h-full bg-[url('/public/image/footer.jpg')] relative z-10" >
					<div className="bg-black/60 absolute w-full h-full !z-20"></div>
					<div className="containers pt-[72px] grid justify-items-center justify-center">
						<div className="grid justify-items-center justify-center gap-[64px] !z-40">
							<div className="z-30">
								<h2 className="text-center text-white ">
									¿Te gustaría colaborar con nosotros?
								</h2>
								<p className="text-center text-white">
									Envíanos un mensaje y con gusto conversamos
								</p>
							</div>
							<div className="my-[32px] z-30">
								<h4 className="text-center text-[#FF9A2E] mb-[32px]">
									nutrip@gmail.com
								</h4>
								<div className="flex justify-center items-center gap-4 sm:gap-[32px]">
									<img src="/svg/redessociales/redessociales/facebook.svg" alt="" />
									<img src="/svg/redessociales/redessociales/youtube.svg" alt="" />
									<img src="/svg/redessociales/redessociales/insta.svg" alt="" />
									<img src="/svg/redessociales/redessociales/twitter.svg" alt="" />
									<img src="/svg/redessociales/redessociales/linkedin.svg" alt="" />
								</div>
							</div>
							<img src="/image/logofooter.svg" alt="z-30" />
							<p className="text-center text-white z-30">
								Todos los derechos reservados © NUTRIP | Design by CICLOS STUDIO
							</p>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}