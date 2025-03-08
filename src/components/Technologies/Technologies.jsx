
// import { motion } from "framer-motion";
// import techLogos from "./techData";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delayChildren: 0.5,
//       staggerChildren: 0.1
//     }
//   }
// };

// const itemVariants = {
//   hidden: { scale: 0.5, opacity: 0 },
//   visible: {
//     scale: 1,
//     opacity: 1,
//     transition: { type: "spring", stiffness: 300 }
//   },
//   hover: {
//     scale: 1.2,
//     y: -10,
//     transition: { type: "spring", stiffness: 400 }
//   },
//   float: {
//     y: [-8, 8, -8],
//     rotate: [-3, 3, -3],
//     transition: {
//       duration: 4,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   }
// };

// const Technologies = () => {
//   return (
//     <motion.div
//       className="relative z-10 grid grid-cols-3 md:grid-cols-6 gap-8 max-w-6xl mx-auto px-4"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       {techLogos.map((tech, index) => (
//         <motion.div
//           key={index}
//           className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(16,185,129,0.1)] hover:shadow-[0_8px_32px_rgba(16,185,129,0.2)]"
//           variants={itemVariants}
//           whileHover="hover"
//           whileTap={{ scale: 0.95 }}
//           animate={["float", "visible"]}
//           custom={index}
//           transition={{
//             duration: 4 + index * 0.3,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         >
//           <motion.img
//             src={tech.src}
//             alt={tech.name}
//             className="h-16 w-16 md:h-20 md:w-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(76,194,255,0.4)]"
//           />
//           <motion.span
//             className="mt-3 text-sm font-medium text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
//             initial={{ y: 10 }}
//             animate={{ y: 0 }}
//           >
//             {tech.name}
//           </motion.span>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// export default Technologies;
import { motion } from "framer-motion";
import techLogos from "./techData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300 }
  },
  hover: {
    scale: 1.2,
    y: -10,
    transition: { type: "spring", stiffness: 400 }
  },
  float: {
    y: [-8, 8, -8],
    rotate: [-3, 3, -3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Technologies = () => {
  return (
    <div className="relative overflow-hidden py-24">
      <motion.div
        className="relative z-10 grid grid-cols-3 md:grid-cols-6 gap-8 max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {techLogos.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(16,185,129,0.1)] hover:shadow-[0_8px_32px_rgba(16,185,129,0.2)]"
            variants={itemVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            animate={["float", "visible"]}
            custom={index}
            transition={{
              duration: 4 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.img
              src={tech.src}
              alt={tech.name}
              className="h-16 w-16 md:h-20 md:w-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(76,194,255,0.4)]"
            />
            <motion.span
              className="mt-3 text-sm font-medium text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
            >
              {tech.name}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      {/* Added paragraph with animation */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center text-emerald-400 mt-12 px-4 max-w-2xl mx-auto text-lg leading-relaxed"
      >
        I specialize in crafting robust solutions using cutting-edge technologies. 
        My stack evolves continuously as I explore new tools and frameworks to 
        deliver efficient, scalable applications with modern best practices.
      </motion.p>
    </div>
  );
};

export default Technologies;