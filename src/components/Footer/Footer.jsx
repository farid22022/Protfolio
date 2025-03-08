import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";

const Footer = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const socialVariants = {
        hover: { y: -5, scale: 1.1 },
        tap: { scale: 0.9 }
    };

    return (
        <footer className="bg-gradient-to-b from-navy-900 to-navy-800 py-12 px-4 md:px-8 lg:px-16">
            {/* Animated Divider */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5 }}
                className="h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mb-16"
            />
            
            {/* Navigation Links */}
            <motion.div
                className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {['/home', '/contact-me', '/about-me'].map((path, index) => (
                    <motion.div
                        key={path}
                        variants={itemVariants}
                        className="relative group"
                    >
                        <Link
                            to={path}
                            className="text-slate-300 hover:text-emerald-400 transition-colors text-lg font-medium"
                        >
                            {path === '/home' ? 'Home' : path === '/contact-me' ? 'Contact Me' : 'about-me'}
                            <motion.span
                                className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 group-hover:w-full transition-all duration-300"
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                            />
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
                className="flex justify-center gap-8 mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {[
                    { icon: <FiGithub />, url: "https://github.com/farid22022" },
                    { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/md-farid-hossen-rehad-418558268/" }
                ].map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-emerald-400 transition-colors"
                        variants={itemVariants}
                        whileHover="hover"
                        whileTap="tap"
                        variants={socialVariants}
                    >
                        <span className="text-3xl">{social.icon}</span>
                        <span className="sr-only">{social.icon.type.name}</span>
                    </motion.a>
                ))}
            </motion.div>

            {/* Back to Top */}
            <motion.div
                className="flex justify-center mb-8"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="p-3 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 transition-colors"
                    aria-label="Back to top"
                >
                    <FiArrowUp className="text-2xl text-emerald-400" />
                </button>
            </motion.div>

            {/* Copyright */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-slate-400 text-sm"
            >
                <p>
                    Copyright © 2024 - All rights reserved by 
                    <span className="text-emerald-400 ml-1">Md. Farid Hossen Rehad</span>
                </p>
                <p className="mt-2">Crafted with ❤️ using React & Tailwind</p>
            </motion.div>
        </footer>
    );
};

export default Footer;