import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import CardTestimonio from '../cards/CardTestimonio';

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    270: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <CardTestimonio
                        img="/image/testimonios/testimonio1.png"
                        text1="Me ayudaron a  complementar mi dieta con productos de calidad y alimentación saludable."
                        text2="Martita, 25 años">
                    </CardTestimonio>
                </SwiperSlide>
                <SwiperSlide>
                    <CardTestimonio
                        img="/image/testimonios/testimonio2.png"
                        text1="Me ayudaron a  complementar mi dieta con productos de calidad y alimentación saludable."
                        text2="Martita, 25 años">
                    </CardTestimonio>
                </SwiperSlide>
                <SwiperSlide>
                    <CardTestimonio
                        img="/image/testimonios/testimonio3.png"
                        text1="Me ayudaron a  complementar mi dieta con productos de calidad y alimentación saludable."
                        text2="Martita, 25 años">
                    </CardTestimonio>
                </SwiperSlide>
                <SwiperSlide>
                    <CardTestimonio
                        img="/image/testimonios/testimonio1.png"
                        text1="Me ayudaron a  complementar mi dieta con productos de calidad y alimentación saludable."
                        text2="Martita, 25 años">
                    </CardTestimonio>
                </SwiperSlide>
                <SwiperSlide>
                    <CardTestimonio
                        img="/image/testimonios/testimonio2.png"
                        text1="Me ayudaron a  complementar mi dieta con productos de calidad y alimentación saludable."
                        text2="Martita, 25 años">
                    </CardTestimonio>
                </SwiperSlide>
                <SwiperSlide>
                    <CardTestimonio
                        img="/image/testimonios/testimonio3.png"
                        text1="Me ayudaron a  complementar mi dieta con productos de calidad y alimentación saludable."
                        text2="Martita, 25 años">
                    </CardTestimonio>
                </SwiperSlide>
            </Swiper>
            <style>
                {`
                    .swiper-pagination {
                    position: relative;
                    margin-top: 20px; 
                     }
                `}
            </style>
        </>
    );
}