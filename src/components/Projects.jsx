import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            whileHover={{ y: -10, scale: 1.02 }}
            className='bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-5 rounded-2xl w-full sm:w-[360px] shadow-glass transition-all duration-300'
        >
            <div className='relative w-full h-[180px] sm:h-[230px] overflow-hidden rounded-2xl'>
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={image}
                    alt={name}
                    className='w-full h-full object-cover rounded-2xl'
                />
                <div className='absolute inset-0 flex justify-end m-2 sm:m-3 card-img_hover'>
                    <div
                        onClick={() => window.open(source_code_link, "_blank")}
                        className='black-gradient w-9 sm:w-10 h-9 sm:h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-white/20 transition-all'
                    >
                        <img
                            src='https://img.icons8.com/ios-glyphs/30/ffffff/github.png'
                            alt='github'
                            className='w-1/2 h-1/2 object-contain'
                        />
                    </div>
                </div>
            </div>

            <div className='mt-4 sm:mt-5'>
                <h3 className='text-white font-bold text-lg sm:text-[24px] font-stylish'>{name}</h3>
                <p className='mt-1 sm:mt-2 text-secondary text-xs sm:text-[14px] leading-relaxed'>{description}</p>
            </div>

            <div className='mt-3 sm:mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                    <p key={tag.name} className={`text-xs sm:text-[14px] ${tag.color} font-medium`}>
                        #{tag.name}
                    </p>
                ))}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>UI/UX and Product Builds</p>
                <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent`}>Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-2 sm:mt-3 text-secondary text-sm sm:text-[17px] max-w-3xl leading-relaxed sm:leading-[30px]'
                >
                    These projects highlight my UI/UX and engineering approach through
                    practical product builds. Each one demonstrates visual storytelling,
                    modular architecture, responsive behavior, and the logic required to
                    create fast, intuitive experiences.
                </motion.p>
            </div>

            <div className='mt-10 sm:mt-20 flex flex-wrap gap-5 sm:gap-7 justify-center sm:justify-start'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Projects, "projects");
