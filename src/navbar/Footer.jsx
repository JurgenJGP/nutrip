
const Footer = () => {
    return (
        <footer >
				<div
					className="bg-cover bg-center w-full h-full bg-[url('/public/image/footer.jpg')] relative z-10" >
					<div className="bg-black/60 absolute w-full h-full !z-20"></div>
					<div 
						className="containers grid justify-items-center justify-center pt-[72px]">
						<div 
							className="grid justify-items-center justify-center gap-[64px] !z-40">
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
									<img src="/svg/redessociales/facebook.svg" alt="" />
									<img src="/svg/redessociales/youtube.svg" alt="" />
									<img src="/svg/redessociales/insta.svg" alt="" />
									<img src="/svg/redessociales/twitter.svg" alt="" />
									<img src="/svg/redessociales/linkedin.svg" alt="" />
								</div>
							</div>
							<img src="/svg/logofooter.svg" alt="z-30" />
							<p className="text-center text-white z-30">
								Todos los derechos reservados © NUTRIP | Design by CICLOS STUDIO
							</p>
						</div>
					</div>
				</div>
			</footer>
    )
}

export default Footer
