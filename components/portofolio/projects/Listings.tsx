"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const TeamGrid = () => {

    const teamMembers = [
        { name: "KEBILBIL APARTMENT", role: "PROJECT ARCHITECT", image: "https://www.bellodesainstudio.com/asset/images/AR/01%201.jpeg" }, 
        { name: "BELLO DESAIN TEAM", role: "INTERIOR DESIGN", image: "https://www.bellodesainstudio.com/asset/images/AR/02%201.jpeg" }, 
        { name: "MODERN VILLA", role: "PROJECT LEADER", image: "https://www.bellodesainstudio.com/asset/images/AR/03%201.jpg" },
        { name: "KEBILBIL APARTMENT", role: "PROJECT ARCHITECT", image: "https://www.bellodesainstudio.com/asset/images/AR/01%201.jpeg" }, 
        { name: "BELLO DESAIN TEAM", role: "INTERIOR DESIGN", image: "https://www.bellodesainstudio.com/asset/images/AR/02%201.jpeg" }, 
        { name: "MODERN VILLA", role: "PROJECT LEADER", image: "https://www.bellodesainstudio.com/asset/images/AR/03%201.jpg" },
    ];

    return (
        <section className="bg-white py-10 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {teamMembers.map((member, index) => (
                        <Link href={`/portfolio/projects/${index + 1}`} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group relative flex flex-col overflow-hidden" 
                            >
                                <div className="relative aspect-[3.8/4] overflow-hidden bg-stone-100">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover" 
                                    />

                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 text-center backdrop-blur-sm">
                                        <div className="flex flex-col items-center gap-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                            
                                            <p className="text-[#C5A059] text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-extrabold leading-none">
                                                {member.role}
                                            </p>
                                            
                                            <p className="text-white text-2xl md:text-3xl font-cormorant uppercase tracking-wider font-bold leading-tight">
                                                {member.name}
                                            </p>

                                            <div className="w-12 h-[1px] bg-[#C5A059] mt-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-300" />
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamGrid;