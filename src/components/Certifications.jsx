import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { certifications } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { Award, BadgeCheck } from "lucide-react";

const CertificateCard = ({ index, name, issuer, date, description }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="bg-[#fdfbf7] p-5 sm:p-8 rounded-sm shadow-xl relative w-full sm:w-[340px] md:w-[360px] min-h-[260px] sm:min-h-[280px] flex flex-col justify-between border-8 sm:border-[12px] border-double border-[#b8860b] group hover:scale-105 transition-transform duration-300"
    >
        {/* Corner Ornaments */}
        <div className="absolute top-2 left-2 w-6 sm:w-8 h-6 sm:h-8 border-t-4 border-l-4 border-[#b8860b] opacity-50"></div>
        <div className="absolute top-2 right-2 w-6 sm:w-8 h-6 sm:h-8 border-t-4 border-r-4 border-[#b8860b] opacity-50"></div>
        <div className="absolute bottom-2 left-2 w-6 sm:w-8 h-6 sm:h-8 border-b-4 border-l-4 border-[#b8860b] opacity-50"></div>
        <div className="absolute bottom-2 right-2 w-6 sm:w-8 h-6 sm:h-8 border-b-4 border-r-4 border-[#b8860b] opacity-50"></div>

        {/* Background Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-60 pointer-events-none"></div>

        <div className="relative z-10 text-center">
            {/* Header */}
            <div className="flex justify-center mb-3 sm:mb-4">
                <Award className="w-8 sm:w-12 h-8 sm:h-12 text-[#b8860b]" strokeWidth={1.5} />
            </div>

            <h4 className="text-[#b8860b] font-serif uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold mb-2">
                Certificate of Completion
            </h4>

            {/* Course Name */}
            <h3 className="text-slate-800 font-serif text-base sm:text-2xl font-bold leading-tight mb-3 sm:mb-4 italic">
                {name}
            </h3>

            <div className="w-20 sm:w-24 h-[1px] bg-[#b8860b] mx-auto mb-3 sm:mb-4 opacity-50"></div>

            {/* Details */}
            <p className="text-slate-600 text-xs sm:text-sm font-medium mb-1">
                Issued by <span className="font-bold text-slate-800">{issuer}</span>
            </p>
            <p className="text-slate-500 text-[10px] sm:text-xs font-mono">
                {date}
            </p>
        </div>

        {/* Seal */}
        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 opacity-20 group-hover:opacity-40 transition-opacity">
            <BadgeCheck className="w-12 sm:w-16 h-12 sm:h-16 text-[#b8860b]" />
        </div>
    </motion.div>
);

const Certifications = () => {
    return (
        <div className="mt-8 sm:mt-12 bg-black-100 rounded-[20px]">
            <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[260px] sm:min-h-[300px]`}>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>My Credentials</p>
                    <h2 className={styles.sectionHeadText}>Certifications.</h2>
                </motion.div>
            </div>
            <div className={`${styles.paddingX} -mt-12 sm:-mt-20 pb-10 sm:pb-14 flex flex-wrap gap-5 sm:gap-7 justify-center`}>
                {certifications.map((cert, index) => (
                    <CertificateCard
                        key={cert.name}
                        index={index}
                        {...cert}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Certifications, "");
