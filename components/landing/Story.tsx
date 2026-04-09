import React from "react";
import { ArrowRight } from "lucide-react";

export default function StorySection() {
    return (
        <section className="w-full min-h-[500px] md:h-[650px] relative overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://www.bellodesainstudio.com/storage/portfolio/jxXgCOwnp6knLBaVKxpVPwuaoWUxDbixUkpMDmF1.jpg"
                    alt="Story Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent" />
            </div>

            <div className="container relative z-10 mx-auto h-full px-5 flex flex-col justify-center text-white py-16 md:py-0">
                <div className="max-w-2xl space-y-4 md:space-y-5">

                    <p className="text-[10px] md:text-xs font-semibold opacity-90 tracking-widest uppercase">
                        Esensi #BelloStudio
                    </p>

                    <h2 className="text-2xl md:text-4xl lg:text-[40px] font-bold leading-tight tracking-tight">
                        Keharmonisan Alam <br className="hidden md:block" /> Dalam Balutan <br className="hidden md:block" /> Modernisme Minimalis.
                    </h2>

                    <div className="flex items-center gap-3 py-1">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/30 shrink-0">
                            <img
                                src="https://www.bellodesainstudio.com/asset/images/teams/indra.jpg"
                                alt="Doctor"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-1">
                            <p className="font-serif font-bold text-sm md:text-lg leading-none tracking-wide uppercase">
                                Indra Atmaja
                            </p>
                            <p className="text-[10px] md:text-xs opacity-70 font-medium tracking-[0.15em] uppercase">
                                DIRECTOR of Bello Design
                            </p>
                        </div>
                    </div>

                    <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-lg">
                        Mengambil inspirasi dari garis alami dan kejujuran material, setiap proyek Bello adalah upaya untuk membawa ketenangan alam ke dalam hiruk-pikuk kehidupan modern. Kesederhanaan adalah bentuk tertinggi dari kecanggihan.
                    </p>

                </div>
            </div>
        </section>
    );
}