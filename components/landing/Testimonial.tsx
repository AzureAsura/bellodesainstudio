'use client'
import 'swiper/swiper-bundle.css';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCreative } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ArrowLeft, ArrowRight, MoveRight } from 'lucide-react';
import ScrollFloat from '../ScrollFloat';


const testimonials = [
    {
        id: 1,
        quote: "Puas banget, desainya bagus sesuai dengan keinginan konsumen untuk sebuah rumah idaman, penataan pencahayaan yang baik dan model desain menurut saya sangat unik karena memadukan kosep rumah minimalis dan model relief gapura bali. great job.",
        author: "Maha",
        role: "Mei. 10, 2022",
        image: "https://www.bellodesainstudio.com/asset/images/testi1.jpg"
    },
    {
        id: 2,
        quote: "Salut dan terima kasih banyak atas semua masukan dan karya desain rumah impian yang diberikan karena sangat memuaskan teruntuk kami. menurut kami gambar kerjanya sangat detail dan penataan pencahayaannya sangat bagus. terima kasih dan sukses terus untuk tim bello desain",
        author: "Sri Arta",
        role: "April. 18, 2022",
        image: "https://www.bellodesainstudio.com/asset/images/testi3.jpg"
    }
];

const Testimonial = () => {

    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 overflow-hidden">

                <div className="flex justify-between items-end mb-6 md:mb-10">
                    <ScrollFloat
                        animationDuration={1.2}
                        ease='expo.out'
                        scrollStart='top bottom-=10%'
                        scrollEnd='bottom top+=20%'
                        stagger={0.04}
                        textClassName="text-4xl md:text-6xl font-serif tracking-tight leading-10 text-black uppercase"
                    >
                        Testimoni
                    </ScrollFloat>

                    <div className="flex gap-4 mb-2">
                        <button
                            onClick={() => swiper?.slidePrev()}
                            className="h-12 w-12 border border-black/10 flex items-center justify-center rounded-full bg-white hover:bg-black hover:text-white transition-all shadow-md active:scale-90 cursor-pointer"
                        >
                            <ArrowLeft size={20} strokeWidth={1} />
                        </button>
                        <button
                            onClick={() => swiper?.slideNext()}
                            className="h-12 w-12 border border-black/10 flex items-center justify-center rounded-full bg-white hover:bg-black hover:text-white transition-all shadow-md active:scale-90 cursor-pointer"
                        >
                            <ArrowRight size={20} strokeWidth={1} />
                        </button>
                    </div>
                </div>

                <Swiper
                    onSwiper={setSwiper}
                    modules={[Navigation, Autoplay, EffectCreative]}
                    slidesPerView={1}
                    speed={1200}
                    grabCursor={true}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: false,
                            translate: ['-20%', 0, -1],
                            opacity: 0,
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }}
                    className="mySwiper overflow-visible"
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id} className="bg-white">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                                <div className="md:col-span-7">
                                    <div className="mb-5">
                                        <h4 className="text-md font-serif font-bold tracking-widest uppercase">
                                            {item.author}
                                        </h4>
                                        <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1 font-sans">
                                            {item.role}
                                        </p>
                                    </div>

                                    <p className="text-stone-700 font-sans leading-relaxed text-lg md:text-xl italic">
                                        "{item.quote}"
                                    </p>
                                </div>

                                <div className="md:col-span-5">
                                    <div className="relative group">
                                        <div className="aspect-[16/10] w-full overflow-hidden rounded-sm bg-stone-100 shadow-sm">
                                            <img
                                                src={item.image}
                                                alt={item.author}
                                                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;