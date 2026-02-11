import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Layers, Sun, Scale } from 'lucide-react';

const philosophies = [
    {
        icon: <PenTool size={32} />,
        title: 'Concept & Sketching',
        description: 'Every project begins with a hand-drawn sketch, capturing the essence of the idea before it touches the digital realm.'
    },
    {
        icon: <Layers size={32} />,
        title: 'Materiality',
        description: 'We believe in the honesty of materials—using raw concrete, natural wood, and stone to tell a story of place.'
    },
    {
        icon: <Sun size={32} />,
        title: 'Light & Shadow',
        description: 'Designing not just walls, but the way light interacts with space to create atmosphere and emotion.'
    },
    {
        icon: <Scale size={32} />,
        title: 'Sustainability',
        description: 'Architecture that respects the planet. Passive cooling, local materials, and energy-efficient design are core to our practice.'
    }
];

const Capabilities = () => {
    return (
        <section id="philosophy" className="py-24 bg-dark text-nude relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-forest/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                        Design <span className="text-amber">Philosophy</span>
                    </h2>
                    <p className="text-stone max-w-xl text-lg font-light leading-relaxed">
                        Architecture is more than building; it's about crafting experiences that resonate with the human spirit and the natural world.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {philosophies.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 border border-white/5 rounded-none bg-white/5 hover:bg-white/10 transition-colors group"
                        >
                            <div className="mb-6 text-amber group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold font-display mb-4 text-nude">{item.title}</h3>
                            <p className="text-stone text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 border-t border-white/10 pt-10">
                    <h3 className="text-sm uppercase tracking-widest text-stone mb-8">Selected Clients & Partners</h3>
                    <div className="flex flex-wrap gap-x-12 gap-y-6 text-stone/70 font-display text-lg">
                        {['Moma NY', 'Aesop', 'Vitra', 'Herman Miller', 'City of Copenhagen', 'Tate Modern'].map((client) => (
                            <span key={client} className="hover:text-amber transition-colors cursor-default">
                                {client}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
