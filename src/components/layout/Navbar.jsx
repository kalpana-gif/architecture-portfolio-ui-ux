import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Work', href: '#work' },
        { name: 'Philosophy', href: '#philosophy' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-nude/80 backdrop-blur-md border-b border-nude/10 shadow-sm' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold font-display tracking-tight hover:text-amber transition-colors text-dark">
                    ARCH<span className="text-amber">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm uppercase tracking-widest font-medium text-stone hover:text-amber transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="mailto:hello@arch.com"
                        className="px-6 py-2 border border-dark/10 rounded-full text-sm uppercase tracking-widest hover:bg-amber hover:text-white hover:border-amber transition-all duration-300 text-dark"
                    >
                        Inquire
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-dark hover:text-amber transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-24 left-0 w-full bg-nude/95 backdrop-blur-xl border-b border-stone/10 md:hidden flex flex-col items-center py-10 gap-8"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-display font-bold text-dark hover:text-amber transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="mailto:hello@arch.com"
                            className="px-8 py-3 border border-amber rounded-full text-lg font-display text-white bg-amber hover:bg-amber/90 transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Inquire
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
