"use client";

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = () => {
    const pages = [1, 2, 3];
    const currentPage = 2;

    return (
        <nav className="bg-white py-12 flex justify-center items-center">
            {/* Wrapper: Border-collapse style biar solid */}
            <div className="flex items-center border border-stone-200 shadow-sm">
                
                {/* Prev */}
                <button className="p-4 flex items-center justify-center bg-white text-[#1A365D] hover:bg-stone-50 border-r border-stone-200 transition-colors">
                    <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
                </button>

                {/* Numbers */}
                <div className="flex">
                    {pages.map((page) => {
                        const isActive = page === currentPage;
                        return (
                            <div 
                                key={page}
                                className={`relative p-4 flex items-center justify-center cursor-pointer transition-all duration-300 border-r border-stone-200 last:border-r-0 min-w-[64px]
                                    ${isActive ? 'bg-[#1A365D]' : 'bg-white hover:bg-stone-50'}`}
                            >

                                <span className={`text-base md:text-lg font-serif tracking-widest leading-none
                                    ${isActive ? 'text-white' : 'text-[#1A365D]'}`}>
                                    {page.toString().padStart(2, '0')}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Next */}
                <button className="p-4 flex items-center justify-center bg-white text-[#1A365D] hover:bg-stone-50 border-l border-stone-200 transition-colors">
                    <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
                </button>

            </div>
        </nav>
    );
};

export default Pagination;