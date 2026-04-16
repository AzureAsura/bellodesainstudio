"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface FloatingImageProps {
    src: string;
    alt: string;
    className?: string;
}


const FloatingImage: React.FC<FloatingImageProps> = ({ src, alt, className = "" }) => (
    <motion.div
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className={`relative z-10 flex justify-center ${className}`}
    >
        <img
            src={src}
            alt={alt}
            className="w-full aspect-[14/11] object-cover rounded-sm filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
        />
    </motion.div>
);

const HowItWorks: React.FC = () => {
    const fadeInStructure: Variants = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
    };

    return (
        <div className="bg-white w-full overflow-hidden text-[#1A365D] md:pt-20">

            <section className="relative py-10 px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

                <motion.div
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    variants={fadeInStructure}
                    className="flex-1 flex flex-col gap-6 text-left"
                >
                    <div className="flex items-center gap-3">
                        <span className="w-[1px] h-4 bg-[#C5A059]" />
                        <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold">
                            About Our Studio
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif font-medium leading-[1.1] tracking-tight uppercase">
                        Kreativitas <br />
                        tanpa Batas
                    </h2>

                    <div className="mt-4">
                        <p className="text-base md:text-lg leading-relaxed font-medium opacity-90 max-w-[500px]">
                            Bello Design Studio menghadirkan harmoni antara estetika dan fungsi. Kami percaya bahwa setiap sudut ruangan adalah kanvas untuk mengekspresikan jati diri Anda yang paling otentik.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex-1 relative flex justify-center items-center"
                >
                    <FloatingImage
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
                        alt="Bello Design Interior"
                    />
                </motion.div>
            </section>


            <section className="relative pt-10 md:pt-16 pb-10 px-4 max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">

                <motion.div
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    variants={fadeInStructure}
                    className="flex-1 flex flex-col gap-6 text-left"
                >
                    <div className="flex items-center gap-3">
                        <span className="w-[1px] h-4 bg-[#C5A059]" />
                        <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold">
                            Our Craftsmanship
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif font-medium leading-[1.1] tracking-tight uppercase">
                        Detail yang <br />
                        bicara
                    </h2>

                    <div className="mt-4">
                        <p className="text-base md:text-lg leading-relaxed font-medium opacity-90 max-w-[500px]">
                            Kami tidak hanya membangun ruang, kami membangun kenyamanan. Setiap material dipilih dengan kurasi ketat untuk memastikan standar kualitas tertinggi bagi klien kami.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex-1 relative flex justify-center items-center"
                >
                    <FloatingImage
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop"
                        alt="Craftsmanship Detail"
                    />
                </motion.div>
            </section>

        </div>
    );
};

export default HowItWorks;