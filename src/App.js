export default function App() {
  return (
    <>

      {/* <div className="text-gray-500 bg-yellow-800">
        <div className="container flex mx-auto px-24 py-2 justify-between">
            <div className="font-semibold text-[#009944] text-[26px]">logo</div>
            <div className="flex gap-x-4 items-center">
                <a href="">Nosotros</a>
                <a href="">Nuestra motivacion</a>
                <a href="">Testimonios</a>
                <a href="" className="buttom bg-red-500 rounded px-4 py-2">Únete a nosotos</a>
            </div>
        </div>
      </div> */}
      <section id="hero">
        <div className="containers pt-[94px] pb-[54px] grid gap-y-5 md:grid-cols-2 items-center">
          <div className=" ">
            <h1 className="text-[#094D10] font-[Sora] font-bold text-center text-[45px] leading-tight">Valoramos la agricultura orgánica y sus historias</h1>
            <p className="text-[24px] text-center mt-5 font-[Mulish] font-semibold">Vive la experiencia saludable y orgánica de la palta arequipeña, y te obsequiamos xxx por tu primera
              compra.
            </p>
            <div className="flex justify-center md:justify-normal">
              <button className="bg-[#89C241] md:bg-[#F64B25] rounded-[25px] px-20 mt-8 py-4 text-[20px] font-[Inter] font-bold text-white">Consultar pedido</button>
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
            <div className="grid gap-y-[180px] sm:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-y-[150px] lg:gap-[96px] mb-[131px]">
              <div className="flex justify-center relative col-auto ">
                <img src="/image/motiva/motiva1.jpg" alt="" className="rounded-[20px] max-w-[500px] w-full" />
                <div className="cards">
                  <h3>
                    Alimentación <br></br> saludable
                  </h3>
                  <p className="text-center text-[16px] ">
                    Te ayudamos a <br></br> complementar tu <br></br>nutrición balanceada
                  </p>
                </div>
              </div>
              <div className="flex justify-center relative col-auto ">
                <img src="/image/motiva/motiva2.jpg" alt="" className="rounded-[20px] max-w-[500px] w-full" />
                <div className="cards">
                  <h3>
                    Alimentación <br></br> saludable
                  </h3>
                  <p className="text-center text-[16px] ">
                    Te ayudamos a <br></br> complementar tu <br></br>nutrición balanceada
                  </p>
                </div>
              </div>
              <div className="flex justify-center relative col-auto ">
                <img src="/image/motiva/motiva3.jpg" alt="" className="rounded-[20px] max-w-[500px] w-full" />
                <div className="cards">
                  <h3>
                    Alimentación <br></br> saludable
                  </h3>
                  <p className="text-center text-[16px] ">
                    Te ayudamos a <br></br> complementar tu <br></br>nutrición balanceada
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#F64B25] rounded-[25px] px-[40px] py-[14px] text-[20px] text-white mt-[32px] md:mt-[48px]">Consulta tu pedido</button>
          </div>
        </div>
      </section>
      <section id="inicios">
        <div className="containers grid md:grid-cols-2 gap-[88px] pt-[40px] md:pt-[107px]">
          <div className="flex justify-center relative  mx-w-[328px]">
            <img src="/image/inicios/inicios1.png" alt="" className="w-[280px] md:w-[580px] md:h-[512px] rounded-lg" />
            <img src="/image/inicios/inicios2.png" alt="" className="absolute top-[346px] -mt-[230px] ml-[133px] w-[211px] md:w-[440px] md:translate-x-[50%] md:right-[50%] md:-mt-[15%] rounded-lg" />
          </div>
          <div className=" lg:mb-[200px] relative">
            <h2 className="text-[#094D10] font-bold text-center md:text-left">Nuestros inicios</h2>
            <p className="text-[16px] leading-9 pt-[18px] text-center md:text-left">Los hermanos Hipo y Pancho Cáceres, empezaron su aventura de <br></br> producción de paltas por el 2019, en su tierra natal, Tomepampa <br></br>
              Arequipa y siendo ellos muy autodidactas y emprendedores, decidieron aprender cómo lograr una producción más orgánica, viendo videos de YouTube, con lápiz y cuaderno en mano tomando buenas prácticas de otros países y consultando a otros amig@s productores.
              <br></br>
              <br></br>
              <br></br>
              Desde entonces, cada año, esperan con ansias la nueva cosecha, a base de esfuerzo y cariño para lograr una producción que le devuelva el valor a la biodiversidad de su tierra.Te invitamos a descubrir más de sus aventuras aquí.
            </p>
            <div className="flex justify-center">
              <button className="bg-[#F64B25] mb-9 rounded-[25px] px-10 ms:px-20 mt-[52px] py-3.5 text-[20px] text-white">Lee nuestras historias</button>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonios" className="bg-green-200">
        <div className="containers py-[40px] md:py-[72px]">
          <h2 className="text-center">
            Ellos ya probaron nuestros productos
          </h2>
          <div className="grid gap-8 justify-center md:grid-cols-3 lg:gap-[182px] lg:px-[80px]">
            <div className="bg-white flex flex-col justify-center w-[220px] h-[383px] rounded-tl-[110px] rounded-tr-[110px] gap-[23px] px-[11.5px] ">
              <div className=" flex justify-center items-center">
                <img src="/image/testimonios/testimonio1.png" alt="" className="rounded-lg w-[160px]" />
              </div>
              <div>
                <p className="text-center">Me ayudaron a  complementar mi dieta con productos de calidad y alimentación saludable.</p>
                <p className="text-center mt-[8px]">Martita, 25 años</p>
              </div>
            </div>
            <div className="bg-white flex flex-col justify-center w-[220px] h-[383px] rounded-tl-[110px] rounded-tr-[110px] gap-[23px] px-[11.5px] ">
              <div className=" flex justify-center items-center">
                <img src="/image/testimonios/testimonio2.png" alt="" className="rounded-lg w-[160px]" />
              </div>
              <div>
                <p className="text-center">Me ayudaron a  complementar mi dieta con productos de calidad y alimentación saludable.</p>
                <p className="text-center mt-[8px]">Martita, 25 años</p>
              </div>
            </div>
            <div className="bg-white flex flex-col justify-center w-[220px] h-[383px] rounded-tl-[110px] rounded-tr-[110px] gap-[23px] px-[11.5px] ">
              <div className=" flex justify-center items-center">
                <img src="/image/testimonios/testimonio3.png" alt="" className="rounded-lg w-[160px]" />
              </div>
              <div>
                <p className="text-center">Me ayudaron a  complementar mi dieta con productos de calidad y alimentación saludable.</p>
                <p className="text-center mt-[8px]">Martita, 25 años</p>
              </div>
            </div>
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
                <p className="text-center text-white">Envíanos un mensaje y con gusto conversamos</p>
              </div>
              <div className="my-[32px] z-30">
                <h4 className="text-center text-[#FF9A2E] mb-[32px]">nutrip@gmail.com</h4>
                <div className="flex justify-center items-center gap-[32px]">
                  <img src="/image/redessociales/facebook.svg" alt="" />
                  <img src="/image/redessociales/youtube.svg" alt="" />
                  <img src="/image/redessociales/insta.svg" alt="" />
                  <img src="/image/redessociales/twitter.svg" alt="" />
                  <img src="/image/redessociales/linkedin.svg" alt="" />
                </div>
              </div>
              <img src="/image/logofooter.svg" alt="z-30" />
              <p className="text-center text-white z-30">Todos los derechos reservados © NUTRIP | Design by CICLOS STUDIO</p>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}