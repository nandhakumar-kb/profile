import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profileData } from "../constants";

const Footer = () => {
    return (
        <footer className="w-full flex justify-center items-center py-10">
            <div className="flex flex-col items-center gap-4 px-10 py-6 rounded-3xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20">
                <div className="flex gap-6">
                    <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
                        <Github size={24} />
                    </a>
                    <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href={`mailto:${profileData.email}`} className="text-secondary hover:text-white transition-colors">
                        <Mail size={24} />
                    </a>
                </div>

                <p className="text-secondary text-[14px] text-center">
                    &copy; 2026 {profileData.fullName}. All rights reserved.
                </p>
                <p className="text-secondary text-[12px] text-center">
                    Made with ❤️ using React & Tailwind
                </p>
            </div>
        </footer>
    );
};

export default Footer;
