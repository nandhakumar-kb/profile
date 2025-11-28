import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import avatar from "../assets/avatar.png";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto flex items-center`}>
            <div
                className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col-reverse lg:flex-row items-center justify-between gap-10 w-full`}
            >
                <div className="flex-1">
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className='bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x'>Srikanteshwaran</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        Pre Final Year EEE Student <br className='sm:block hidden' />
                        Passionate about Technology & Innovation
                    </p>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end relative">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.5, rotate: 5, filter: "brightness(1.2)" }}
                        transition={{ duration: 0.5 }}
                        src={avatar}
                        alt="Srikanteshwaran"
                        className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-contain drop-shadow-2xl z-10"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
