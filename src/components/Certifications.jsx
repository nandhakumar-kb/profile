import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { certifications } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({ cert, index }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
        className="relative w-full md:w-[350px] lg:w-[380px] h-[250px] group cursor-pointer perspective-1000"
    >
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-glass transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transform-style-3d group-hover:rotate-y-180">
            
            {/* Front Side (Image) */}
            <div className="absolute inset-0 backface-hidden">
                <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white font-stylish text-xl font-bold leading-tight">{cert.name}</h3>
                    <p className="text-blue-400 text-sm font-medium mt-1">{cert.issuer}</p>
                </div>
            </div>

            {/* Back Side (Details) */}
            <div className="absolute inset-0 bg-[#100d25]/95 backdrop-blur-xl border border-blue-500/20 backface-hidden rotate-y-180 flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-white font-stylish text-xl font-bold mb-2">{cert.name}</h3>
                <p className="text-blue-400 font-mono text-xs tracking-wider mb-4 uppercase">{cert.date}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{cert.description}</p>
            </div>
            
        </div>
    </motion.div>
);

const Certifications = () => {
    return (
        <div className="flex flex-col w-full">
            <motion.div variants={textVariant()} className="text-center mb-10 sm:mb-16">
                <p className={styles.sectionSubText}>My Credentials</p>
                <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent`}>
                    Certifications.
                </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
                {certifications.map((cert, index) => (
                    <CertificationCard key={`cert-${index}`} cert={cert} index={index} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Certifications, "certifications");
