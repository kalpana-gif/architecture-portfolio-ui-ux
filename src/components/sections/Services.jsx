import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
    {
        id: '01',
        title: 'Architecture',
        description: 'From residential retreats to large-scale commercial complexes, we provide full-service architectural design. We handle everything from initial conceptualization and feasibility studies to construction documentation and site supervision.'
    },
    {
        id: '02',
        title: 'Interior Design',
        description: 'We believe insides and outsides are one. Our interior design services focus on creating cohesive environments, selecting bespoke furniture, finishes, and lighting that complement the architectural shell.'
    },
    {
        id: '03',
        title: 'Master Planning',
        description: 'For larger sites, we offer master planning services to optimize land use, circulation, and sustainability. We envision communities and campuses that thrive in harmony with their surroundings.'
    },
    {
        id: '04',
        title: '3D Visualization',
        description: 'We bring the unseen to life. Our in-house visualization team creates photo-realistic renderings and immersive VR walkthroughs, allowing you to experience the space before a single brick is laid.'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 bg-nude text-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <span className="font-architect text-amber text-xl tracking-wide block mb-4">— What We Do</span>
                        <h2 className="text-4xl md:text-7xl font-display font-bold text-dark">
                            Our <span className="text-amber font-orbitron">Services</span>
                        </h2>
                    </div>
                    <p className="text-stone max-w-md text-lg leading-relaxed">
                        Comprehensive design solutions tailored to the unique needs of each client and site.
                    </p>
                </motion.div>

                <div className="border-t border-dark/10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group border-b border-dark/10 py-12 md:py-16 grid md:grid-cols-12 gap-8 items-start hover:bg-white/50 transition-colors duration-500"
                        >
                            <div className="md:col-span-2">
                                <span className="font-orbitron text-xl md:text-2xl text-stone/50 group-hover:text-amber transition-colors">
                                    {service.id}
                                </span>
                            </div>
                            <div className="md:col-span-4">
                                <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-dark group-hover:text-amber transition-colors">
                                    {service.title}
                                </h3>
                            </div>
                            <div className="md:col-span-5">
                                <p className="text-stone text-lg leading-relaxed font-architect">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
