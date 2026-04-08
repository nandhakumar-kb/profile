import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, User, FileText, Code, Mail, Download } from "lucide-react";
import { profileData } from "../constants";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            const sections = ["about", "education", "skills", "projects", "contact"];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActive(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { id: "about", title: "About", icon: User, color: "text-blue-500", bg: "bg-blue-500" },
        { id: "education", title: "Education", icon: FileText, color: "text-green-500", bg: "bg-green-500" },
        { id: "skills", title: "Skills", icon: Code, color: "text-yellow-500", bg: "bg-yellow-500" },
        { id: "projects", title: "Projects", icon: Code, color: "text-pink-500", bg: "bg-pink-500" },
        { id: "contact", title: "Contact", icon: Mail, color: "text-red-500", bg: "bg-red-500" },
    ];

    return (
        <div className="fixed top-5 left-0 right-0 z-50 flex justify-center items-center pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className={`pointer-events-auto flex items-center gap-4 px-6 py-4 rounded-full bg-black/30 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20`}
            >
                <Link
                    to="/"
                    className="p-4 rounded-full hover:bg-white/10 transition-colors"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <Home size={28} className="text-white" />
                </Link>

                <div className="w-[1px] h-10 bg-white/10 mx-2" />

                <ul className="flex items-center gap-2">
                    {navLinks.map((nav) => {
                        const Icon = nav.icon;
                        const isActive = active === nav.id;

                        return (
                            <li key={nav.id} className="relative">
                                <a
                                    href={`#${nav.id}`}
                                    onClick={() => setActive(nav.id)}
                                    className={`relative flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 group ${isActive ? "bg-white/10" : "hover:bg-white/5"}`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className={`absolute inset-0 rounded-full opacity-20 ${nav.bg}`}
                                            transition={{ type: "spring", duration: 0.6 }}
                                        />
                                    )}

                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative z-10 flex items-center gap-3"
                                    >
                                        <Icon
                                            size={24}
                                            className={`${isActive ? nav.color : "text-secondary group-hover:text-white"} transition-colors`}
                                        />
                                        <span className={`text-lg font-medium ${isActive ? "text-white" : "text-secondary group-hover:text-white"} transition-colors`}>
                                            {nav.title}
                                        </span>
                                    </motion.div>
                                </a>
                            </li>
                        );
                    })}

                    {/* Resume Button */}
                    <li className="relative ml-4">
                        <a
                            href={profileData.resumeFile}
                            download={profileData.resumeDownloadName}
                            className="relative flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 group"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative z-10 flex items-center gap-2"
                            >
                                <Download size={20} className="text-white" />
                                <span className="text-lg font-bold text-white">Resume</span>
                            </motion.div>
                        </a>
                    </li>
                </ul>
            </motion.nav>
        </div>
    );
};

export default Navbar;
