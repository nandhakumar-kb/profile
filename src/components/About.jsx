import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import profileImg from "../assets/profile.jpeg";
import { profileData } from "../constants";

const About = () => {
    return (
        <>
            <motion.div>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={`${styles.sectionHeadText} text-accent-about`}>Overview.</h2>
            </motion.div>

            <div className="mt-10 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 50, rotate: -2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative bg-[#fdfbf7] p-6 sm:p-8 md:p-12 rounded-sm shadow-2xl max-w-5xl w-full transform rotate-1"
                    style={{
                        backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
                    }}
                >
                    {/* Tape Effect */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-6 sm:h-8 bg-[#ffffff80] backdrop-blur-sm rotate-1 shadow-sm border border-white/20"></div>

                    <div className="flex flex-col md:flex-row gap-6 sm:gap-10 items-center">
                        {/* Polaroid Image */}
                        <div className="flex-shrink-0 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                            <div className="bg-white p-3 sm:p-4 pb-12 sm:pb-16 shadow-lg rounded-sm border border-gray-200">
                                        <img
                                            src={profileImg}
                                            alt="profile"
                                            className="w-[200px] h-[280px] sm:w-[260px] sm:h-[360px] object-cover filter sepia-[0.2]"
                                        />
                                <p className="text-center mt-2 sm:mt-4 font-['Dancing_Script'] text-lg sm:text-2xl text-gray-600">Me, 2026</p>
                            </div>
                        </div>

                        {/* Letter Content */}
                        <div className="flex-1 font-['Dancing_Script'] text-gray-800">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#915eff]">Dear Visitor,</h3>
                            
                            <p className="text-base sm:text-lg md:text-2xl leading-relaxed mb-4 sm:mb-6">
                                I am a versatile <span className="font-bold text-[#915eff]">Web Developer and CSE student</span> specializing in creating intuitive, user-centric applications.
                            </p>
                            
                            <p className="text-base sm:text-lg md:text-2xl leading-relaxed mb-6 sm:mb-8">
                                I am highly skilled in modern web technologies including <span className="font-bold text-[#915eff]">React.js, JavaScript, HTML, and CSS</span>, paired with a strong eye for UI/UX design using Figma. I combine engaging front-end development with robust programming logic in <span className="font-bold text-[#915eff]">Java and Python</span>.
                            </p>

                            <p className="text-sm sm:text-base md:text-xl leading-relaxed mb-4 font-semibold text-[#915eff]">
                                {profileData.headline}
                            </p>

                            <p className="text-xs sm:text-sm md:text-lg leading-relaxed mb-2 text-gray-700">
                                {profileData.location} | {profileData.phone}
                            </p>

                            <p className="text-xs sm:text-sm md:text-lg leading-relaxed text-gray-700">
                                {profileData.email}
                            </p>

                            <div className="flex justify-end mt-6 sm:mt-8">
                                <div className="text-right">
                                    <p className="text-lg sm:text-2xl mb-2">Sincerely,</p>
                                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#915eff] transform -rotate-2">Nandha Kumar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
