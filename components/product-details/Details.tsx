"use client";

import React from 'react';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const projectDetails = {
    title: "KA MI MA RESIDENCE KETEWEL III",
    category: "Luxury Residence",
    location: "Ketewel, Bali",
    content: `
        ### The Concept
        Proyek ini merupakan perwujudan dari hunian modern yang mengedepankan fungsionalitas tanpa meninggalkan estetika arsitektur tropis. Terletak di kawasan Ketewel, hunian ini dirancang untuk memaksimalkan sirkulasi udara alami dan pencahayaan matahari.

        ### Architectural Excellence
        Dalam unit **Bello desain**, kategori layanan yang diberikan mencakup lingkup penuh, mulai dari:
        * **Konsep Layout**: Penyesuaian blok dan site plan.
        * **Struktur**: Perencanaan detail pondasi hingga atap.
        * **Interior**: Pemilihan material premium yang senada dengan eksterior.

        Rumah hunian ini dibangun dengan memastikan setiap sudut ruangan mencerminkan kepribadian klien, menciptakan ruang yang tidak hanya indah dipandang tetapi juga nyaman untuk ditinggali.
    `,
    gallery: [
        { image: "https://www.bellodesainstudio.com/asset/images/home1.png" },
        { image: "https://www.bellodesainstudio.com/asset/images/home1.png" },
        { image: "https://www.bellodesainstudio.com/asset/images/home1.png" },
        { image: "https://www.bellodesainstudio.com/asset/images/home1.png" },
    ]
};

const Details = () => {
    return (
        <div className="bg-white">
            <section className="pt-10 md:pt-20 px-4">
                <div className="max-w-7xl mx-auto">

                    <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-[1px] bg-[#C5A059]" />
                        <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold font-sans">
                            {projectDetails.category}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif text-[#1A365D] uppercase leading-tight mb-8">
                        {projectDetails.title}
                    </h1>
                </div>
            </section>

            <section className="pb-10 md:pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <article className="prose prose-stone max-w-none 
                        prose-headings:font-serif prose-headings:text-[#1A365D] prose-headings:uppercase prose-headings:tracking-wider
                        prose-p:font-sans prose-p:text-[#1A365D]/80 prose-p:leading-relaxed
                        prose-li:font-sans prose-li:text-[#1A365D]/80
                        prose-strong:text-[#C5A059] prose-strong:font-bold">
                        
                        <div dangerouslySetInnerHTML={{ __html: `
                            <h2>The Concept</h2>
                            <p>Proyek ini merupakan perwujudan dari hunian modern yang mengedepankan fungsionalitas tanpa meninggalkan estetika arsitektur tropis. Terletak di kawasan Ketewel, hunian ini dirancang untuk memaksimalkan sirkulasi udara alami dan pencahayaan matahari.</p>
                            
                            <h2>Architectural Excellence</h2>
                            <p>Dalam unit <strong>Bello desain</strong>, kategori layanan yang diberikan mencakup lingkup penuh, mulai dari:</p>
                            <ul>
                                <li><strong>Konsep Layout</strong>: Penyesuaian blok dan site plan.</li>
                                <li><strong>Struktur</strong>: Perencanaan detail pondasi hingga atap.</li>
                                <li><strong>Interior</strong>: Pemilihan material premium yang senada dengan eksterior.</li>
                            </ul>
                        `}} />
                    </article>
                </div>
            </section>

            <section className="pt-10 pb-20 md:py-20  bg-stone-50 overflow-hidden border-t border-stone-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="w-[1px] h-4 bg-[#C5A059]" />
                                <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold font-sans">Visual Gallery</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif text-[#1A365D] uppercase">Project Showcase</h2>
                        </div>
                    </div>

                    <Carousel opts={{ align: "start" }} className="w-full relative">
                        <CarouselContent className="-ml-4">
                            {projectDetails.gallery.map((project, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pl-4 basis-[85%] md:basis-[45%] lg:basis-[33.33%] group cursor-pointer"
                                >
                                    <div className="flex flex-col gap-6">
                                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-white shadow-sm transition-all duration-500 group-hover:shadow-xl">
                                            <Image
                                                src={project.image}
                                                alt='Project Image'
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover "
                                            />
                                            <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-l-[30px] border-t-[#C5A059] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        
                        <div className="flex items-end justify-end md:mt-12 mt-8">
                            <div className="flex gap-4">
                                <CarouselPrevious className="static translate-y-0 h-14 w-14 border border-[#1A365D]/10 flex items-center justify-center rounded-full bg-white hover:bg-[#1A365D] hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer" />
                                <CarouselNext className="static translate-y-0 h-14 w-14 border border-[#1A365D]/10 flex items-center justify-center rounded-full bg-white hover:bg-[#1A365D] hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer" />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </section>
        </div>
    );
};

export default Details;