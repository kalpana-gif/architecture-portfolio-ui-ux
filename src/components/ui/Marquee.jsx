import React, { useRef, useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Marquee = ({ speed = 25 }) => {
    const scrollRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

    // Drag scrolling state
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Dynamically import all images from src/assets/project
    const images = useMemo(() => {
        const glob = import.meta.glob('../../assets/project/*.{jpeg,jpg,png,webp}', { eager: true });
        return Object.values(glob).map((module) => ({
            url: module.default,
            title: 'Architectural Detail',
            location: 'Portfolio Project'
        }));
    }, []);

    // Create a large enough list for scrolling feel
    const displayImages = [...images, ...images, ...images].slice(0, 60);

    // Mouse drag handlers
    const handleMouseDown = (e) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
        scrollRef.current.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        if (scrollRef.current) {
            scrollRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (scrollRef.current) {
            scrollRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Multiply by 2 for faster scroll
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    // Auto-scroll logic
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId;

        const scroll = () => {
            if (!isPaused && !isDragging && scrollContainer) {
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3 * 2) {
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += 0.5;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused, isDragging, displayImages.length]);

    return (
        <div className="py-8 md:py-2 bg-white">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
                <div>
                    <span className="font-architect text-amber text-xl tracking-wide block mb-2">— Selected Works</span>
                    <h2 className="text-5xl md:text-7xl font-bold font-orbitron tracking-tighter text-dark">
                        PROJECT<span className="text-amber">S</span>
                    </h2>
                </div>
                <div className="hidden md:block text-stone text-sm uppercase tracking-widest font-body">
                    <span className="w-2 h-2 inline-block bg-amber rounded-full mr-2 animate-pulse" />
                    Interactive Gallery
                </div>
            </div>

            {/* Scrollable Container */}
            <div
                className="relative w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => {
                    setIsPaused(false);
                    handleMouseLeave();
                }}
            >
                {/* Fade Gradients */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div
                    ref={scrollRef}
                    className="flex gap-6 md:gap-8 px-6 overflow-x-auto scrollbar-hide pb-10 cursor-grab active:cursor-grabbing select-none"
                    style={{ scrollBehavior: 'auto' }}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {displayImages.map((image, i) => (
                        <motion.div
                            key={i}
                            layoutId={`image-${i}`}
                            className="group relative w-[280px] h-[380px] md:w-[350px] md:h-[480px] shrink-0 overflow-hidden bg-nude/20 shadow-sm cursor-pointer"
                            onClick={(e) => {
                                // Only open modal if not dragging
                                if (!isDragging) {
                                    setSelectedImage({ ...image, layoutId: `image-${i}` });
                                    setIsPaused(true);
                                }
                            }}
                            onDragStart={(e) => e.preventDefault()} // Prevent image drag
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.4 }}
                        >
                            <motion.img
                                src={image.url}
                                alt={`Project ${i}`}
                                className="w-full h-full object-cover grayscale brightness-110 contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none"
                                draggable="false"
                            />

                            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors duration-500 pointer-events-none" />
                            <div className="absolute inset-3 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out border-t border-dark/5 pointer-events-none">
                                <h3 className="text-lg font-display font-bold text-dark leading-tight">Project {String(i + 1).padStart(2, '0')}</h3>
                                <p className="text-stone text-xs uppercase tracking-widest mt-1">{image.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>

                        <motion.div
                            layoutId={selectedImage.layoutId}
                            className="relative max-w-7xl w-full max-h-full aspect-[16/9] md:aspect-auto overflow-hidden bg-dark shadow-2xl rounded-sm"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.url}
                                alt={selectedImage.title}
                                className="w-full h-full object-contain"
                            />

                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-dark/90 to-transparent text-white">
                                <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">{selectedImage.title}</h2>
                                <p className="text-stone-300 font-architect text-xl">{selectedImage.location}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Style for hiding scrollbar */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default Marquee;