import React from "react";
import { motion } from "framer-motion";

export default function Typewriter({ text = "DESIGNING", className = "" }) {
    const letters = text.split("");

    return (
        <motion.span
            className={`block font-orbitron ${className}`}
            initial="hidden"
            animate="visible"
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.08
                    }
                }
            }}
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {letter}
                </motion.span>
            ))}

            {/* Cursor */}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
            >
                |
            </motion.span>
        </motion.span>
    );
}
