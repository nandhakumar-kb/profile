import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`xl:mt-12 flex flex-col items-center justify-center gap-10 overflow-hidden`}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="w-full max-w-5xl"
            >
                <p className={`${styles.sectionSubText} text-center`}>Get in touch</p>
                <h3 className={`${styles.sectionHeadText} text-center mb-10`}>Contact.</h3>

                <div
                    className="w-full h-[400px] flex justify-center items-center relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <AnimatePresence mode="wait">
                        {!isHovered ? (
                            <motion.div
                                key="gold-card"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full max-w-[600px] h-[350px] mx-auto bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-500 rounded-2xl shadow-2xl flex flex-col justify-center items-center p-10 border-4 border-yellow-600 cursor-pointer z-20"
                            >
                                <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl" />
                                <div className="absolute bottom-4 left-4 w-32 h-32 bg-yellow-600/20 rounded-full blur-xl" />

                                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-sm text-center">
                                    Srikanteshwaran
                                </h1>
                                <p className="text-black/80 text-xl font-medium tracking-wider uppercase mb-8 text-center">
                                    EEE Student & Innovator
                                </p>
                                <p className="text-black/60 text-sm font-semibold animate-bounce mt-4">
                                    Touch to Connect
                                </p>
                            </motion.div>
                        ) : (
                            <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row gap-6 justify-center items-center z-10">
                                {/* LinkedIn - Neon Blue Glossy */}
                                <motion.a
                                    href="https://www.linkedin.com/in/srikanteshwaran-s"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -50, opacity: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className="w-full md:w-1/3 h-[300px] bg-gradient-to-br from-cyan-400 via-blue-600 to-blue-900 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.6)] border-2 border-cyan-300 flex flex-col justify-center items-center gap-4 cursor-pointer hover:scale-105 transition-transform relative overflow-hidden group"
                                >
                                    {/* Gloss Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none" />

                                    <div className="p-4 bg-black/20 rounded-full backdrop-blur-md border border-white/30 shadow-inner z-10">
                                        <Linkedin size={48} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white drop-shadow-md z-10">LinkedIn</h3>
                                    <p className="text-cyan-100 text-sm font-medium z-10">Connect professionally</p>
                                </motion.a>

                                {/* Mail - Neon Green Glossy */}
                                <motion.a
                                    href="mailto:srikantesh843@gmail.com"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 50, opacity: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    className="w-full md:w-1/3 h-[300px] bg-gradient-to-br from-lime-400 via-green-600 to-green-900 rounded-2xl shadow-[0_0_30px_rgba(34,197,94,0.6)] border-2 border-lime-300 flex flex-col justify-center items-center gap-4 cursor-pointer hover:scale-105 transition-transform relative overflow-hidden group"
                                >
                                    {/* Gloss Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none" />

                                    <div className="p-4 bg-black/20 rounded-full backdrop-blur-md border border-white/30 shadow-inner z-10">
                                        <Mail size={48} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white drop-shadow-md z-10">Email</h3>
                                    <p className="text-lime-100 text-sm font-medium z-10">Send me a message</p>
                                </motion.a>

                                {/* GitHub - Neon Purple Glossy */}
                                <motion.a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 50, opacity: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                    className="w-full md:w-1/3 h-[300px] bg-gradient-to-br from-fuchsia-400 via-purple-600 to-purple-900 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.6)] border-2 border-fuchsia-300 flex flex-col justify-center items-center gap-4 cursor-pointer hover:scale-105 transition-transform relative overflow-hidden group"
                                >
                                    {/* Gloss Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none" />

                                    <div className="p-4 bg-black/20 rounded-full backdrop-blur-md border border-white/30 shadow-inner z-10">
                                        <Github size={48} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white drop-shadow-md z-10">GitHub</h3>
                                    <p className="text-fuchsia-100 text-sm font-medium z-10">Check my code</p>
                                </motion.a>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
