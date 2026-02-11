import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                    timeZone: 'Asia/Kolkata',
                })
            );
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-dark text-nude pt-20 pb-10 border-t border-white/5 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 flex flex-col justify-between min-h-[400px]">
                {/* Top Section */}
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            <span className="text-amber font-orbitron"> Building </span><span className="text-amber font-architect">tomorrow</span>, today.
                        </h2>
                        <a
                            href="mailto:hello@arch.com"
                            className="inline-block px-8 py-4 border border-white/20 rounded-full text-lg hover:bg-amber hover:border-amber transition-all duration-300 font-architect"
                        >
                            Start a Project
                        </a>
                    </div>

                    <div className="flex flex-col md:items-end gap-6">
                        <div className="grid grid-cols-2 gap-8 text-sm uppercase tracking-widest text-stone">
                            <div className="flex flex-col gap-4">
                                <span className="text-white font-bold">Socials</span>
                                <a href="#" className="hover:text-amber transition-colors">Instagram</a>
                                <a href="#" className="hover:text-amber transition-colors">LinkedIn</a>
                                <a href="#" className="hover:text-amber transition-colors">Pinterest</a>
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="text-white font-bold">Studio</span>
                                <a href="#work" className="hover:text-amber transition-colors">Work</a>
                                <a href="#philosophy" className="hover:text-amber transition-colors">Philosophy</a>
                                <a href="#contact" className="hover:text-amber transition-colors">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/10 mt-10">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <div className="w-2 h-2 bg-amber rounded-full animate-pulse" />
                        <span className="text-sm text-stone">IST {time}</span>
                    </div>

                    <div className="text-sm text-stone">
                        © {new Date().getFullYear()} Arch Studio. All rights reserved.
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-white/5 rounded-full hover:bg-amber transition-all duration-300 group mt-4 md:mt-0"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
