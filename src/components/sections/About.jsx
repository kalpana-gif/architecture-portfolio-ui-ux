import React from 'react';
import { motion } from 'framer-motion';
import Marquee from '../ui/Marquee';
import profilePhoto from '../../assets/profile-photo.png'; // Add this import

const About = () => {
    return (
        <section id="about" className="py-32 bg-nude relative overflow-hidden">

            {/* Grid Background for Blueprint effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />

            <Marquee speed={40} />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center mt-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, rotate: -2 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Tape effect */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-amber/20 backdrop-blur-sm -rotate-2 z-20 shadow-sm border border-white/20" />

                    <div className="relative z-10 p-4 bg-white shadow-xl rotate-1">
                        <div className="aspect-[4/5] bg-stone/5 overflow-hidden relative">
                            <img
                                src={profilePhoto} // Change this line
                                alt="Architect Portrait"
                                className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity duration-700 contrast-125"
                            />
                            {/* Sketch overlay effect */}
                            <div className="absolute inset-0 bg-paper-texture mix-blend-overlay" />
                        </div>

                        <div className="mt-4 font-architect text-stone text-center text-lg">
                            "Crafting spaces, one detail at a time"
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="mb-8">
                        <span className="font-architect text-amber text-xl tracking-wide">— The Designer</span>
                    </div>

                    <h2 className="font-orbitron text-5xl md:text-6xl mb-4 text-dark">
                        Tharaka Kasun
                    </h2>

                    <p className="text-2xl font-architect text-amber mb-10">
                        Interior Designer & Spatial Innovator
                    </p>

                    <div className="space-y-5 text-dark/80 text-lg font-architect leading-relaxed">
                        <p>
                            <span className="text-amber font-bold">10+ years</span> transforming concepts into award-worthy spaces across hospitality, commercial, and residential sectors.
                        </p>
                        <p>
                            From <span className="text-amber">sketch to reality</span>—specializing in 3D visualization, complete spatial planning, and meticulous execution of projects valued at <span className="font-bold">500M+ LKR</span>.
                        </p>
                        <p className="text-dark font-bold text-xl">
                            "Design with precision. Build with passion."
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-6 font-architect text-base">
                        <div>
                            <div className="text-amber font-bold mb-1">Education</div>
                            <div className="text-stone/70">B.Design (Hons)</div>
                            <div className="text-stone/60 text-sm">University of Moratuwa</div>
                        </div>
                        <div>
                            <div className="text-amber font-bold mb-1">Experience</div>
                            <div className="text-stone/70">Project Coordinator</div>
                            <div className="text-stone/60 text-sm">Since 2014</div>
                        </div>
                        <div>
                            <div className="text-dark font-bold mb-1">Expertise</div>
                            <div className="text-stone/70 text-sm">AutoCAD • Lumion</div>
                            <div className="text-stone/60 text-sm">SketchUp • 3D Viz</div>
                        </div>
                        <div>
                            <div className="text-amber font-bold mb-1">Focus</div>
                            <div className="text-stone/70 text-sm">Hotels • Showrooms</div>
                            <div className="text-stone/60 text-sm">Restaurants • Homes</div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <link href="https://fonts.googleapis.com/css2?family=Allura&display=swap" rel="stylesheet" />

                        <svg
                            className="h-20 w-auto opacity-70"
                            viewBox="0 0 380 110"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <text
                                x="20"
                                y="65"
                                style={{
                                    fontFamily: "'Allura', cursive",
                                    fontSize: '56px',
                                    fill: '#1a1a1a',
                                    fontWeight: '400',
                                }}
                            >
                                Tharaka Kasun
                            </text>

                            <path
                                d="M 30 78 C 70 82, 110 75, 150 80 C 190 84, 230 77, 270 82 C 295 85, 315 80, 335 83"
                                stroke="#1a1a1a"
                                strokeWidth="2"
                                fill="none"
                                opacity="0.75"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;