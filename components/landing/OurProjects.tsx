"use client";


const projectItems = [
    {
        title: "INTERIOR",
        description: "DESAIN DAPUR & MEJA MAKAN MINIMALIS.",
        img: "https://www.bellodesainstudio.com/storage/portfolio/OH453uM0lmj3hzBzaSNqftTTDkG0uhHZBTzrdeU1.jpg",
    },
    {
        title: "INTERIOR",
        description: "Living, Dining, Kitchen Open Space.",
        img: "https://www.bellodesainstudio.com/storage/portfolio/uJbq6TBenFkKioeI33TyGB93KrW4WGEPh1vTJRu2.jpg",
    },
    {
        title: "Interior",
        description: "Cozy Living Room Ideas.",
        img: "https://www.bellodesainstudio.com/storage/portfolio/6oUBwKIz6ztStPdcejMKdnbVuhpv9r0Wvkz6j5kO.jpg",
    },
    {
        title: "Rumah Tinggal",
        description: "Rumah Bali Minimalis: Harmoni Antara Tradisi & Desain Modern.",
        img: "https://www.bellodesainstudio.com/storage/portfolio/6e9tNK7x0jvVKTMS2syxfd60abh0fsPUvZ6sq74B.jpg",
    },
    {
        title: "Rumah Tinggal",
        description: "Menyatukan Modernitas dan Spiritualitas Rumah Scandinavian.",
        img: "https://www.bellodesainstudio.com/storage/portfolio/RhUMWGTtIwYIrN35Itd6DAq4IqJUJ73bRu4XKsJW.jpg",
    },

    {
        title: "Rumah Tinggal",
        description: "Keseimbangan Bentuk dan Fungsi dalam Desain Rumah Modern.",
        img: "https://www.bellodesainstudio.com/storage/portfolio/p51Eu0WiBOFemHszMmSSDgF36R9XHUQ7NxAzaqXa.jpg",
    },
];

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/swiper-bundle.css';
import ScrollFloat from '../ScrollFloat';

const OurProjects = () => {

    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    return (
        <section className="w-full py-6 md:py-16 bg-white text-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 overflow-hidden">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:mb-8 mb-10">
                    <div className="flex flex-col text-left">
                        <ScrollFloat
                            animationDuration={1.2}
                            ease='expo.out'
                            scrollStart='top bottom-=10%'
                            scrollEnd='bottom top+=20%'
                            stagger={0.04}
                            textClassName="text-[#a3a321] text-sm font-bold tracking-[0.2em] uppercase"
                        >
                            PROJECT TRENDING
                        </ScrollFloat>

                        <ScrollFloat
                            animationDuration={1.2}
                            ease='expo.out'
                            scrollStart='top bottom-=10%'
                            scrollEnd='bottom top+=20%'
                            stagger={0.04}
                            textClassName="text-3xl md:text-5xl font-serif font-light tracking-tight uppercase !my-[0px]"
                        >
                            Hasil Project Kami
                        </ScrollFloat>
                    </div>
                </div>

                <div className="relative w-full">
                    <Swiper
                        modules={[Navigation, EffectCoverflow]}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        speed={800}
                        onSwiper={setSwiperInstance}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: -30,
                            depth: 180,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        className="w-full"
                    >
                        {projectItems.map((project, index) => (
                            <SwiperSlide key={index} className="!w-[300px] md:!w-[550px] lg:!w-[700px] !pb-10">
                                {({ isActive }) => (
                                    <div className="flex flex-col items-center w-full">
                                        <div className={`relative w-full aspect-[16/10] rounded-sm overflow-hidden transition-all duration-700 shadow-xl
                                            ${isActive ? 'brightness-100 scale-100' : 'brightness-[0.35] scale-[0.85]'}`}>
                                            <Image
                                                src={project.img}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className={`mt-10 text-center transition-all duration-700 max-w-xl
                                            ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                                            <h3 className="text-xl md:text-2xl font-sans font-light tracking-[0.1em] uppercase mb-3">
                                                {project.title}
                                            </h3>
                                            <p className="text-[11px] md:text-xs text-stone-500 font-light leading-relaxed px-10">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="flex items-center justify-center gap-6 mt-[-20px] md:mt-0 relative z-30 pb-10">
                        <button
                            onClick={() => swiperInstance?.slidePrev()}
                            className="h-12 w-12 border border-black/10 flex items-center justify-center rounded-full bg-white hover:bg-black hover:text-white transition-all shadow-md active:scale-90 cursor-pointer"
                        >
                            <span className="text-xl mb-1">‹</span>
                        </button>
                        <button
                            onClick={() => swiperInstance?.slideNext()}
                            className="h-12 w-12 border border-black/10 flex items-center justify-center rounded-full bg-white hover:bg-black hover:text-white transition-all shadow-md active:scale-90 cursor-pointer"
                        >
                            <span className="text-xl mb-1">›</span>
                        </button>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .swiper { overflow: visible !important; }
            `}</style>
        </section>
    );
};

export default OurProjects;