import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxImage = ({ src, alt, className = "", ratio = 1 }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className={`overflow-hidden relative ${className}`}>
            <motion.div style={{ y, height: "120%" }} className="relative w-full -top-[10%]">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </div>
    );
};

export default ParallaxImage;
