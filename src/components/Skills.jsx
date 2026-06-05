import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { skills } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import BallCanvas from "./canvas/Ball";

const SkillCard = ({ title, skills, index }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.1, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card"
    >
        <div
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[20px] py-4 sm:py-5 px-4 sm:px-6 min-h-[280px] flex flex-col items-center justify-start hover:border-white/20 hover:bg-white/10 shadow-glass transition-all duration-300 group/card"
        >
            <h3 className="text-white text-base sm:text-[20px] font-bold text-center mb-6 sm:mb-8 border-b border-white/10 pb-2 w-full tracking-wider font-stylish">
                {title}
            </h3>

            <p className="text-slate-300 text-xs sm:text-[12px] font-medium mb-6 text-center">
                {skills.length} skills
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 sm:gap-3 group relative w-[100px] sm:w-[120px]"
                    >
                        <BallCanvas icon={skill.icon} />
                        <p className="text-slate-200 text-[11px] sm:text-[12px] font-semibold tracking-wide text-center leading-tight mt-2">
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
            <motion.div variants={textVariant()} className="mb-8 sm:mb-14 text-center">
                <p className={styles.sectionSubText}>My Technical Proficiency</p>
                <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}>Skills.</h2>
            </motion.div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
                {skills.map((category, index) => (
                    <SkillCard
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
