import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { skills } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const SkillRow = ({ title, skills, index }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.1, 0.75)}
        className="w-full"
    >
        <div
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-6 sm:py-8 px-6 sm:px-10 flex flex-col md:flex-row items-center md:items-center justify-between hover:border-white/20 hover:bg-white/10 shadow-glass transition-all duration-300 group/card w-full"
        >
            {/* Category Title Area */}
            <div className="w-full md:w-1/3 flex flex-col items-center md:items-start justify-center mb-6 md:mb-0 md:pr-8 md:border-r border-white/10">
                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-wider font-stylish mb-2 text-center md:text-left">
                    {title}
                </h3>
                <p className="text-slate-300 text-xs font-medium uppercase tracking-widest text-center md:text-left">
                    {skills.length} skills
                </p>
            </div>

            {/* Skills Icons Area */}
            <div className="w-full md:w-2/3 flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 md:pl-8">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 group relative w-[70px] sm:w-[80px]"
                    >
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/5 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-3 group-hover:-translate-y-2 group-hover:bg-white/10 transition-all duration-300 shadow-glass ring-1 ring-white/10 group-hover:ring-white/30">
                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <p className="text-slate-200 text-[10px] font-semibold tracking-wide text-center leading-tight mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <div className="flex flex-col w-full">
            <motion.div variants={textVariant()} className="mb-10 sm:mb-16 text-center">
                <p className={styles.sectionSubText}>My Technical Proficiency</p>
                <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}>Skills.</h2>
            </motion.div>

            <div className='flex flex-col gap-6 sm:gap-8 w-full max-w-5xl mx-auto'>
                {skills.map((category, index) => (
                    <SkillRow
                        key={category.title}
                        title={category.title}
                        skills={category.skills}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Skills, "skills");
