import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import ParallaxImage from '../ui/ParallaxImage';
import TextReveal from '../ui/TextReveal';

const Projects = () => {
    // Dynamically import all images from src/assets/project
    const allImages = useMemo(() => {
        const glob = import.meta.glob('../../assets/project/*.{jpeg,jpg,png,webp}', { eager: true });
        return Object.values(glob).map((module) => module.default);
    }, []);

    // Group images into "Projects"
    const projectGroups = [
        {
            id: 1,
            title: 'The Forest Retreat',
            category: 'Residential',
            location: 'Kandy, Sri Lanka',
            description: 'A sustainable sanctuary nestled within the dense rainforest. The design prioritizes minimal environmental impact, using locally sourced timber and stone. Large cantilevered decks offer immersion in nature while maintaining privacy.',
            tags: ['Eco-Friendly', 'Timber', 'Retreat'],
            images: allImages.slice(0, 5)
        },
        {
            id: 2,
            title: 'Azure Horizon Hotel',
            category: 'Hospitality',
            location: 'Galle, Sri Lanka',
            description: 'A luxury boutique hotel that frames the Indian Ocean. The architecture dissolves the boundary between built form and the horizon, featuring infinity pools, open-air pavilions, and a brutalist yet warm aesthetic.',
            tags: ['Luxury', 'Hospitality', 'Concrete'],
            images: allImages.slice(5, 11)
        },
        {
            id: 3,
            title: 'Urban Onyx HQ',
            category: 'Commercial',
            location: 'Colombo, Sri Lanka',
            description: 'A modern corporate headquarters designed to foster collaboration. The facade features a dynamic shading system that responds to solar orientation, reducing energy consumption while creating a striking visual identity.',
            tags: ['Corporate', 'Sustainable', 'Facade'],
            images: allImages.slice(11, 16)
        },
        {
            id: 4,
            title: 'Cultural Nexus',
            category: 'Public',
            location: 'Jaffna, Sri Lanka',
            description: 'A community center dedicated to arts and culture. The design reinterprets traditional vernacular elements through a contemporary lens, creating spaces for performance, exhibition, and gathering.',
            tags: ['Cultural', 'Public Space', 'Brick'],
            images: allImages.slice(16, 21)
        },
        {
            id: 5,
            title: 'Skyline Penthouse',
            category: 'Interior',
            location: 'Colombo, Sri Lanka',
            description: 'An ultra-modern penthouse interior focused on clean lines, bespoke joinery, and panoramic city views. Every detail, from lighting to furniture, is curated to create an atmosphere of understated luxury.',
            tags: ['Interior', 'Penthouse', 'Bespoke'],
            images: allImages.slice(22, 28)
        }
    ];

    return (
        <section id="work" className="py-24 bg-nude text-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Heading */}
                <div className="mb-16 md:mb-24 relative">
                    <span className="font-architect text-amber text-xl tracking-wide block mb-2">— Portfolio</span>
                    <h2 className="text-4xl md:text-8xl font-bold font-orbitron tracking-tighter text-dark mb-6 relative z-10">
                        <TextReveal>SELECTED</TextReveal> <br />
                        <span className="text-amber relative inline-block">
                            <TextReveal delay={0.2}>WORKS</TextReveal>

                            {/* Hand-drawn underline SVG */}
                            <motion.svg
                                className="absolute -bottom-2 left-0 w-full h-4"
                                viewBox="0 0 200 10"
                                preserveAspectRatio="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
                            >
                                <defs>
                                    <filter id="pencilTexture">
                                        <feTurbulence type="fractalNoise" baseFrequency="2" numOctaves="3" />
                                        <feDisplacementMap in="SourceGraphic" scale="1" />
                                    </filter>
                                </defs>

                                {/* Sketchy hand-drawn path */}
                                <motion.path
                                    d="M 2 5 Q 50 3, 100 5 T 198 5"
                                    stroke="#d4a574"
                                    strokeWidth="2.5"
                                    fill="none"
                                    strokeLinecap="round"
                                    filter="url(#pencilTexture)"
                                    style={{
                                        pathLength: 1,
                                    }}
                                />

                                {/* Second slightly offset line for hand-drawn effect */}
                                <motion.path
                                    d="M 3 6.5 Q 51 4.5, 101 6.5 T 197 6.5"
                                    stroke="#d4a574"
                                    strokeWidth="1.5"
                                    fill="none"
                                    strokeLinecap="round"
                                    opacity="0.6"
                                    filter="url(#pencilTexture)"
                                    style={{
                                        pathLength: 1,
                                    }}
                                />
                            </motion.svg>
                        </span>
                    </h2>

                    {/* Charcoal Pencil Ruler - Simpler approach */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative h-8 z-10 origin-left"
                        style={{ width: '128px' }}
                    >
                        <svg
                            width="128"
                            height="32"
                            viewBox="0 0 128 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full"
                        >
                            <defs>
                                <filter id="charcoalTexture">
                                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
                                    <feGaussianBlur stdDeviation="0.4" />
                                </filter>

                                <linearGradient id="rulerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.9" />
                                    <stop offset="50%" stopColor="#1a1a1a" stopOpacity="0.7" />
                                    <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0.4" />
                                </linearGradient>
                            </defs>

                            {/* Main ruler line */}
                            <line
                                x1="0"
                                y1="16"
                                x2="128"
                                y2="16"
                                stroke="url(#rulerGradient)"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />

                            {/* Measurement marks */}
                            {[...Array(13)].map((_, i) => {
                                const x = i * 10;
                                const isLarge = i % 4 === 0;
                                const isMedium = i % 2 === 0 && !isLarge;
                                const height = isLarge ? 18 : isMedium ? 10 : 6;
                                const y1 = 16 - height / 2;
                                const y2 = 16 + height / 2;
                                const opacity = isLarge ? 0.85 : isMedium ? 0.55 : 0.35;

                                return (
                                    <line
                                        key={i}
                                        x1={x}
                                        y1={y1}
                                        x2={x}
                                        y2={y2}
                                        stroke="#1a1a1a"
                                        strokeWidth="1.8"
                                        strokeOpacity={opacity}
                                        strokeLinecap="round"
                                    />
                                );
                            })}

                            {/* Charcoal texture overlay on everything */}
                            <rect
                                width="128"
                                height="32"
                                fill="none"
                                style={{ filter: 'url(#charcoalTexture)', opacity: 0.15 }}
                            />
                        </svg>
                    </motion.div>
                </div>

                <div className="space-y-40">
                    {projectGroups.map((project, index) => (
                        <div key={project.id} className="grid lg:grid-cols-12 gap-10 lg:gap-20">

                            {/* Project Info - Sticky on Desktop */}
                            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <span className="font-mono text-amber text-lg mb-4 block">0{index + 1}</span>

                                    <h3 className="text-4xl md:text-5xl  font-orbitron leading-tight mb-4 group cursor-pointer hover:text-amber transition-colors">
                                        <TextReveal>{project.title}</TextReveal>
                                    </h3>

                                    <div
                                        className="flex items-center gap-2 text-stone uppercase tracking-widest text-xs font-bold mb-6">
                                        <span className='bg-dark/5 px-2 py-1'>{project.category}</span>
                                        <span className="flex items-center gap-1"><MapPin size={12} /> {project.location}</span>
                                    </div>

                                    <p className="text-stone text-lg leading-relaxed font-architect mb-8 font-light">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map(t => (
                                            <span key={t}
                                                className="text-xs font-mono border border-stone/20 px-2 py-1 text-stone/70">
                                                #{t}
                                            </span>
                                        ))}
                                    </div>

                                    <a href="#"
                                        className="inline-flex items-center gap-2 text-dark font-bold hover:text-amber transition-colors uppercase tracking-widest text-sm group">
                                        View Case Study
                                        <ArrowUpRight
                                            className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                                            size={18} />
                                    </a>
                                </motion.div>
                            </div>

                            {/* Project Images - Scrollable Gallery */}
                            <div className="lg:col-span-8 space-y-6">
                                {/* Main Hero Image with Parallax */}
                                {project.images[0] && (
                                    <div className="aspect-[4/3] w-full bg-stone/10">
                                        <ParallaxImage
                                            src={project.images[0]}
                                            alt={`${project.title} Main View`}
                                            className="w-full h-full"
                                        />
                                    </div>
                                )}

                                {/* Secondary Grid */}
                                <div className="grid grid-cols-2 gap-6">
                                    {project.images.slice(1, 3).map((img, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.1 * i }}
                                            className={`aspect-[3/4] overflow-hidden bg-stone/10 ${i === 1 ? 'mt-12' : ''}`}
                                        >
                                            <img
                                                src={img}
                                                alt={`${project.title} Detail ${i}`}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                                            />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Full Width Detail - subtle parallax or static high quality */}
                                {project.images[3] && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="aspect-[16/9] w-full overflow-hidden bg-stone/10"
                                    >
                                        <img
                                            src={project.images[3]}
                                            alt={`${project.title} Wide Detail`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                                        />
                                    </motion.div>
                                )}

                                {/* Remaining images strip */}
                                {project.images.length > 4 && (
                                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                                        {project.images.slice(4).map((img, i) => (
                                            <div key={i}
                                                className="w-64 aspect-square shrink-0 overflow-hidden bg-stone/10">
                                                <img src={img}
                                                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-32 text-center">
                    <button
                        className="px-10 py-4 border border-dark text-dark text-lg font-display font-bold hover:bg-dark hover:text-white transition-all duration-300">
                        VIEW ALL PROJECTS
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Projects;
