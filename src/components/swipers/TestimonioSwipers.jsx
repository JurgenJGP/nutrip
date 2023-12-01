import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import CardTestimonio from '../cards/CardTestimonio';
// import required modules
import { Navigation } from 'swiper/modules';

export default function TestimonioSwipers() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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
        </>
    );
}