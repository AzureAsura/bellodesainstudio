"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ScrollFloat from '../ScrollFloat';

const Team = () => {

    const principal = {
        name: "Brahasata Indra",
        title: "CEO & Principal",
        description: "Ar. Ir. Anak Agung Gde Indra Pramana, S.T., IAI, is the CEO and Principal Architect of Manon Design Studio, a Bali-based architecture and interior consultancy he founded in 2021. A graduate of Udayana University, he previously worked at PT. Ajisaka Inti and collaborated with Australia-based Brandrick Architect.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
    };

    const teamMembers = [
        {
            name: "Asnayoni Mira",
            role: "Chief Operating Officer",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
        }, 
        {
            name: "I Putu Bagus",
            role: "Senior Architect",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
        },
        {
            name: "Sari Devi",
            role: "Interior Designer",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop"
        },
        {
            name: "Asnayoni Mira",
            role: "Chief Operating Officer",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
        }, 
        {
            name: "I Putu Bagus",
            role: "Senior Architect",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
        },
        {
            name: "Sari Devi",
            role: "Interior Designer",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.8, ease: "easeOut" as const }
    };

    return (
        <div className="bg-white w-full overflow-hidden text-[#1A365D] pt-20">
            <div className="max-w-7xl mx-auto px-4">

                <section className="flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-32">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full md:basis-[40%]"
                    >

                        <div className="aspect-[4.7/5] overflow-hidden">
                            <img
                                src={principal.image}
                                alt={principal.name}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        {...fadeIn}
                        className="w-full md:basis-[60%] flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-3">
                            <span className="w-[1px] h-4 bg-[#C5A059]" />
                            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold">
                                {principal.title}
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-7xl font-serif font-medium leading-[1.1] tracking-tight uppercase max-w-4xl">
                            {principal.name}
                        </h2>

                        <div className="mt-2">
                            <p className="text-base md:text-xl leading-relaxed font-medium opacity-90 max-w-2xl">
                                {principal.description}
                            </p>
                        </div>
                    </motion.div>
                </section>

                <section className="pb-32">
                    <ScrollFloat
                        animationDuration={1.2}
                        ease='expo.out'
                        scrollStart='top bottom-=10%'
                        scrollEnd='bottom top+=20%'
                        stagger={0.04}
                        textClassName="text-3xl md:text-5xl font-serif font-light tracking-tight uppercase pb-8"
                    >
                        OUR TEAMS
                    </ScrollFloat>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group relative flex flex-col gap-4"
                            >
                                <div className="relative aspect-[3.8/4] overflow-hidden bg-stone-100">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                        <p className="text-white text-[9px] uppercase tracking-[0.3em] mb-1 font-bold">
                                            {member.role}
                                        </p>
                                        <p className="text-white text-lg font-serif uppercase tracking-wider">
                                            {member.name}
                                        </p>
                                    </div>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Team;