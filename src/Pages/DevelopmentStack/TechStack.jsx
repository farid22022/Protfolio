
import { motion } from "framer-motion";
import Technologies from "../../components/Technologies/Technologies";
import Typewriter from 'typewriter-effect';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const TechStack = () => {
  return (
    <motion.div
      className="relative pt-32 px-4 md:px-8 lg:px-16 min-h-screen overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes grid-animation {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
      `}</style>

      {/* Animated Green Background */}
      <div className="absolute inset-0 z-0">
        {/* Floating Gradient Blobs */}
        <motion.div
          className="absolute w-[800px] h-[800px] -top-48 -left-48 bg-gradient-to-r from-emerald-400/20 to-teal-300/30 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute w-[700px] h-[700px] -bottom-32 -right-32 bg-gradient-to-br from-jade-300/20 to-lime-200/25 rounded-full blur-3xl"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundSize: "50px 50px",
            backgroundImage: `
              linear-gradient(to right, rgba(52, 211, 153, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(52, 211, 153, 0.05) 1px, transparent 1px)
            `,
            animation: "grid-animation 20s linear infinite"
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/30 rounded-full animate-[float_8s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mb-16">
        <motion.div variants={childVariants}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Tech Stack
          </h1>
        </motion.div>

        <motion.div 
          className="text-xl md:text-2xl text-emerald-100/80 mb-12"
          variants={childVariants}
        >
          <Typewriter
            options={{
              strings: ['Sustainable Technologies', 'Green Development Tools', 'Eco-Conscious Stack'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              cursor: "_"
            }}
          />
        </motion.div>

        <Technologies />
      </div>
    </motion.div>
  );
};

export default TechStack;