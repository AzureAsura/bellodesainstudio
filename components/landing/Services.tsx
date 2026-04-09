// "use client";

// import React from 'react'
// import Image from 'next/image'
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"
// import ScrollFloat from '../ScrollFloat';

// const servicesData = [
//     {
//         title: "BELLO DESAIN",
//         image: "https://www.bellodesainstudio.com/asset/images/bello%20desain%201.jpg",
//     },
//     {
//         title: "Bello Konstruksi",
//         image: "https://www.bellodesainstudio.com/asset/images/bello%20konst%201.jpg",
//     },
//     {
//         title: "Bello Custom",
//         image: "https://www.bellodesainstudio.com/asset/images/bello%20custom%201.jpg",
//     },
//     {
//         title: "Bello Estimator",
//         image: "https://www.bellodesainstudio.com/asset/images/profile_home.jpg",
//     },
// ];

// const Services = () => {
//     return (
//         <section className="w-full bg-white text-black overflow-hidden">
//             <div className="max-w-7xl mx-auto px-4">

//                 <div className="md:mb-8 mb-8">
//                     <ScrollFloat
//                         animationDuration={1.2}
//                         ease='expo.out'
//                         scrollStart='top bottom-=10%'
//                         scrollEnd='bottom top+=20%'
//                         stagger={0.04}
//                         textClassName="text-3xl md:text-4xl font-serif font-light tracking-tight text-black uppercase"
//                     >
//                         OUR SERVICES
//                     </ScrollFloat>
//                     {/* <div className="absolute left-0 top-[40%] -translate-y-1/2 z-30">
//                         <CarouselPrevious className="static translate-y-0 h-10 w-10 border border-black/10 flex items-center justify-center rounded-full bg-white hover:bg-black hover:text-white transition-all shadow-md active:scale-90 cursor-pointer" />
//                     </div>

//                     <div className="absolute right-0 top-[40%] -translate-y-1/2 z-30">
//                         <CarouselNext className="static translate-y-0 h-10 w-10 border border-black/10 flex items-center justify-center rounded-full bg-white hover:bg-black hover:text-white transition-all shadow-md active:scale-90 cursor-pointer" />
//                     </div> */}
//                 </div>

//                 <Carousel
//                     opts={{
//                         align: "start",
//                         loop: true,
//                     }}
//                     className="w-full relative "
//                 >
//                     <CarouselContent className="-ml-4">
//                         {servicesData.map((service, index) => (
//                             <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 group cursor-pointer">
//                                 <div className="flex flex-col gap-5">

//                                     <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-stone-100 shadow-sm">
//                                         <Image
//                                             src={service.image}
//                                             alt={service.title}
//                                             fill
//                                               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                                             className="object-cover "
//                                         />
//                                     </div>

//                                     <div className="min-h-[50px]">
//                                         <h3 className="text-sm md:text-base font-sans font-semibold tracking-wide uppercase text-black leading-tight">
//                                             {service.title}
//                                         </h3>
//                                     </div>
//                                 </div>
//                             </CarouselItem>
//                         ))}
//                     </CarouselContent>

//                     {/* <div className="absolute left-0 top-[40%] -translate-y-1/2 z-30">
//                         <CarouselPrevious className="static translate-y-0 h-10 w-10 border border-black/10 flex items-center justify-center rounded-full bg-white hover:bg-black hover:text-white transition-all shadow-md active:scale-90 cursor-pointer" />
//                     </div>

//                     <div className="absolute right-0 top-[40%] -translate-y-1/2 z-30">
//                         <CarouselNext className="static translate-y-0 h-10 w-10 border border-black/10 flex items-center justify-center rounded-full bg-white hover:bg-black hover:text-white transition-all shadow-md active:scale-90 cursor-pointer" />
//                     </div> */}

//                 </Carousel>
//             </div>
//         </section>
//     )
// }

// export default Services


"use client";

import React from 'react'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ScrollFloat from '../ScrollFloat';

const servicesData = [
    {
        title: "BELLO DESAIN",
        category: "Studio",
        description: "Layanan desain eksklusif untuk menciptakan ruang idaman.",
        image: "https://www.bellodesainstudio.com/asset/images/bello%20desain%201.jpg",
    },
    {
        title: "Bello Konstruksi",
        category: "Contractor",
        description: "Eksekusi pembangunan dengan standar kualitas tinggi.",
        image: "https://www.bellodesainstudio.com/asset/images/bello%20konst%201.jpg",
    },
    {
        title: "Bello Custom",
        category: "Furniture",
        description: "Pembuatan furniture kustom sesuai kebutuhan ruang.",
        image: "https://www.bellodesainstudio.com/asset/images/bello%20custom%201.jpg",
    },
    {
        title: "Bello Estimator",
        category: "Consultant",
        description: "Perhitungan anggaran akurat untuk efisiensi proyek.",
        image: "https://www.bellodesainstudio.com/asset/images/profile_home.jpg",
    },
];

const Services = () => {
    return (
        <section className="w-full bg-white text-black pt-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full relative"
                >
                    <div className="flex items-end justify-between md:mb-8 mb-8">
                        <ScrollFloat
                            animationDuration={1.2}
                            ease='expo.out'
                            scrollStart='top bottom-=10%'
                            scrollEnd='bottom top+=20%'
                            stagger={0.04}
                            textClassName="text-3xl md:text-5xl font-serif font-light tracking-tight uppercase"
                        >
                            OUR SERVICES
                        </ScrollFloat>

                        <div className="flex gap-2">
                            <CarouselPrevious className="static translate-y-0 h-12 w-12 border border-black/10 flex items-center justify-center rounded-full bg-white hover:bg-black hover:text-white transition-all shadow-md active:scale-90 cursor-pointer" />
                            <CarouselNext className="static translate-y-0 h-12 w-12 border border-black/10 flex items-center justify-center rounded-full bg-white hover:bg-black hover:text-white transition-all shadow-md active:scale-90 cursor-pointer" />
                        </div>
                    </div>

                    <CarouselContent className="-ml-4">
                        {servicesData.map((service, index) => (
                            <CarouselItem key={index} className="pl-4 basis-[85%] md:basis-[45%] lg:basis-[32%] group cursor-pointer">
                                <div className="flex flex-col gap-5">

                                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-stone-100 shadow-sm">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover "
                                        />
                                    </div>

                                    <div className="min-h-[50px]">
                                        <h3 className="text-sm md:text-base font-sans font-semibold tracking-wide uppercase text-black leading-tight">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}

export default Services;