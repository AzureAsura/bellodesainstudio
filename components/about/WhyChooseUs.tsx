"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhyChooseUs = () => {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    const reasons = [
        { number: "01", title: "Holistic Approach", description: "End-to-end design solutions tailored to your soul." },
        { number: "02", title: "Exceptional Lifestyles", description: "Crafting spaces that define your personal brand." },
        { number: "03", title: "Unparalleled Quality", description: "Strict curation of materials and craftsmanship." },
        { number: "04", title: "Added Value", description: "Maximizing the potential of every square meter." }
    ];

    return (
        <section className="bg-white py-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-[1px] h-4 bg-[#C5A059]" />
                        <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold">Our Excellence</span>
                        <span className="w-[1px] h-4 bg-[#C5A059]" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif font-medium tracking-tight uppercase text-[#1A365D] mb-8">
                        Why Choose Us
                    </h2>
                    <p className="text-base md:text-lg font-medium opacity-80 max-w-3xl text-[#1A365D] leading-relaxed">
                        One-stop solutions interior design company who stands out as a top-tier choice
                        trusted by both residential and commercial clients.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-white/10">
                    {reasons.map((item, idx) => {
                        const isActive = activeIdx === idx;

                        return (
                            <motion.div 
                                key={idx} 
                                whileTap={{ scale: 0.98 }}
                                className="relative w-full aspect-[6.5/5] md:aspect-[4/5] cursor-pointer border-r border-b border-white/10 overflow-hidden bg-[#1A365D]"
                                onMouseEnter={() => setActiveIdx(idx)}
                                onMouseLeave={() => setActiveIdx(null)}
                                onClick={() => setActiveIdx(isActive ? null : idx)}
                            >
                                <motion.div 
                                    initial={false}
                                    animate={{ 
                                        width: isActive ? "100%" : "0%",
                                        height: isActive ? "100%" : "0%",
                                    }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute top-0 right-0 bg-[#A67C37] z-0"
                                />

                                <div className="relative z-10 h-full w-full p-10 flex flex-col justify-between items-start">
                                    
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-serif leading-none text-white">
                                            {item.number}
                                        </span>
                                        <div className="w-[1px] h-5 md:h-10 bg-white/30" />
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-xl md:text-2xl font-serif uppercase tracking-wider leading-tight text-white">
                                            {item.title.split(' ').map((word, i) => (
                                                <span key={i} className="block">{word}</span>
                                            ))}
                                        </h3>

                                        <div className="overflow-hidden h-auto min-h-[60px]">
                                            <motion.p 
                                                initial={false}
                                                animate={{ 
                                                    y: isActive ? 0 : 50,
                                                    opacity: isActive ? 1 : 0
                                                }}
                                                transition={{ duration: 0.4 }}
                                                className="text-[11px] text-white font-sans uppercase tracking-[0.2em] leading-relaxed"
                                            >
                                                {item.description}
                                            </motion.p>
                                        </div>
                                    </div>
                                    
                                    <div className="w-full h-[1px] bg-white mt-4" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;