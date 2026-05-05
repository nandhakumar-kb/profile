import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { skills } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { Cpu } from "lucide-react";

const cardColors = [
    "from-emerald-900/50 to-teal-900/50 border-emerald-500/30",
    "from-violet-900/50 to-purple-900/50 border-violet-500/30",
    "from-rose-900/50 to-red-900/50 border-rose-500/30",
    "from-sky-900/50 to-blue-900/50 border-sky-500/30",
    "from-amber-900/50 to-orange-900/50 border-amber-500/30",
    "from-fuchsia-900/50 to-pink-900/50 border-fuchsia-500/30",
];

const SkillIcon = ({ icon, name }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="w-14 h-14 bg-black/20 rounded-xl flex items-center justify-center p-2 group-hover:bg-white/10 transition-colors ring-1 ring-white/10 group-hover:ring-white/30 group-hover:scale-110 duration-300">
            {!imgError ? (
                <img
                    src={icon}
                    alt={name}
                    className="w-full h-full object-contain filter drop-shadow-md"
                    onError={() => setImgError(true)}
                />
            ) : (
                <Cpu className="text-white/50 w-8 h-8" />
            )}
        </div>
    );
};

const SkillCard = ({ title, skills, index }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.1, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card"
    >
        <div
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className={`bg-gradient-to-br ${cardColors[index % cardColors.length]} rounded-[20px] py-4 sm:py-5 px-4 sm:px-6 min-h-[280px] flex flex-col items-center justify-start border backdrop-blur-sm hover:border-white/40 transition-all duration-300 group/card`}
        >
            <h3 className="text-white text-base sm:text-[20px] font-bold text-center mb-6 sm:mb-8 border-b border-white/10 pb-2 w-full tracking-wider">
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
                        <SkillIcon icon={skill.icon} name={skill.name} />
                        <p className="text-slate-200 text-[11px] sm:text-[12px] font-semibold tracking-wide text-center leading-tight">
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
                <h2 className={styles.sectionHeadText}>Skills.</h2>
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
