import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { education } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant, fadeIn } from "../utils/motion";

const EducationCard = ({ edu, index }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.3, 0.75)}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl shadow-glass flex flex-col justify-between transition-all duration-300 group h-full w-full"
        >
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 p-2 shrink-0">
                        <img src={edu.icon} alt={edu.school_name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                        <h3 className="text-white font-stylish text-lg sm:text-xl font-bold leading-tight">{edu.title}</h3>
                        <p className="text-secondary text-sm font-medium mt-1">{edu.school_name}</p>
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-emerald-400 font-mono text-xs sm:text-sm tracking-wider mb-3">{edu.date}</p>
                    <ul className="list-disc ml-5 space-y-2">
                        {edu.points.map((point, i) => (
                            <li key={i} className="text-slate-300 text-xs sm:text-sm leading-relaxed tracking-wide">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

const Education = () => {
    return (
        <div className="flex flex-col w-full relative">
            <motion.div variants={textVariant()} className="text-center mb-10 sm:mb-16 relative z-10">
                <p className={`${styles.sectionSubText}`}>My Academic Journey</p>
                <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent`}>
                    Education.
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 w-full max-w-5xl mx-auto items-stretch">
                {education.map((edu, index) => (
                    <EducationCard key={`education-${index}`} edu={edu} index={index} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Education, "education");
