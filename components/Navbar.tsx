"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <>
            <nav
                className={`w-full py-4 fixed top-0 z-[60] transition-all duration-500 ease-in-out ${isScrolled
                        ? 'bg-white shadow-sm'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between">

                        <Link href="/" className="group flex flex-col leading-none shrink-0">
                            <span className={`text-3xl md:text-4xl font-serif font-medium tracking-[0.15em] transition-all duration-700 ${isScrolled ? 'text-[#1A365D]' : 'text-white'
                                }`}>
                                BELLO<span className="text-[#C5A059] font-bold">.</span>
                            </span>
                            <div className="flex items-center gap-2 mt-2">
                                <span className={`h-[1px] w-4 transition-all duration-700 bg-[#C5A059] ${isScrolled ? 'opacity-100' : 'opacity-70'}`}></span>
                                <span className={`text-[8px] tracking-[0.5em] font-semibold uppercase transition-all duration-700 ${isScrolled ? 'text-stone-500' : 'text-white'
                                    }`}>
                                    Design Studio
                                </span>
                            </div>
                        </Link>

                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative text-[11px] uppercase tracking-[0.3em] font-bold transition-colors duration-500 group ${isScrolled ? 'text-[#1A365D]/80 hover:text-[#C5A059]' : 'text-white hover:text-white/70'
                                        }`}
                                >
                                    {link.name}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-500 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-3 md:gap-6">
                            <button className={`hidden sm:block transition-all duration-500 ${isScrolled ? 'text-[#1A365D]' : 'text-white'
                                }`}>
                                <Search size={25} strokeWidth={1.5} />
                            </button>

                            <Link
                                href="/contact"
                                className={`hidden relative overflow-hidden group border px-5 py-2 md:px-8 md:py-4 transition-all duration-700 md:flex items-center justify-center  ${isScrolled
                                        ? 'border-[#1A365D]/20 text-[#1A365D]'
                                        : 'border-white/30 text-white hover:border-white'
                                    }`}
                            >
                                <span className="relative z-10 text-[8px] md:text-[10px]  font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-700">
                                    Inquire Now
                                </span>
                                <span className="absolute inset-0 bg-[#1A365D] transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></span>
                            </Link>

                            <button
                                onClick={() => setMobileMenuOpen(true)}
                                className={`lg:hidden transition-all duration-500 ${isScrolled ? 'text-[#1A365D]' : 'text-white'}`}
                            >
                                <Menu size={28} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={`fixed inset-0 z-[70] bg-[#1A365D] transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                }`}>
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
                >
                    <X size={32} strokeWidth={1.5} />
                </button>

                <div className="flex flex-col h-full justify-center items-center space-y-10">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-3xl md:text-5xl font-serif font-bold tracking-widest text-white hover:text-[#C5A059] transition-all duration-500 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className={`pt-10 transition-all duration-1000 delay-500 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-[#C5A059] text-[10px] font-bold tracking-[0.5em] uppercase">Bello Design Studio</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;