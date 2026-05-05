import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { education } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant, fadeIn } from "../utils/motion";

const Book3D = ({ edu, index }) => {
    const isEven = index % 2 === 0;
    const bookColor = isEven ? "bg-[#1e3a8a]" : "bg-[#7f1d1d]"; // Blue for College, Red for School
    const spineColor = isEven ? "bg-[#172554]" : "bg-[#450a0a]";
    const goldText = "text-transparent bg-clip-text bg-gradient-to-b from-[#ffd700] via-[#fbf5b7] to-[#aa771c] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]";

    return (
        <div className="group relative w-[250px] sm:w-[280px] md:w-[300px] h-[350px] sm:h-[380px] md:h-[400px] perspective-1000 mx-auto cursor-pointer">
            <div className="relative w-full h-full duration-500 transform-style-3d group-hover:rotate-y-[-20deg] transition-transform">
                {/* Front Cover */}
                <div className={`absolute inset-0 ${bookColor} rounded-r-lg shadow-2xl p-4 sm:p-6 flex flex-col items-center justify-between border-l-4 border-l-[#00000030] z-20`}>
                    {/* Decorative Border */}
                    <div className="absolute inset-4 border-2 border-[#ffd700] opacity-50 rounded-sm pointer-events-none"></div>
                    <div className="absolute inset-5 border border-[#ffd700] opacity-30 rounded-sm pointer-events-none"></div>

                    {/* Top Detail */}
                    <div className="text-center mt-4 sm:mt-8">
                        <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2 sm:mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#ffd700]/30">
                            <img src={edu.icon} alt={edu.school_name} className="w-8 sm:w-10 h-8 sm:h-10 object-contain" />
                        </div>
                        <h3 className={`${goldText} font-serif text-lg sm:text-2xl font-bold tracking-wider uppercase text-center leading-tight`}>
                            {edu.title.split(" ")[0]}
                        </h3>
                        <p className="text-[#ffd700] text-xs tracking-[0.2em] uppercase mt-1 opacity-80">Certificate of Completion</p>
                    </div>

                    {/* Middle Detail */}
                    <div className="text-center">
                        <h4 className="text-white/90 font-serif text-sm sm:text-lg italic px-4">
                            {edu.school_name}
                        </h4>
                    </div>

                    {/* Bottom Detail */}
                    <div className="text-center mb-4 sm:mb-8 w-full">
                        <div className="h-[1px] w-1/2 bg-[#ffd700] mx-auto mb-3 opacity-50"></div>
                        <p className="text-[#ffd700] font-mono text-xs sm:text-sm">{edu.date}</p>
                        <div className="mt-2 bg-[#00000040] py-1 px-3 rounded-full inline-block">
                            <p className="text-white text-xs font-bold tracking-wide">
                                {edu.points[0]}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Spine */}
                <div className={`absolute top-0 bottom-0 left-0 w-[40px] ${spineColor} transform -translate-x-full rotate-y-90 origin-right rounded-l-sm flex items-center justify-center`}>
                    <span className="text-[#ffd700] font-bold tracking-widest uppercase rotate-90 text-xs opacity-70 whitespace-nowrap">
                        {edu.date} • {edu.title.substring(0, 15)}...
                    </span>
                </div>

                {/* Pages (Thickness) */}
                <div className="absolute top-2 bottom-2 right-0 w-[30px] bg-[#fdfbf7] transform translate-z-[-2px] translate-x-[28px] rotate-y-90 origin-left shadow-inner flex flex-col justify-evenly">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="w-full h-[1px] bg-gray-300"></div>
                    ))}
                </div>

                {/* Back Cover (Simulated) */}
                <div className={`absolute inset-0 ${bookColor} transform translate-z-[-30px] rounded-l-lg shadow-xl`}></div>
            </div>
        </div>
    );
};

const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    My Academic Journey
                </p>
                <h2 className={`${styles.sectionHeadText} text-center text-accent-education`}>
                    Education.
                </h2>
            </motion.div>

            <div className='mt-12 sm:mt-20 flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-16 md:gap-24 flex-wrap'>
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                    >
                        <Book3D edu={edu} index={index} />
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Education, "education");
