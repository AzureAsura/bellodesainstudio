import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { SERVICES_DATA, ServiceId } from '@/constants';
import { notFound } from 'next/navigation';
import { ArticleDesc } from '@/components/ArticleDesc';

const ServicePage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params

    const data = SERVICES_DATA[id as ServiceId];

    if (!data) {
        notFound();
    }

    return (
        <main className="bg-white">

            <section className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-stone-950">
                <div className="absolute inset-0 z-0">
                    <img
                        src={data.heroImage}
                        alt={data.title}
                        className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 z-10 bg-black/40" />
                </div>
                <div className="relative z-20 text-center flex flex-col items-center px-4 max-w-6xl mx-auto">
                    <p className="text-white text-[11px] md:text-xs font-light tracking-[0.2em] max-w-2xl mx-auto mb-3 opacity-80 font-sans uppercase">
                        Our Services
                    </p>
                    <h1 className="text-3xl md:text-5xl font-serif font-light tracking-wider text-white leading-tight uppercase">
                        {data.title}
                    </h1>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                    <div className="group cursor-pointer flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full border border-white/30 flex flex-col items-center justify-center transition-all duration-500 group-hover:border-white group-hover:scale-105 relative">
                            <span className="text-white text-[9px] uppercase tracking-[0.2em] font-sans font-light mb-1">
                                Scroll
                            </span>
                            <ChevronDown className="text-white w-3 h-3 animate-bounce absolute bottom-2" strokeWidth={1.5} />
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent z-10" />
            </section>

            <section className="py-10 md:py-20 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="flex-1 space-y-8">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-[#C5A059]" />
                                <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold font-sans">
                                    {data.visionaryTag}
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-serif text-[#1A365D] leading-tight uppercase">
                                {data.title}
                            </h2>
                            <ArticleDesc blocks={data.desc1} />
                        </div>
                        <div className="flex-1 w-full">
                            <div className="relative aspect-[6/5] overflow-hidden group">
                                <img
                                    src={data.sideImage}
                                    alt={data.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-stone-50 mt-10 py-16 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <ArticleDesc blocks={data.quote} />
                </div>
            </section>

            <section className="py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <Carousel opts={{ align: "start" }} className="w-full relative">
                        <CarouselContent className="-ml-4">
                            {data.projects.map((project, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pl-4 basis-[85%] md:basis-[45%] lg:basis-[33.33%] group cursor-pointer"
                                >
                                    <div className="flex flex-col gap-6">
                                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
                                            <Image
                                                src={project.image}
                                                alt='Image'
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex items-end justify-end md:mt-12 mt-8">
                            <div className="flex gap-4">
                                <CarouselPrevious className="static translate-y-0 h-14 w-14 border border-[#1A365D]/10 flex items-center justify-center rounded-full bg-white hover:bg-[#1A365D] hover:text-white transition-all shadow-sm cursor-pointer" />
                                <CarouselNext className="static translate-y-0 h-14 w-14 border border-[#1A365D]/10 flex items-center justify-center rounded-full bg-white hover:bg-[#1A365D] hover:text-white transition-all shadow-sm cursor-pointer" />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </section>
        </main>
    );
};

export default ServicePage;