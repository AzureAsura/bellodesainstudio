import React from 'react'
import ScrollFloat from '../ScrollFloat'
import AnimatedContent from '../AnimatedContent'

const About = () => {
    return (
        <section className="relative w-full overflow-hidden py-20 md:py-24">

            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-black/70 via-[65%] to-transparent" />

            <div className="relative z-20  mx-auto px-4 max-w-7xl flex flex-col items-center text-center">

                <div className="max-w-5xl mb-10 md:mb-16">

                    <ScrollFloat
                        animationDuration={1.2}
                        ease='expo.out'
                        scrollStart='top bottom-=10%'
                        scrollEnd='bottom top+=20%'
                        stagger={0.04}
                        textClassName="text-4xl md:text-7xl font-serif text-white font-light tracking-tight uppercase"
                    >
                        CV. Bello Desain
                    </ScrollFloat>

                    <ScrollFloat
                        animationDuration={1.2}
                        ease='power4.out'
                        scrollStart="top 90%"
                        scrollEnd="bottom 40%"
                        stagger={0.01}
                        containerClassName="max-w-4xl mx-auto"
                        textClassName="text-white/60 text-sm md:text-xl font-light leading-relaxed font-sans "
                    >
                        Perusahaan yang bergerak di bidang jasa Desain Gambar, Kontraktor, serta Interior & Eksterior. Kami berkomitmen menciptakan karya yang berkualitas, kokoh, dan memberikan kenyamanan di setiap sudut hunian Anda.
                    </ScrollFloat>
                </div>

                <AnimatedContent
                    distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}
                >
                    <div
                        className="relative md:w-full md:max-w-6xl aspect-[15/10] md:aspect-[21/9] rounded-tr-[40px] md:rounded-tr-[100px] rounded-bl-[40px] md:rounded-bl-[100px] overflow-hidden border border-white/10 shadow-2xl mx-auto"
                    >
                        <img
                            src="https://www.bellodesainstudio.com/asset/images/profile_home.jpg"
                            alt="Space Background"
                            className="w-full h-full object-cover scale-110 brightness-75"
                        />
                    </div>
                </AnimatedContent>


            </div>

        </section>
    )
}

export default About
