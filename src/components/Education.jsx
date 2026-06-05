import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { education } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant, fadeIn } from "../utils/motion";

const TimelineItem = ({ edu, index }) => {
    // Alternate left/right based on index
    const isLeft = index % 2 === 0;

    return (
        <div className={`mb-16 flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse' : 'flex-row'} md:flex-row left-timeline`}>
            {/* Left side spacer (on desktop) */}
            <div className="hidden md:block w-5/12"></div>
            
            {/* Center Timeline Line/Dot */}
            <div className="z-20 flex items-center order-1 bg-[#100d25] shadow-xl w-10 sm:w-14 h-10 sm:h-14 rounded-full border-2 border-emerald-500/50 backdrop-blur-md shrink-0 ring-4 ring-emerald-500/20">
                <div className="mx-auto bg-emerald-400 w-2 h-2 sm:w-3 sm:h-3 rounded-full shadow-[0_0_15px_#34d399] animate-pulse"></div>
            </div>

            {/* Content Card */}
            <motion.div
                variants={fadeIn(isLeft ? "left" : "right", "spring", index * 0.3, 0.75)}
                className={`order-1 w-[85%] md:w-5/12 px-6 py-6 sm:py-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-glass hover:-translate-y-2 hover:border-emerald-500/30 transition-all duration-300 relative group`}
            >
                {/* Connector Line (Desktop) */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-emerald-500/30 ${isLeft ? '-right-8' : '-left-8'}`}></div>

                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 p-2 shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <img src={edu.icon} alt={edu.school_name} className="w-full h-full object-contain drop-shadow-md" />
                    </div>
                    <div>
                        <h3 className="font-stylish text-lg sm:text-xl font-bold text-white leading-tight">{edu.title}</h3>
                        <p className="text-emerald-400 font-mono text-[10px] sm:text-xs tracking-widest mt-1 uppercase">{edu.date}</p>
                    </div>
                </div>

                <h4 className="text-slate-300 text-sm sm:text-base font-semibold mb-4 italic">{edu.school_name}</h4>

                <ul className="list-disc ml-5 space-y-2">
                    {edu.points.map((point, i) => (
                        <li key={i} className="text-slate-400 text-xs sm:text-sm tracking-wide leading-relaxed">
                            {point}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

const Education = () => {
    return (
        <div className="flex flex-col w-full relative">
            <motion.div variants={textVariant()} className="text-center mb-16 sm:mb-24 relative z-10">
                <p className={`${styles.sectionSubText}`}>My Academic Journey</p>
                <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent`}>
                    Education.
                </h2>
            </motion.div>

            <div className="relative container mx-auto px-4 sm:px-6 h-full w-full">
                {/* Central glowing line */}
                <div className="absolute left-[30px] sm:left-[45px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 -translate-x-1/2 rounded-full hidden md:block"></div>
                {/* Mobile line */}
                <div className="absolute left-[24px] sm:left-[32px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 md:hidden"></div>

                <div className="flex flex-col w-full">
                    {education.map((edu, index) => (
                        <TimelineItem key={`edu-${index}`} edu={edu} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Education, "education");
