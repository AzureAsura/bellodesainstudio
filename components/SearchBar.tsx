"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const SearchBar = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <section className="bg-white pt-10 md:pt-20 px-4 w-full flex justify-center items-center">
            <div className="max-w-7xl w-full flex flex-col md:gap-4">
                
                <div className="flex items-center gap-3">
                    <span className="w-[1px] h-4 bg-[#C5A059]" />
                    <span className="text-[10px] uppercase tracking-[0.5em] text-[#1A365D] font-bold">
                        Search Project
                    </span>
                </div>

                <div className="relative flex items-center group h-24 border-b border-stone-200">
                    
                    <input
                        type="text"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="ENTER KEYWORDS..."
                        className="w-full h-full bg-transparent text-[#1A365D] text-3xl md:text-5xl font-serif uppercase tracking-tight outline-none placeholder:text-stone-200"
                    />

                    <motion.button 
                        whileTap={{ scale: 0.9 }}
                        className="ml-4 p-4 text-[#1A365D] hover:text-[#C5A059] transition-colors duration-300"
                    >
                        <Search className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                    </motion.button>

                    <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isFocused ? 1 : 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#A67C37] origin-left z-10"
                    />
                </div>

            </div>
        </section>
    );
};

export default SearchBar;