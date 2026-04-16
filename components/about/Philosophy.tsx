import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const Philosophy = () => {
    return (
        <section className="relative w-full py-20 flex flex-col items-center justify-center overflow-hidden bg-[#1A365D]">
            
            <div className="container mx-auto px-4 z-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                
                <div className="text-left flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <span className="w-[1px] h-4 bg-[#C5A059]" />
                        <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold">
                            Our Philosophy
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-medium leading-[1.1] tracking-tight text-white uppercase">
                        Bello
                        Design <br />
                        Studio
                    </h1>

                    <div className="mt-4">
                        <p className="text-base md:text-lg leading-relaxed font-medium opacity-90 max-w-[500px] text-white">
                            Our success and satisfaction of Bello Interior relies on the combination of a strongly driven team environment.
                            <br /><br />
                            From design development to project management we share similar objectives and goals, which is to maximize our effort and to create unique-ness to each and every project.
                        </p>
                    </div>
                </div>

                <div className="relative z-10 flex justify-center items-center">
                    <div className="relative z-10 flex justify-center w-full max-w-[500px]">
                        <div className="absolute top-4 right-4 bg-[#C5A059] aspect-[14/11] rounded-sm w-full h-full -z-10 opacity-70"></div>
                        <Image
                            src="https://www.bellodesainstudio.com/storage/portfolio/uJbq6TBenFkKioeI33TyGB93KrW4WGEPh1vTJRu2.jpg"
                            alt="Luxury Interior"
                            width={500}
                            height={393}
                            className="w-full aspect-[14/11] object-cover rounded-sm filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-10"
                        />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Philosophy