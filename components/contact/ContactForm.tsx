"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ContactForm = () => {
    return (
        <section className="bg-white py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    
                    {/* SISI KIRI: FORM */}
                    <div className="flex-[1.2] w-full">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-8 h-[1px] bg-[#C5A059]" />
                            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold font-sans">Get In Touch</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1A365D] uppercase leading-tight mb-12">
                            Tell Us About <br /> Your Project
                        </h2>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                            {/* Full Name */}
                            <div className="relative group">
                                <input 
                                    type="text" 
                                    placeholder="Full Name"
                                    className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#1A365D] font-sans text-sm transition-colors placeholder:text-stone-400"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="relative group">
                                <input 
                                    type="tel" 
                                    placeholder="Phone Number"
                                    className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#1A365D] font-sans text-sm transition-colors placeholder:text-stone-400"
                                />
                            </div>

                            {/* Email */}
                            <div className="relative group">
                                <input 
                                    type="email" 
                                    placeholder="Email Address"
                                    className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#1A365D] font-sans text-sm transition-colors placeholder:text-stone-400"
                                />
                            </div>

                            {/* Land Location */}
                            <div className="relative group">
                                <input 
                                    type="text" 
                                    placeholder="Land Location"
                                    className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#1A365D] font-sans text-sm transition-colors placeholder:text-stone-400"
                                />
                            </div>

                            {/* Land Size */}
                            <div className="relative group">
                                <input 
                                    type="text" 
                                    placeholder="Land Size (In square meters / are / hectare, etc)"
                                    className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#1A365D] font-sans text-sm transition-colors placeholder:text-stone-400"
                                />
                            </div>

                            {/* Budget */}
                            <div className="relative group">
                                <input 
                                    type="text" 
                                    placeholder="Budget Range"
                                    className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#1A365D] font-sans text-sm transition-colors placeholder:text-stone-400"
                                />
                            </div>

                            {/* Project Type Dropdown */}
                            <div className="relative group md:col-span-2">
                                <div className="flex items-center justify-between border-b border-stone-200 py-3 cursor-pointer">
                                    <span className="text-stone-400 font-sans text-sm">Residential</span>
                                    <ChevronDown className="w-4 h-4 text-stone-400" />
                                </div>
                            </div>

                            {/* Project Detail */}
                            <div className="relative group md:col-span-2">
                                <textarea 
                                    placeholder="Tell us about your project detail"
                                    rows={4}
                                    className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#1A365D] font-sans text-sm transition-colors placeholder:text-stone-400 resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="md:col-span-2 pt-6">
                                <motion.button 
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className="w-full bg-[#FFD700] hover:bg-[#F2CC00] text-[#1A365D] font-sans font-extrabold text-[10px] uppercase tracking-[0.4em] py-5 transition-all shadow-sm"
                                >
                                    Submit
                                </motion.button>
                            </div>
                        </form>
                    </div>

                    {/* SISI KANAN: IMAGE */}
                    <div className="flex-1 w-full lg:sticky lg:top-24">
                        <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                            <img 
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                                alt="Modern Architecture"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay Aksen */}
                            <div className="absolute inset-0 bg-[#1A365D]/10 group-hover:bg-transparent transition-all duration-500"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactForm;