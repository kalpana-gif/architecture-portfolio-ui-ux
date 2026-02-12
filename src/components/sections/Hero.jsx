import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import TextReveal from '../ui/TextReveal';
import TextTypewriter from '../ui/TextTypewriter';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-nude/40 z-10" />
                <motion.div style={{ y }} className="w-full h-full">
                    {/* Placeholder for video or high-res image */}
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale" />
                </motion.div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <h1 className="text-4xl md:text-9xl font-display font-bold leading-[0.9] tracking-tighter text-dark mb-8 break-words">
                    <TextTypewriter className="block font-orbitron">DESIGNING</TextTypewriter>
                    <TextReveal className="block font-architect text-amber" delay={0.2}>SPACES.</TextReveal>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-lg md:text-xl max-w-xl leading-relaxed text-dark/80"
                >
                    We create environments that inspire, endure, and connect.
                    Architecture rooted in nature, crafted for people.
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-6 md:left-auto md:right-10 flex flex-col items-center gap-4 z-10"
            >
                <span className="text-xs uppercase tracking-widest text-dark [writing-mode:vertical-rl] rotate-180">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ArrowDown size={20} className="text-dark" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
