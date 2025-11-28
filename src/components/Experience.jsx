import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { X, Trophy, Target, Zap, Shield, Map } from "lucide-react";

const ExperienceCard = ({ experience, index, onClick }) => {
    const handleClick = () => {
        console.log("Card clicked, index:", index);
        onClick(index);
    };

    return (
        <motion.div
            onClick={handleClick}
            className="relative w-full h-[400px] bg-slate-200 rounded-xl overflow-hidden cursor-pointer group shadow-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] border-2 border-slate-300 hover:border-blue-500"
            whileHover={{ y: -10, scale: 1.02 }}
        >
            {/* Character Portrait Area */}
            <div className="h-[65%] w-full bg-slate-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-full h-full object-contain p-8 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                />

                {/* Faction Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                    {experience.company_name}
                </div>
            </div>

            {/* Stats / Info Area */}
            <div className="h-[35%] w-full bg-white p-4 flex flex-col justify-between relative pointer-events-none">
                <div className="absolute -top-10 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div>

                <div>
                    <h3 className="text-slate-800 font-black text-xl uppercase leading-none tracking-tighter mb-1">
                        {experience.title.split(" ")[0]}
                    </h3>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                        {experience.title.split(" ").slice(1).join(" ")}
                    </p>
                </div>

                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2">
                    <div className="h-full bg-blue-500 w-[70%]"></div>
                </div>

                <div className="flex justify-between items-end mt-2">
                    <span className="text-slate-400 text-[10px] font-mono">LVL {index + 1}</span>
                    <span className="text-blue-600 font-bold text-sm border border-blue-600 px-3 py-1 rounded pointer-events-none select-none">
                        SELECT
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

const ExpandedCard = ({ experience, index, onClose }) => {
    return createPortal(
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="w-full max-w-5xl h-[80vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row border border-slate-700"
                onClick={(e) => e.stopPropagation()}
                layout
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50 text-white"
                >
                    <X size={24} />
                </button>

                {/* Left Panel: Character Profile */}
                <div className="w-full md:w-[40%] bg-slate-800 relative flex flex-col items-center justify-center p-8 border-r border-slate-700">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-5"></div>

                    {/* Avatar Circle */}
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-[0_0_50px_rgba(59,130,246,0.5)] mb-8 relative group">
                        <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center overflow-hidden relative">
                            <img src={experience.icon} alt={experience.company_name} className="w-32 h-32 object-contain z-10" />
                            <div className="absolute inset-0 bg-blue-500/20 animate-pulse"></div>
                        </div>
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black font-black text-xs px-3 py-1 rounded uppercase tracking-wider shadow-lg">
                            Level {index + 1}
                        </div>
                    </div>

                    <h2 className="text-3xl font-black text-white text-center leading-tight mb-2">
                        {experience.title}
                    </h2>
                    <p className="text-blue-400 font-bold text-lg mb-6">{experience.company_name}</p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                        <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600">
                            <p className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">Era</p>
                            <p className="text-white text-xs font-mono font-bold">{experience.date}</p>
                        </div>
                        <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600">
                            <p className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">Class</p>
                            <p className="text-white text-xs font-mono font-bold">Engineer</p>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Mission Log */}
                <div className="w-full md:w-[60%] bg-slate-900 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                    <div className="mb-10">
                        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                            <Target className="text-red-500" /> Mission Log
                        </h3>
                        <div className="space-y-4">
                            {experience.points.map((point, i) => (
                                <div key={i} className="flex gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors group">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 group-hover:shadow-[0_0_10px_#3b82f6] transition-shadow" />
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                            <Trophy className="text-yellow-500" /> Skill Tree
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {["React", "Node.js", "AWS", "Smart Systems", "Leadership", "Strategy"].map((tag, i) => (
                                <span key={i} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-bold text-xs flex items-center gap-2 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors cursor-default">
                                    <Zap size={12} className="text-yellow-500" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>,
        document.body
    );
};

const Experience = () => {
    const [selectedId, setSelectedId] = useState(null);

    const handleCardClick = (index) => {
        console.log("handleCardClick called with index:", index);
        setSelectedId(index);
    };

    const handleClose = () => {
        console.log("Closing modal");
        setSelectedId(null);
    };

    console.log("Current selectedId:", selectedId);

    return (
        <>
            <motion.div>
                <p className={`${styles.sectionSubText} text-center`}>
                    Select Your Character
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto'>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={index}
                        experience={experience}
                        index={index}
                        onClick={handleCardClick}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedId !== null && (
                    <ExpandedCard
                        experience={experiences[selectedId]}
                        index={selectedId}
                        onClose={handleClose}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default SectionWrapper(Experience, "work");
