
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { FiDownloadCloud } from 'react-icons/fi';
import Technologies from "../../components/Technologies/Technologies";
import ParticlesBackground from "../../components/ParticlesBackground";
import chrome from "./../../../public/Tools/chrome-dev-1.png";
import figma from "./../../../public/Tools/figma-1.png";
import netlify from "./../../../public/Tools/netlify-1.png";
import vscode from "./../../../public/Tools/vscode-1.png";

const AboutMe = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 120, damping: 15 }
        }
    };

    const floatingBlobs = [...Array(4)].map((_, i) => ({
        id: i,
        initialX: Math.random() * 100 - 50,
        initialY: Math.random() * 100 - 50,
        color: i % 2 === 0 ? ["#34d399", "#22d3ee"] : ["#22d3ee", "#34d399"]
    }));

    return (
        <motion.div 
            className="pt-32 min-h-screen bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <ParticlesBackground />
                {floatingBlobs.map((blob) => (
                    <motion.div
                        key={blob.id}
                        className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl"
                        initial={{
                            scale: 0,
                            x: `${blob.initialX}%`,
                            y: `${blob.initialY}%`
                        }}
                        animate={{
                            scale: [1, 1.5, 1],
                            x: [`${blob.initialX}%`, `${blob.initialX + Math.random() * 20 - 10}%`, `${blob.initialX}%`],
                            y: [`${blob.initialY}%`, `${blob.initialY + Math.random() * 20 - 10}%`, `${blob.initialY}%`]
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear"
                        }}
                        style={{
                            background: `linear-gradient(45deg, ${blob.color[0]}, ${blob.color[1]})`
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                {/* Header Section */}
                <motion.div 
                    className="text-center mt-12 space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
                        variants={itemVariants}
                    >
                        ABOUT ME
                    </motion.h1>
                    <motion.div 
                        className="text-xl text-slate-300"
                        variants={itemVariants}
                    >
                        <Typewriter
                            options={{
                                strings: ['Full Stack Developer', 'Tech Enthusiast', 'Continuous Learner'],
                                autoStart: true,
                                loop: true,
                                cursor: "▌",
                                delay: 50,
                                deleteSpeed: 30
                            }}
                        />
                    </motion.div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                    className="grid md:grid-cols-2 gap-12 mt-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Left Column */}
                    <motion.div 
                        className="space-y-6"
                        variants={itemVariants}
                    >
                        <motion.div 
                            className="p-8 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/30 shadow-xl"
                            whileHover={{ y: -5, rotate: 1, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Introduction</h3>
                            <div className="space-y-4 text-slate-300">
                                <p className="leading-relaxed">
                                    <span className="text-emerald-300 animate-pulse">✨ Hello!</span> I'm <span className="font-medium bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Md. Farid Hossen Rehad</span>, a passionate MERN Stack Developer currently pursuing my Bachelor's in Computer Science and Engineering at Khulna University, Bangladesh.
                                </p>
                                <p className="leading-relaxed">
                                    Currently in my <span className="text-cyan-400 border-b-2 border-cyan-400/30 animate-pulse">2<sup>nd</sup> year, 2<sup>nd</sup> term</span>, I specialize in creating modern web applications with cutting-edge technologies. My journey includes completing Programming Hero's Batch-09 under Jhankar Mahbub's mentorship.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="p-8 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/30 shadow-xl"
                            whileHover={{ y: -5, rotate: -1, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Expertise</h3>
                            <div className="space-y-4 text-slate-300">
                                <p className="leading-relaxed">
                                    With expertise in both frontend and backend development, I've successfully delivered <span className="text-cyan-400 border-b-2 border-cyan-400/30">20+ projects</span> utilizing:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    {['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Tailwind CSS'].map((tech, index) => (
                                        <motion.li 
                                            key={tech}
                                            className="flex items-center hover:text-cyan-400 transition-colors"
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.2 + index * 0.1 }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <span className="text-emerald-400 mr-2">▹</span>
                                            {tech}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div 
                        className="space-y-12"
                        variants={itemVariants}
                    >
                        {/* Technologies Section */}
                        <motion.div 
                            className="p-8 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/30 shadow-xl"
                            whileHover={{ y: -5, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-2xl font-semibold text-emerald-400 mb-6">Technical Arsenal</h3>
                            <Technologies />
                        </motion.div>

                        {/* Tools Section */}
                        <motion.div 
                            className="p-8 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/30 shadow-xl"
                            whileHover={{ y: -5, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-2xl font-semibold text-emerald-400 mb-6">Development Tools</h3>
                            <motion.div 
                                className="grid grid-cols-4 gap-6"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.1 }
                                    }
                                }}
                            >
                                {[chrome, figma, netlify, vscode].map((tool, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex justify-center"
                                        variants={{
                                            hidden: { scale: 0, opacity: 0 },
                                            visible: { 
                                                scale: 1, 
                                                opacity: 1,
                                                transition: { type: "spring", stiffness: 200 }
                                            }
                                        }}
                                        whileHover={{ y: -5, scale: 1.1 }}
                                    >
                                        <img 
                                            src={tool} 
                                            alt="Tool" 
                                            className="h-16 w-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* CV Download */}
                <motion.div 
                    className="flex justify-center mt-16"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <motion.a
                        href="../../../public/Resume/Resume_CV_Template (1).pdf"
                        download
                        className="flex items-center gap-3 px-8 py-4 bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-300 rounded-xl transition-all relative"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            boxShadow: [
                                '0 0 0 0 rgba(52, 211, 153, 0.1)',
                                '0 0 0 10px rgba(52, 211, 153, 0)',
                                '0 0 0 0 rgba(52, 211, 153, 0)'
                            ]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2
                        }}
                    >
                        <FiDownloadCloud className="text-xl" />
                        <span className="font-medium">Download Full CV</span>
                    </motion.a>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AboutMe;