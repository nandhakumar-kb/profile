import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profileData } from "../constants";

const Footer = () => {
    return (
        <footer className="w-full flex justify-center items-center py-6 sm:py-10 px-4">
            <div className="flex flex-col items-center gap-3 sm:gap-4 px-6 sm:px-10 py-4 sm:py-6 rounded-3xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20 w-full max-w-lg">
                <div className="flex gap-4 sm:gap-6">
                    <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
                        <Github size={20} className="sm:w-6 sm:h-6" />
                    </a>
                    <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
                        <Linkedin size={20} className="sm:w-6 sm:h-6" />
                    </a>
                    <a href={`mailto:${profileData.email}`} className="text-secondary hover:text-white transition-colors">
                        <Mail size={20} className="sm:w-6 sm:h-6" />
                    </a>
                </div>

                <p className="text-secondary text-xs sm:text-[14px] text-center">
                    &copy; 2026 {profileData.fullName}. All rights reserved.
                </p>
                <p className="text-secondary text-[11px] sm:text-[12px] text-center">
                    Made with ❤️ using React & Tailwind
                </p>
            </div>
        </footer>
    );
};

export default Footer;
