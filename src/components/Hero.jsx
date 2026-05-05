import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import avatar from "../assets/avatar.png";
import { profileData } from "../constants";

const Hero = () => {
    return (
        <section className={`relative w-full min-h-screen mx-auto flex items-center pt-20 sm:pt-0`}>
            <div
                className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-10 w-full`}
            >
                <div className="flex-1">
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className='bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x'>{profileData.fullName}</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        {profileData.headline} <br className='sm:block hidden' />
                        {profileData.location}
                    </p>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end relative">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, rotate: 2, filter: "brightness(1.1)" }}
                        transition={{ duration: 0.5 }}
                        src={avatar}
                        alt={profileData.fullName}
                        className="relative w-[200px] h-[200px] xs:w-[250px] xs:h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px] object-contain drop-shadow-2xl z-10"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
