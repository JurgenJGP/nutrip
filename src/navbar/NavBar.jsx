import { useMediaQuery } from "react-responsive"
import BtnNav from "../components/buttons/BtnNav"

const NavBar = () => {
    const isDesktop = useMediaQuery({ query: 'min-width: 1024px' })
    return (
        <header className="flex items-center justify-center w-full h-[88px]">
            <nav
                className="flex items-center justify-between w-full px-[5%]
                max-w-[1184px] mx-auto xl:px-0">
                <img src="/svg/logopage.svg" alt="" className="h-[60px]" />
                {
                    isDesktop ?
                        <div className="flex items-center gap-[40px]">
                            <a href="">Nosotros</a>
                            <a href="">Nuestra motivacion</a>
                            <a href="">Testimonios</a>
                            <BtnNav/>
                        </div>
                        :
                        <img src="/svg/burger.svg" alt="" />
                }

            </nav>
        </header>
    )
}

export default NavBar