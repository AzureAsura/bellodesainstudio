import { ChevronDown } from "lucide-react"

const Hero = () => {
    return (
        <section className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-stone-950">

            <div className="absolute inset-0 z-0">
                <img
                    src="https://www.bellodesainstudio.com/asset/images/home1.png"
                    alt="Luxury Interior"
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 z-10 bg-black/40"></div>
            </div>

            <div className="relative z-20 text-center flex flex-col items-center px-4 max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-serif font-light tracking-wider text-white leading-tight mb-6 uppercase">
                    Living, Dining, Kitchen Open Space
                </h1>

                <p className="text-white text-[11px] md:text-xs font-light tracking-[0.2em] max-w-2xl mx-auto mb-8 opacity-80 font-sans uppercase">
                    Rooted in <span className="font-semibold">nature</span>,
                    we built harmony between <span className="font-semibold">human, space, and nature.</span>
                </p>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                <div className="group cursor-pointer flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border border-white/30 flex flex-col items-center justify-center transition-all duration-500 group-hover:border-white group-hover:scale-105 relative">
                        <span className="text-white text-[9px] uppercase tracking-[0.2em] font-sans font-light mb-1">
                            Scroll
                        </span>
                        <ChevronDown
                            className="text-white w-3 h-3 animate-bounce absolute bottom-2"
                            strokeWidth={1.5}
                        />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
        </section>
    )
}

export default Hero