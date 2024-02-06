import BtnHero from "../components/buttons/BtnHero";
import BtnInicios from "../components/buttons/BtnHero";
import BtnMotiva from "../components/buttons/BtnMotiva";
import CardMotiva from "../components/cards/CardMotiva";
import TestimonioSwipers from "../components/swipers/TestimonioSwipers";

export default function PageHome() {
    return (
        <div className="relative">
            <section id="hero">
                <div
                    className="containers grid gap-5 items-center pt-[50px] pb-[109px] md:pb-[54px] 
                    md:grid-cols-2">
                    <div className="text-center md:text-left">
                        <h1
                            className="text-[#094D10] font-[Sora] font-bold text-[24px] leading-tight
                            md:text-[45px]">
                            Valoramos la agricultura orgánica y sus historias
                        </h1>
                        <p
                            className="text-[16px] mt-5 font-[Mulish] font-semibold
                            md:text-[24px] ">
                            Vive la experiencia saludable y orgánica de la palta arequipeña, y te obsequiamos xxx por tu primera
                            compra.
                        </p>
                        <BtnHero/>
                    </div>
                    <img src="image/hero.png" alt="" className="w-auto mx-auto" />
                </div>
            </section>
            <section id="motiva"
                className="bg-green-200 relative">
                <div className="containers pt-[140px] pb-[72px]  ">
                    <h2>
                        ¿Qué nos motiva cada día?
                    </h2>
                    <div
                        className="grid gap-y-[130px] mb-[131px]
              			    sm:grid-cols-2 sm:gap-x-4 
                            md:gap-y-[150px] 
                            lg:grid-cols-3 lg:gap-[96px]">
                        <CardMotiva
                            title="Alimentación saludable"
                            text="Resilencia en el sistema de producción de alimentos orgánicos"
                            img="/image/motiva/motiva1.jpg">
                        </CardMotiva>
                        <CardMotiva
                            title="Impacto medioambiental"
                            text="Resilencia en el sistema de producción de alimentos orgánicos"
                            img="/image/motiva/motiva2.jpg">
                        </CardMotiva>
                        <CardMotiva
                            title="Impulso a comunidades rurales"
                            text="Resilencia en el sistema de producción de alimentos orgánicos"
                            img="/image/motiva/motiva3.jpg">
                        </CardMotiva>
                    </div>
                    <BtnMotiva/>
                <img src="svg/perita.svg" alt="" className="absolute transform left-1/2 -translate-x-1/2 w-[85px] top-[-45px]
                    sm:w-[132px]  sm:top-[-70px]  
                    lg:top-[-100px] lg:w-[189px]" />
                </div>
            </section>
            <section id="inicios">
                <div className="containers grid gap-[88px] pt-[40px] 
                    md:grid-cols-2 md:pt-[107px] ">
                    <div className="flex justify-center relative  mx-w-[328px]">
                        <img src="/image/inicios/inicios1.png" alt="" 
                            className="w-[80%] md:h-[512px] object-cover rounded-lg" />
                        <img src="/image/inicios/inicios2.png" alt=""
                            className="absolute object-cover top-[40%] lg:top-[50%] w-[60%] sm:h-[280px] rounded-lg" />
                    </div>
                    <div className="  relative text-center md:!text-left pb-[40px] md:pb-[150px]">
                        <h2
                            className="text-[#094D10] font-bold mb-0">
                            Nuestros inicios
                        </h2>
                        <p
                            className="text-[16px] pt-[18px] px-4 md:text-[18px] md:leading-9">
                            Los hermanos Hipo y Pancho Cáceres, empezaron su aventura de producción de paltas por el 2019, en su tierra natal, Tomepampa 
                            Arequipa y siendo ellos muy autodidactas y emprendedores, decidieron aprender cómo lograr una producción más orgánica, viendo videos de YouTube, con lápiz y cuaderno en mano tomando buenas prácticas de otros países y consultando a otros amig@s productores.
                            <br></br>
                            <br></br>
                            Desde entonces, cada año, esperan con ansias la nueva cosecha, a base de esfuerzo y cariño para lograr una producción que le devuelva el valor a la biodiversidad de su tierra.Te invitamos a descubrir más de sus aventuras aquí.
                        </p>
                        <BtnInicios/>
                    </div>
                </div>
            </section>
            <section id="testimonios" className="bg-green-200">
                <div className="containers py-[40px] md:py-[72px]">
                    <h2
                        className="text-center">
                        Ellos ya probaron nuestros productos
                    </h2>
                    <TestimonioSwipers />
                </div>
            </section>
        </div>
    );
}
