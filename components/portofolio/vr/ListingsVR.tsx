"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ListingsVR = () => {
    const projects = [
        {
            date: "18 April 2026",
            title: "RUMAH BALI MODERN",
            owner: "I Made Sukadana",
            image: "https://www.bellodesainstudio.com/asset/images/VE/01_2%20pak%20werdy.png"
        },
        {
            date: "12 Maret 2026",
            title: "UBUD TROPICAL RESIDENCE",
            owner: "Indra Atmaja",
            image: "https://www.bellodesainstudio.com/asset/images/VE/02_Rumah%20Split%20Level.png"
        },
        {
            date: "18 April 2026",
            title: "RUMAH BALI MODERN",
            owner: "I Made Sukadana",
            image: "https://www.bellodesainstudio.com/asset/images/VE/01_2%20pak%20werdy.png"
        },
        {
            date: "12 Maret 2026",
            title: "UBUD TROPICAL RESIDENCE",
            owner: "Indra Atmaja",
            image: "https://www.bellodesainstudio.com/asset/images/VE/02_Rumah%20Split%20Level.png"
        }
    ];

    return (
        <section className="bg-white py-10 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((item, index) => (
                        <motion.article 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group flex flex-col cursor-pointer"
                        >
                            <div className="relative aspect-[16/9] overflow-hidden bg-[#1A365D] mb-8">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                                <motion.div 
                                    className="absolute top-0 right-0 bg-[#C5A059] z-10"
                                    initial={{ width: 0, height: 0 }}
                                    whileHover={{ width: "100%", height: "4px" }}
                                    transition={{ duration: 0.4 }}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <span className="w-[1px] h-4 bg-[#C5A059]" />
                                    <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold font-sans">
                                        {item.date}
                                    </span>
                                </div>

                                <h2 className="text-3xl font-serif uppercase tracking-wider leading-[1.1] text-[#1A365D] group-hover:text-[#A67C37] transition-colors duration-500">
                                        <span className="block">{item.title}</span>
                                </h2>

                                <div className="mt-2">
                                    <p className="text-[11px] text-[#1A365D] font-sans uppercase tracking-[0.2em] leading-relaxed opacity-70">
                                        PROJECT BY <span className="font-bold opacity-100">{item.owner}</span>
                                    </p>

                                </div>

                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ListingsVR;