import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, useScroll, useGLTF } from '@react-three/drei'
import { useRef, Suspense } from 'react'
import photo from "./../../../public/PersonalPhoto/Farid.png"
import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { FiGithub, FiLinkedin, FiMail, FiCode, FiServer, FiBook, FiCpu, FiCloud, FiDatabase } from 'react-icons/fi'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles"

// 3D Model Component
function Scene({ url }) {
  const { scene } = useGLTF(url)
  const scroll = useScroll()
  const modelRef = useRef()

  useFrame(() => {
    const offset = scroll.offset
    // Scroll-based animations
    modelRef.current.scale.set(
      1 + offset * 1.2,
      1 + offset * 1.2,
      1 + offset * 1.2
    )
    modelRef.current.rotation.y = offset * Math.PI * 2
    modelRef.current.position.x = Math.sin(offset * Math.PI) * 3
    modelRef.current.position.y = Math.cos(offset * Math.PI) * 2
  })

  return <primitive ref={modelRef} object={scene} position={[0, -1.5, 0]} />
}

const Home = () => {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // ... keep all your existing project, skill, and particle data ...

  const projects = [
    {
        title: "Contest Hub",
        description: "Platform with integrated payment system for managing online contests",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        link: "#"
    },
    {
        title: "KU-Sports",
        description: "University sports management system with tournament tracking",
        tech: ["Django", "PostgreSQL", "React"],
        link: "#"
    },
    {
        title: "AI Resume Analyzer",
        description: "Smart resume evaluation tool with job recommendations",
        tech: ["Python", "NLP", "Flask", "AWS"],
        link: "#"
    },
    {
        title: "Registration Consultation Bot",
        description: "AI-powered course registration optimizer with OCR",
        tech: ["Python", "OCR", "ChatGPT API", "FastAPI"],
        link: "#"
    },
    {
        title: "Personal Chatbot Assistant",
        description: "AI assistant with face detection and conversational capabilities",
        tech: ["Python", "OpenCV", "TensorFlow", "Flask"],
        link: "#"
    },
    {
        title: "E-Commerce Analytics Dashboard",
        description: "Real-time business intelligence dashboard for online stores",
        tech: ["React", "Node.js", "MongoDB", "Chart.js"],
        link: "#"
    }
];

const skills = [
    { name: "MERN Stack", icon: <FiCode />, level: 95 },
    { name: "Python", icon: <FiServer />, level: 90 },
    { name: "AWS", icon: <FiCloud />, level: 85 },
    { name: "SQL/NoSQL", icon: <FiDatabase />, level: 90 },
    // { name: "Microcontrollers", icon: <FiCpu />, level: 80 }
];

const particlesInit = async (engine) => await loadFull(engine);

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
      {/* 3D Model Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          style={{
            position: 'fixed',
            pointerEvents: 'none',
          }}
          camera={{ position: [0, 0, 8], fov: 45 }}
        >
          <ambientLight intensity={0.75} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <color attach="background" args={['#0f172a']} />
          <ScrollControls pages={4}>
            <Suspense fallback={null}>
              <Scene url="/model.glb" />
            </Suspense>
          </ScrollControls>
        </Canvas>
      </div>

      {/* Particles Overlay */}
      <div className="absolute inset-0 z-10">
        <Particles
          init={particlesInit}
          options={{
            particles: {
              number: { value: 50 },
              color: { value: "#34d399" },
              move: { enable: true, speed: 1.5 },
              opacity: { value: 0.3 }
            }
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-20 py-20">
        
        {/* Keep all your existing sections exactly as they were */}
        {/* Introduction Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-24">
                    <motion.div 
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-sapphire-300 mb-4">
                            Md. Farid Hossen Rehad
                            <motion.span 
                                animate={{ rotate: [0, 25, -25, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="ml-3 inline-block"
                            >
                            👋
                            </motion.span>
                        </h1>
                        
                        <div className="text-xl md:text-2xl text-emerald-400 mb-6">
                            <Typewriter
                                words={[
                                    'MERN Stack Specialist',
                                    'AI/ML Enthusiast',
                                    'Full-Stack Developer',
                                    'Problem Solver'
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                            />
                        </div>

                        <motion.p 
                            className="text-gray-300 text-lg leading-relaxed mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Computer Science undergraduate at Khulna University building intelligent web solutions. 
                            Passionate about merging web technologies with AI to create impactful applications. 
                            Developed multiple production-grade systems handling complex workflows and data processing.
                        </motion.p>

                        <div className="flex gap-6 mb-12">
                            <motion.a 
                                href="/contact-me"
                                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg flex items-center"
                                whileHover={{ y: -3 }}
                            >
                                <FiMail className="mr-2" /> Discuss Projects
                            </motion.a>
                            <div className="flex gap-4 items-center">
                                <motion.a 
                                    href="https://github.com"
                                    className="text-gray-400 hover:text-emerald-400"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <FiGithub size={24} />
                                </motion.a>
                                <motion.a 
                                    href="https://linkedin.com"
                                    className="text-gray-400 hover:text-emerald-400"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <FiLinkedin size={24} />
                                </motion.a>
                            </div>
                        </div>

                        {/* Education Section */}
                        <motion.div 
                            className="bg-navy-700 p-6 rounded-xl mb-8"
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                        >
                            <div className="flex items-center mb-4">
                                <FiBook className="text-emerald-400 mr-3 text-xl" />
                                <h3 className="text-xl font-semibold text-sapphire-200">Education</h3>
                            </div>
                            <p className="text-gray-300">
                                B.Sc. in Computer Science & Engineering<br />
                                Khulna University • 2022-2026<br />
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Profile Section */}
                    <motion.div 
                        className=" flex justify-center items-center relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            duration: 0.8,
                            type: "spring",
                            stiffness: 150,
                            damping: 10
                        }}
                    >
                        <div className="relative w-80 h-80 group">
                            {/* Floating Container */}
                            <motion.div 
                                className="absolute inset-0 rounded-full shadow-2xl"
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, 2.2, -2.2, 0]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {/* Main Image */}
                                <motion.img 
                                    src={photo} 
                                    alt="Md. Farid Hossen Rehad - Professional Developer"
                                    className="rounded-full w-full h-full object-cover border-8 border-navy-700 relative z-10 
                                            group-hover:border-emerald-400/30 transition-all duration-500"
                                    whileHover={{ scale: 1.02 }}
                                />

                                {/* Animated Gradient Border */}
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400/20 to-cyan-400/20 blur-xl"
                                    animate={{
                                        rotate: [0, 360],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{
                                        duration: 12,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />

                                {/* Particle Effect */}
                                <div className="absolute inset-0 rounded-full">
                                    {[...Array(12)].map((_, i) => (
                                        <motion.span
                                            key={i}
                                            className="absolute block w-1 h-1 bg-emerald-400 rounded-full"
                                            style={{
                                                left: `${Math.random() * 80 + 10}%`,
                                                top: `${Math.random() * 80 + 10}%`
                                            }}
                                            animate={{
                                                opacity: [0.4, 0.8, 0.4],
                                                scale: [0.8, 1.2, 0.8]
                                            }}
                                            transition={{
                                                duration: Math.random() * 2 + 1,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Professional Achievement Badge */}
                            <motion.div 
                                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 
                                        px-6 py-3 rounded-full shadow-xl flex items-center space-x-2"
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 0 25px rgba(16, 185, 129, 0.4)"
                                }}
                                transition={{ 
                                    type: "spring",
                                    stiffness: 300
                                }}
                            >
                                <FiCode className="text-white text-xl animate-pulse-slow" />
                                <span className="text-white font-semibold text-sm">
                                    <span className="text-lg font-bold mr-1">10+</span>
                                    Successful Projects
                                </span>
                            </motion.div>

                            {/* Floating Elements */}
                            <div className="absolute -top-8 -right-8">
                                <motion.div
                                    className="w-16 h-16 bg-emerald-400/10 rounded-full blur-lg"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.4, 0.8, 0.4]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

        {/* Technical Expertise Section */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          ref={skillsRef}
        >
          <motion.div 
                    className="grid md:grid-cols-2 gap-8 mb-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    ref={skillsRef}
                >
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-bold text-sapphire-300 mb-4">Technical Arsenal</h2>
                            <h3 className="text-xl text-emerald-400 mb-8 border-l-4 border-emerald-500 pl-4">
                                Core Technologies & Expertise
                            </h3>
                        </motion.div>

                        <div className="space-y-8">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="group relative bg-navy-700 p-6 rounded-2xl hover:bg-navy-600/80 transition-all"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 100,
                                        delay: index * 0.15,
                                        duration: 0.8
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-center gap-6">
                                        {/* Animated Radial Progress */}
                                        <motion.div
                                            className="radial-progress text-emerald-400 relative"
                                            style={{ 
                                                '--value': skillsInView ? skill.level : 0,
                                                '--size': '4.5rem',
                                                '--thickness': '6px'
                                            }}
                                            aria-valuenow={skill.level}
                                            role="progressbar"
                                            initial={{ '--value': 0 }}
                                            animate={{ '--value': skillsInView ? skill.level : 0 }}
                                            transition={{ 
                                                duration: 1.8, 
                                                delay: index * 0.3,
                                                type: "spring",
                                                bounce: 0.4
                                            }}
                                        >
                                            {/* Progress Track Animation */}
                                            <motion.svg
                                                className="absolute inset-0 text-navy-500"
                                                viewBox="0 0 100 100"
                                                initial={{ rotate: -90 }}
                                                animate={{ rotate: 450 }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 4,
                                                    ease: "linear"
                                                }}
                                            >
                                                <path
                                                    d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="6px"
                                                    opacity="0.2"
                                                />
                                            </motion.svg>
                                            
                                            {/* Percentage Text */}
                                            <motion.span
                                                className="font-bold text-lg"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: index * 0.4 }}
                                            >
                                                {skill.level}%
                                            </motion.span>
                                        </motion.div>

                                        {/* Skill Details */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 mb-2">
                                                <motion.span
                                                    className="text-emerald-400 text-2xl"
                                                    whileHover={{ scale: 1.2 }}
                                                >
                                                    {skill.icon}
                                                </motion.span>
                                                <h4 className="text-xl font-semibold text-gray-200">
                                                    {skill.name}
                                                </h4>
                                            </div>
                                            
                                            <motion.div
                                                className="text-gray-400 text-sm"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: index * 0.5 }}
                                            >
                                                <span className="font-medium text-emerald-300">
                                                    {skill.level >= 90 && "Expert Level"}
                                                    {skill.level >= 75 && skill.level < 90 && "Advanced Proficiency"}
                                                    {skill.level < 75 && "Professional Competence"}
                                                </span>
                                                <span className="mx-2">•</span>
                                                <span>
                                                    {skill.level >= 90 && "Production-grade implementation"}
                                                    {skill.level >= 75 && skill.level < 90 && "Advanced project experience"}
                                                    {skill.level < 75 && "Commercial project experience"}
                                                </span>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Hover Border Animation */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl border-2 border-emerald-500/20 pointer-events-none"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    {/* Project Showcase with See More */}
                    <div>
                        <h2 className="text-3xl font-bold text-sapphire-300 mb-8">Featured Projects</h2>
                        <div className="space-y-6">
                            {projects
                                .slice(0, showAllProjects ? projects.length : 4)
                                .map((project, index) => (
                                    <motion.a 
                                        key={project.title}
                                        href={project.link}
                                        className="block bg-navy-700 p-6 rounded-xl hover:bg-navy-600 transition-colors group"
                                        whileHover={{ y: -5 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map(tech => (
                                                <span 
                                                    key={tech}
                                                    className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.a>
                            ))}
                        </div>
                        <button>
                            <a href="/projects" className=" bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg flex items-center ">See More</a>
                        </button>
                        {/* {projects.length > 4 && (
                            <motion.button
                                className="mt-8 text-emerald-400 hover:text-emerald-300 flex items-center gap-2"
                                onClick={() => setShowAllProjects(!showAllProjects)}
                                whileHover={{ scale: 1.05 }}
                            >
                                {showAllProjects ? (
                                    <>
                                        <span>Show Less</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                        <span>Show More Projects</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </>
                                )}
                            </motion.button>
                        )} */}

                    </div>
                </motion.div>
        </motion.div>

        {/* Research Interests Section */}
        <motion.div 
          className="bg-navy-700 p-12 rounded-3xl mb-24 relative overflow-hidden"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
        >
          <motion.div 
                    className="bg-navy-700 p-12 rounded-3xl mb-24 relative overflow-hidden"
                    initial={{ scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                >
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Floating Particles */}
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`
                                }}
                                animate={{
                                    opacity: [0.2, 0.8, 0.2],
                                    scale: [0.8, 1.4, 0.8]
                                }}
                                transition={{
                                    duration: Math.random() * 3 + 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}

                        {/* Animated Gradient Border */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 to-cyan-400/20 blur-2xl opacity-30"
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </div>

                    <h2 className="text-3xl font-bold text-sapphire-300 mb-8 relative z-10">
                        Innovation Focus
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        {[
                            {
                                title: "AI Integration",
                                description: "Developing smart applications with NLP and computer vision",
                                icon: "🤖",
                                color: "from-emerald-400/20 to-cyan-400/20"
                            },
                            {
                                title: "IoT Systems",
                                description: "Building microcontroller-based automation solutions",
                                icon: "🔌",
                                color: "from-cyan-400/20 to-sapphire-400/20"
                            },
                            {
                                title: "Cloud Architecture",
                                description: "Designing scalable cloud-native applications",
                                icon: "☁️",
                                color: "from-sapphire-400/20 to-emerald-400/20"
                            }
                        ].map((item, index) => (
                            <motion.div 
                                key={item.title}
                                className="p-6 bg-navy-800/50 rounded-xl backdrop-blur-sm relative overflow-hidden group"
                                whileHover={{ 
                                    y: -10,
                                    boxShadow: "0 0 25px rgba(16, 185, 129, 0.1)"
                                }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ 
                                    delay: index * 0.2,
                                    type: "spring",
                                    stiffness: 100
                                }}
                            >
                                {/* Card Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                                
                                {/* Animated Icon */}
                                <motion.div 
                                    className="text-4xl mb-4"
                                    animate={{
                                        y: [0, -5, 0],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    {item.icon}
                                </motion.div>

                                <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300">{item.description}</p>

                                {/* Hover Border Effect */}
                                <motion.div
                                    className="absolute inset-0 border-2 border-emerald-400/10 rounded-xl pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Section Glow Effect */}
                    <motion.div
                        className="absolute -inset-8 bg-radial-gradient(from-60% 60%, rgba(52, 211, 153, 0.1), transparent)"
                        animate={{
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity
                        }}
                    />
                </motion.div>
        </motion.div>

        {/* Career Philosophy Section */}
        <motion.div 
          className="text-center max-w-5xl h-auto mx-auto mb-24 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.div 
                    className="text-center max-w-5xl h-auto mx-auto mb-24 relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 -z-10">
                        {/* Floating Particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`
                                }}
                                animate={{
                                    opacity: [0.2, 0.8, 0.2],
                                    scale: [0.5, 1.5, 0.5]
                                }}
                                transition={{
                                    duration: Math.random() * 4 + 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}

                        {/* Rotating Gradient */}
                        <motion.div
                            className="absolute -inset-24 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 blur-3xl opacity-20"
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </div>

                    {/* Animated Icon */}
                    <motion.div
                        className="inline-block"
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <FiCode className="text-emerald-400 text-4xl mb-6 mx-auto" />
                    </motion.div>

                    {/* Text Content */}
                    <motion.h2
                        className="text-3xl font-bold text-sapphire-300 mb-6 relative"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Development Philosophy
                        <motion.span
                            className="absolute bottom-0 left-1/2 w-24 h-1 bg-emerald-400"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1 }}
                        />
                    </motion.h2>

                    <motion.p
                        className="text-gray-300 text-lg leading-relaxed relative z-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        "I believe in creating technology that solves real problems. My approach combines 
                        <span className="relative inline-block mx-1">
                            rigorous engineering
                            <motion.span
                                className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-400"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8 }}
                            />
                        </span> 
                        with 
                        <span className="relative inline-block mx-1">
                            user-centric design
                            <motion.span
                                className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            />
                        </span>, 
                        ensuring solutions are both technically robust and intuitively usable. Currently exploring the intersection of 
                        <span className="text-emerald-300 font-medium"> web technologies </span> 
                        and 
                        <span className="text-cyan-300 font-medium"> machine learning </span> 
                        to build the next generation of intelligent applications."
                    </motion.p>

                    {/* Pulsing Glow Effect */}
                    <motion.div
                        className="absolute -inset-24 bg-radial-gradient(from-60% 50%, rgba(52, 211, 153, 0.1), transparent)"
                        animate={{
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity
                        }}
                    />
                </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home