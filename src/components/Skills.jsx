import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { skills } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";
import { Cpu } from "lucide-react";

const SkillIcon = ({ icon, name }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white/5 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center gap-2 p-2 group transition-all ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/30 hover:-translate-y-2 duration-300 shadow-glass flex-shrink-0 mx-3 sm:mx-4">
            {!imgError ? (
                <img
                    src={icon}
                    alt={name}
                    className="w-8 sm:w-10 h-8 sm:h-10 object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                    onError={() => setImgError(true)}
                />
            ) : (
                <Cpu className="text-white/50 w-8 h-8 group-hover:text-white/80 transition-colors" />
            )}
            <span className="text-slate-300 text-[10px] sm:text-xs font-medium tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">
                {name}
            </span>
        </div>
    );
};

const Skills = () => {
    const allSkills = skills.flatMap(category => category.skills);
    
    // Split into two rows for dual scrolling
    const midPoint = Math.ceil(allSkills.length / 2);
    const topRow = allSkills.slice(0, midPoint);
    const bottomRow = allSkills.slice(midPoint);

    // Duplicate arrays to create infinite scroll effect
    const topRowDuplicated = [...topRow, ...topRow, ...topRow];
    const bottomRowDuplicated = [...bottomRow, ...bottomRow, ...bottomRow];

    return (
        <div className="flex flex-col w-full overflow-hidden pb-10">
            <motion.div variants={textVariant()} className="mb-10 sm:mb-16 text-center z-10 relative">
                <p className={styles.sectionSubText}>What I bring to the table</p>
                <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}>Skills.</h2>
            </motion.div>

            <div className="relative flex flex-col gap-6 sm:gap-10 w-[200%] sm:w-[150%] -ml-[50%] sm:-ml-[25%] mask-horizontal-fade">
                
                {/* Top Row - Scrolls Left */}
                <div className="flex animate-scrollX hover:[animation-play-state:paused] py-4">
                    {topRowDuplicated.map((skill, index) => (
                        <SkillIcon key={`top-${index}`} icon={skill.icon} name={skill.name} />
                    ))}
                </div>

                {/* Bottom Row - Scrolls Right */}
                <div className="flex animate-scrollXReverse hover:[animation-play-state:paused] py-4 ml-10">
                    {bottomRowDuplicated.map((skill, index) => (
                        <SkillIcon key={`bottom-${index}`} icon={skill.icon} name={skill.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Skills, "skills");
