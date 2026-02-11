import React from 'react';
import { motion } from 'framer-motion';

const TextReveal = ({ children, className = "", delay = 0 }) => {
    // Split text into words/lines logic if needed, but for now simple block reveal
    // For more complex "word by word", we'd split the string.
    // Assuming children is a string for this implementation.

    const text = typeof children === 'string' ? children : '';
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            className={`inline-block overflow-hidden ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
        >
            {words.map((word, index) => (
                <motion.span variants={child} key={index} className="inline-block mr-[0.25em]">
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default TextReveal;
