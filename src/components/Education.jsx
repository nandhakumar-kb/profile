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
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl w-full sm:w-[450px] md:w-[500px] shadow-glass flex flex-col justify-between transition-all duration-300 group"
        >
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 p-2">
                            <img src={edu.icon} alt={edu.school_name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h3 className="text-white font-stylish text-xl sm:text-2xl font-bold">{edu.title}</h3>
                            <p className="text-secondary text-sm sm:text-base font-medium mt-1">{edu.school_name}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-emerald-400 font-mono text-sm tracking-wider mb-3">{edu.date}</p>
                    <ul className="list-disc ml-5 space-y-2">
                        {edu.points.map((point, i) => (
                            <li key={i} className="text-slate-300 text-sm sm:text-[15px] leading-relaxed tracking-wide">
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
        <div className="flex flex-col w-full items-center">
            <motion.div variants={textVariant()} className="text-center mb-10 sm:mb-16">
                <p className={`${styles.sectionSubText}`}>
                    My Academic Journey
                </p>
                <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent`}>
                    Education.
                </h2>
            </motion.div>

            <div className='flex flex-col md:flex-row justify-center items-stretch gap-8 flex-wrap'>
                {education.map((edu, index) => (
                    <EducationCard key={`education-${index}`} edu={edu} index={index} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Education, "education");
