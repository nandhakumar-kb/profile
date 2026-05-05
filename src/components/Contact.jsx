import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { Mail, Linkedin, Github } from "lucide-react";
import { profileData } from "../constants";

const Contact = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    React.useEffect(() => {
        setIsTouchDevice(() => (
            (typeof window !== "undefined") &&
            (("ontouchstart" in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0))
        ));
    }, []);

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
                <h3 className={`${styles.sectionHeadText} text-center mb-8 sm:mb-10 text-accent-contact`}>Contact.</h3>

                <div
                    className="w-full min-h-[350px] sm:h-[400px] flex justify-center items-center relative px-4 sm:px-0"
                    onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
                    onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
                >
                    <AnimatePresence mode="wait">
                        {!isHovered && !isTouchDevice ? (
                            <motion.div
                                key="gold-card"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full max-w-[400px] sm:max-w-[600px] h-[280px] sm:h-[350px] mx-auto bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-500 rounded-2xl shadow-2xl flex flex-col justify-center items-center p-6 sm:p-10 border-4 border-yellow-600 cursor-pointer z-20"
                            >
                                <div className="absolute top-4 right-4 w-16 sm:w-20 h-16 sm:h-20 bg-white/20 rounded-full blur-xl" />
                                <div className="absolute bottom-4 left-4 w-24 sm:w-32 h-24 sm:h-32 bg-yellow-600/20 rounded-full blur-xl" />

                                <h1 className="text-2xl sm:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-sm text-center">
                                    {profileData.fullName.toUpperCase()}
                                </h1>
                                <p className="text-black/80 text-sm sm:text-xl font-medium tracking-wider uppercase mb-4 sm:mb-8 text-center">
                                    {profileData.headline}
                                </p>
                                <p className="text-black/60 text-xs sm:text-sm font-semibold animate-bounce mt-2 sm:mt-4">
                                    Touch to Connect
                                </p>
                            </motion.div>
                        ) : (
                            <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-6 justify-center items-stretch md:items-center z-10 px-2 sm:px-4 overflow-y-auto md:overflow-visible py-2 md:py-0">
                                {/* LinkedIn - Refined Blue */}
                                <motion.a
                                    href={profileData.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -50, opacity: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className="w-full md:w-1/3 h-[180px] sm:h-[220px] md:h-[300px] bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 rounded-xl sm:rounded-2xl shadow-lg border-2 border-blue-500/30 flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer active:scale-95 hover:scale-105 transition-transform relative overflow-hidden group pointer-events-auto z-20"
                                >
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                    <div className="p-2 sm:p-3 md:p-4 bg-blue-500/20 rounded-full backdrop-blur-md border border-blue-400/50 shadow-inner z-10 flex items-center justify-center min-h-[48px] min-w-[48px]">
                                        <Linkedin size={24} className="sm:w-8 sm:h-8 md:w-12 md:h-12 text-blue-300" />
                                    </div>
                                    <h3 className="text-base sm:text-lg md:text-2xl font-bold text-blue-100 z-10">LinkedIn</h3>
                                    <p className="text-blue-200 text-xs sm:text-xs md:text-sm font-medium z-10">Connect</p>
                                </motion.a>

                                {/* Mail - Refined Emerald */}
                                <motion.a
                                    href={`mailto:${profileData.email}`}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 50, opacity: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    className="w-full md:w-1/3 h-[180px] sm:h-[220px] md:h-[300px] bg-gradient-to-br from-emerald-900 via-teal-800 to-slate-900 rounded-xl sm:rounded-2xl shadow-lg border-2 border-emerald-500/30 flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer active:scale-95 hover:scale-105 transition-transform relative overflow-hidden group pointer-events-auto z-20"
                                >
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                    <div className="p-2 sm:p-3 md:p-4 bg-emerald-500/20 rounded-full backdrop-blur-md border border-emerald-400/50 shadow-inner z-10 flex items-center justify-center min-h-[48px] min-w-[48px]">
                                        <Mail size={24} className="sm:w-8 sm:h-8 md:w-12 md:h-12 text-emerald-300" />
                                    </div>
                                    <h3 className="text-base sm:text-lg md:text-2xl font-bold text-emerald-100 z-10">Email</h3>
                                    <p className="text-emerald-200 text-xs sm:text-xs md:text-sm font-medium z-10 line-clamp-1">Message me</p>
                                </motion.a>

                                {/* GitHub - Refined Purple */}
                                <motion.a
                                    href={profileData.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 50, opacity: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                    className="w-full md:w-1/3 h-[180px] sm:h-[220px] md:h-[300px] bg-gradient-to-br from-purple-900 via-violet-800 to-slate-900 rounded-xl sm:rounded-2xl shadow-lg border-2 border-purple-500/30 flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer active:scale-95 hover:scale-105 transition-transform relative overflow-hidden group pointer-events-auto z-20"
                                >
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                    <div className="p-2 sm:p-3 md:p-4 bg-purple-500/20 rounded-full backdrop-blur-md border border-purple-400/50 shadow-inner z-10 flex items-center justify-center min-h-[48px] min-w-[48px]">
                                        <Github size={24} className="sm:w-8 sm:h-8 md:w-12 md:h-12 text-purple-300" />
                                    </div>
                                    <h3 className="text-base sm:text-lg md:text-2xl font-bold text-purple-100 z-10">GitHub</h3>
                                    <p className="text-purple-200 text-xs sm:text-xs md:text-sm font-medium z-10">View code</p>
                                </motion.a>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
                <p className="text-secondary text-center text-xs sm:text-[15px] mt-2 px-4">{profileData.location} | {profileData.phone}</p>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
