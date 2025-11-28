import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full flex justify-center items-center py-10">
            <div className="flex flex-col items-center gap-4 px-10 py-6 rounded-3xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20">
                <div className="flex gap-6">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/srikanteshwaran-s-b73373258/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:nandhakumar.eee22@kpriet.ac.in" className="text-secondary hover:text-white transition-colors">
                        <Mail size={24} />
                    </a>
                </div>

                <p className="text-secondary text-[14px] text-center">
                    &copy; 2025 Srikanteshwaran S. All rights reserved.
                </p>
                <p className="text-secondary text-[12px] text-center">
                    Made with ❤️ using React & Tailwind
                </p>
            </div>
        </footer>
    );
};

export default Footer;
