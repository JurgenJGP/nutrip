import { useMediaQuery } from "react-responsive"
import BtnNav from "../components/buttons/BtnNav"
import { useState } from "react"
import { Link } from "react-scroll"
import { motion } from "framer-motion"

const NavBar = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 880px)' })
    const [isOpen, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <header className="flex relative items-center justify-center !w-full h-[88px]">
            <nav className="flex items-center justify-between w-full px-[5%] max-w-[1184px] mx-auto xl:px-0">
                <img src="/svg/logopage.svg" alt="" className="h-[60px]" />

                {isDesktop ? (
                    <div className="flex items-center gap-[40px] ">
                        <Link 
                            to="nosotros" 
                            className="font-serif hover:underline" 
                            style={{ cursor: 'pointer', fontFamily:"tahoma" }}
                            smooth={true}
                            duration={500}
                            delay={500}>
                                Nosotros
                        </Link>
                        <Link 
                            to="motiva" 
                            className="font-serif hover:underline" 
                            style={{ cursor: 'pointer', fontFamily:"tahoma" }}
                            smooth={true}
                            duration={500}
                            delay={500}
                            offset={50}>
                                Nuestra motivacion
                        </Link>
                        <Link 
                            to="testimonios" 
                            className="font-serif hover:underline" 
                            style={{ cursor: 'pointer', fontFamily:"tahoma" }}
                            smooth={true}
                            duration={500}
                            delay={500}>
                                Testimonios
                        </Link>
                        <BtnNav />
                    </div>
                ) : (
                    <img src="/svg/burger.svg" alt=""
                        onClick={() => setOpen(!isOpen)} />
                )}
            </nav>
            {isOpen && !isDesktop &&
                <motion.div
                    initial={{ opacity: 0, y:-10 }}
                    animate={{ opacity: 1, y: 1 }}
                    transition={{ duration: 1 }}
                    className="grid max-w-[360px] w-full absolute items-center justify-items-center 
                    top-0 right-0 pt-[131px] pb-[98px] px-2 gap-10 bg-[#011002] text-white
                    !z-40">
                    <Link 
                        to="nosotros" 
                        className="text-white font-serif"
                        onClick={handleClose} 
                        style={{ cursor: 'pointer', fontFamily:"tahoma" }} 
                        smooth={true}
                        duration={500}
                        delay={500}>
                            Nosotros
                    </Link>
                    <Link 
                        to="motiva" 
                        className="text-white"
                        onClick={handleClose} 
                        style={{ cursor: 'pointer', fontFamily:"tahoma" }} 
                        smooth={true}
                        duration={500}
                        delay={500}>
                            Nuestra motivacion
                    </Link>
                    <Link 
                        to="testimonios" 
                        className="text-white font-serif"
                        onClick={handleClose} 
                        style={{ cursor: 'pointer', fontFamily:"tahoma" }} 
                        smooth={true}
                        duration={500}
                        delay={500}>
                            Testimonios
                    </Link>
                    <BtnNav />
                    <img src="/svg/close.page.svg" alt="" 
                        className="top-[27px] right-[30px] absolute !z-50"
                        onClick={handleClose} style={{ cursor: 'pointer' }} />
                </motion.div>
            }
        </header>
    )
}

export default NavBar
