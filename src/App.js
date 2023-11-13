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
        <div className="containers grid md:grid-cols-2 items-center">
          <div className="">
            <h1 className="text-[#094D10] font-[Sora]  text-[45px] leading-tight">Valoramos la agricultura orgánica y sus historias</h1>
            <p className="text-[24px] mt-5">Vive la experiencia saludable y orgánica de la palta arequipeña, y te obsequiamos xxx por tu primera
              compra.</p>
            <button className="bg-[#F64B25] rounded-[25px] px-20 mt-8 py-4 text-[20px] text-white">Consultar pedido</button>
          </div>
          <img src="image/hero.png" alt="" className="w-auto" />
        </div>
      </section>
      <section id="motiva" className="bg-green-200">
        <div className="containers pt-[144px] pb-[72px]  ">
          <div>
            <h2 className="text-green-950 text-center text-3xl mb-[40px]">
              ¿Qué nos motiva cada día?
            </h2>
            <div className="grid grid-cols-3 gap-[96px] mb-[131px]">
              <div className="relative col-auto ">
                <img src="/image/motiva/motiva1.jpg" alt="" className="rounded-[20px] w-full" />
                <div className="cards">
                  <h3 className="text-[#094D10] text-xl text-center mb-2.5 font-bold">
                    Alimentación <br></br> saludable
                  </h3>
                  <p className="text-center text-[16px] ">
                    Te ayudamos a <br></br> complementar tu <br></br>nutrición balanceada
                  </p>
                </div>
              </div>
              <div className="relative col-auto ">
                <img src="/image/motiva/motiva2.jpg" alt="" className="rounded-[20px] w-full" />
                <div className="cards">
                  <h3 className="text-[#094D10] text-xl text-center mb-2.5 font-bold">
                    Alimentación <br></br> saludable
                  </h3>
                  <p className="text-center text-[16px] ">
                    Te ayudamos a <br></br> complementar tu <br></br>nutrición balanceada
                  </p>
                </div>
              </div>
              <div className="relative col-auto ">
                <img src="/image/motiva/motiva3.jpg" alt="" className="rounded-[20px] w-full" />
                <div className="cards">
                  <h3 className="text-[#094D10] text-xl text-center mb-2.5 font-bold">
                    Alimentación <br></br> saludable
                  </h3>
                  <p className="text-center text-[16px] ">
                    Te ayudamos a <br></br> complementar tu <br></br>nutrición balanceada
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-[#F64B25] rounded-[25px] px-[40px] py-[14px] text-[20px] text-white mt-[48px]">Consulta tu pedido</button>
        </div>
      </section>
      <section id="inicios">
        <div className="containers grid grid-cols-2 gap-[88.5px] pt-[107px] pb-[72px]">
          <div className="relative">
              <img src="/image/inicios/inicios1.png" alt="" className="rounded-lg"/>
              <img src="/image/inicios/inicios2.png" alt="" className="absolute top-[346px] translate-x-[50%] right-[50%]"/>
          </div>
          <div>
            <h2 className="text-[#094D10] font-bold text-3xl">Nuestros inicios</h2>
            <p className="text-[16px] leading-9 pt-[18px]">Los hermanos Hipo y Pancho Cáceres, empezaron su aventura de <br></br> producción de paltas por el 2019, en su tierra natal, Tomepampa <br></br>
              Arequipa y siendo ellos muy autodidactas y emprendedores, decidieron aprender cómo lograr una producción más orgánica, viendo videos de YouTube, con lápiz y cuaderno en mano tomando buenas prácticas de otros países y consultando a otros amig@s productores.
              <br></br>
              <br></br>
              <br></br>
              Desde entonces, cada año, esperan con ansias la nueva cosecha, a base de esfuerzo y cariño para lograr una producción que le devuelva el valor a la biodiversidad de su tierra.Te invitamos a descubrir más de sus aventuras aquí.
            </p>
            <div>
              <button className="bg-[#F64B25] rounded-[25px] px-20 mt-[52px] py-3.5 text-[20px] text-white justify-center">Lee nuestras historias</button>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonios">
        <h2>Ellos ya probaron nuestros productos</h2>
        <div>
          <div>
            <img src="/image/testimonios/testimonio1.png" alt="" className="rounded-lg" />
            <div>
              <p>Me ayudaron a  complementar mi dieta con productos de calidad y alimentación saludable.</p>
              <p>Martita, 25 años</p>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      <footer >
        <div className="bg-cover bg-center h-screen bg-[url('/public/image/footer.jpg')]">
          <h2>
          ¿Te gustaría colaborar con nosotros?
          </h2>
          <p>Envíanos un mensaje y con gusto conversamos</p>
        </div>
      </footer>

    </>
        )
}