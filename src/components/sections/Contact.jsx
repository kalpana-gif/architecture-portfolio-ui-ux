import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-32 bg-dark text-nude relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark to-forest/10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="font-architect text-amber text-xl tracking-wide block mb-4">— Get in Touch</span>
                        <h2 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-tight">
                            Let's Start a <br /> <span className="text-stone">Project</span>.
                        </h2>
                        <p className="text-stone text-xl max-w-lg leading-relaxed mb-12 font-light">
                            Have a vision in mind? We'd love to hear about it. Whether it's a new build, a renovation, or just a conversation about design.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm uppercase tracking-widest text-stone mb-2">Email Us</h3>
                                <a href="mailto:hello@archstudio.com" className="text-3xl md:text-4xl font-display font-bold hover:text-amber transition-colors flex items-center gap-4">
                                    hello@archstudio.com <ArrowRight className="text-stone" size={28} />
                                </a>
                            </div>
                            <div>
                                <h3 className="text-sm uppercase tracking-widest text-stone mb-2">Visit Us</h3>
                                <p className="text-2xl font-display text-white/80">
                                    42 Design District, <br /> Colombo 07, Sri Lanka
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 p-10 md:p-14 backdrop-blur-sm border border-white/5"
                    >
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm uppercase tracking-widest text-stone">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-amber transition-colors placeholder:text-white/10"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm uppercase tracking-widest text-stone">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-amber transition-colors placeholder:text-white/10"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm uppercase tracking-widest text-stone">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-amber transition-colors resize-none placeholder:text-white/10"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button type="submit" className="w-full py-5 bg-white text-dark font-bold font-display uppercase tracking-widest hover:bg-amber hover:text-white transition-all duration-300 mt-4">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
