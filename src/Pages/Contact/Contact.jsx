
import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";
import Typewriter from "typewriter-effect";
import { FiMail, FiUser, FiMessageSquare, FiSend, FiCheckCircle, FiPhone } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const controls = useAnimation();

  // Enhanced background animation
  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: { duration: 20, repeat: Infinity, ease: "linear" }
    });
  }, [controls]);

  // Animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 120,
        damping: 15,
        mass: 0.5
      }
    },
    hover: {
      y: -8,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await axios.post('YOUR_API_ENDPOINT', formData);
      if(res.data.insertedId) {
        await Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'I will respond within 24 hours',
          showConfirmButton: false,
          timer: 2000,
          background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          color: '#fff',
          customClass: {
            popup: 'rounded-2xl border border-emerald-300/20'
          }
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Submission Error',
        text: 'Please try again or contact directly via email',
        background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
        color: '#fff',
        customClass: {
          popup: 'rounded-2xl border border-emerald-300/20'
        }
      });
    }
    setIsSubmitting(false);
  };

  // Reusable animated input component
  const AnimatedInput = ({ field, Icon, isTextarea = false }) => (
    <motion.div
      variants={cardVariants}
      className="relative mb-6"
    >
      <label className="block text-emerald-100/90 mb-3 font-medium">
        {field.charAt(0).toUpperCase() + field.slice(1)}
      </label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400" />
        {isTextarea ? (
          <textarea
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-3 bg-emerald-900/20 rounded-xl border border-emerald-400/20 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all placeholder-emerald-400/60 resize-none"
            placeholder={`Enter your ${field}...`}
            rows="4"
            required
          />
        ) : (
          <input
            type={field === 'email' ? 'email' : 'text'}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-3 bg-emerald-900/20 rounded-xl border border-emerald-400/20 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all placeholder-emerald-400/60"
            placeholder={`Enter your ${field}...`}
            required
          />
        )}
      </div>
    </motion.div>
  );

  return (
    <motion.div 
      className="pt-32 px-4 md:px-8 lg:px-16 min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={controls}
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(5, 150, 105, 0.1) 0%,
              rgba(16, 185, 129, 0.15) 50%,
              rgba(5, 150, 105, 0.1) 100%
            ),
            linear-gradient(
              45deg,
              rgba(5, 150, 105, 0.05) 0%,
              rgba(16, 185, 129, 0.1) 50%,
              rgba(5, 150, 105, 0.05) 100%
            )`,
          backgroundSize: "400% 400%, 200% 200%",
          backgroundBlendMode: "overlay"
        }}
      />

      {/* Floating Particles */}
      <AnimatePresence>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </AnimatePresence>

      <div className="text-center mb-16 relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          Contact Me
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-emerald-100/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Typewriter
            options={{
              strings: [
                "Let's create something extraordinary",
                "Innovative solutions start with conversation",
                "Collaboration breeds excellence"
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
              cursor: "▌"
            }}
          />
        </motion.div>
      </div>

      <motion.div
        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Contact Info Section */}
        <motion.div
          className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 backdrop-blur-2xl border border-emerald-400/20 shadow-2xl"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-emerald-300">
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                Contact Details
              </span>
            </h3>
            
            <motion.div 
              className="flex items-center space-x-4 text-emerald-100/90 p-4 rounded-xl hover:bg-emerald-900/20 transition-all"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FiUser className="h-6 w-6 text-emerald-400 flex-shrink-0" />
              <span className="font-medium">Md Farid Hossen Rehad</span>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4 text-emerald-100/90 p-4 rounded-xl hover:bg-emerald-900/20 transition-all"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FiMail className="h-6 w-6 text-emerald-400 flex-shrink-0" />
              <span className="font-medium">faridhossenrehad@gmail.com</span>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4 text-emerald-100/90 p-4 rounded-xl"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FiPhone className="h-6 w-6 text-emerald-400 flex-shrink-0" />
              <span className="font-medium">+880 1324-623709</span>
            </motion.div>

            <motion.div 
              className="mt-8 p-6 bg-emerald-900/30 rounded-2xl border border-emerald-400/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              <p className="text-emerald-100/85 leading-relaxed font-light">
                "Technology is best when it brings people together. Let's connect 
                and explore how we can leverage cutting-edge solutions to create 
                meaningful impact through innovative digital experiences."
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 backdrop-blur-2xl border border-emerald-400/20 shadow-2xl"
          variants={cardVariants}
          whileHover="hover"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatedInput field="name" Icon={FiUser} />
            <AnimatedInput field="email" Icon={FiMail} />
            <AnimatedInput field="message" Icon={FiMessageSquare} isTextarea />

            <motion.div
              variants={cardVariants}
              className="mt-8"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className="w-full py-4 px-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl font-semibold text-white flex items-center justify-center space-x-3 hover:shadow-[0_8px_32px_rgba(16,185,129,0.3)] transition-all relative overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 180 }}
                      className="absolute inset-0 flex items-center justify-center bg-emerald-600/50 backdrop-blur-sm"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="h-6 w-6 border-2 border-white/50 border-t-transparent rounded-full"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center space-x-3"
                    >
                      <FiSend className="h-5 w-5" />
                      <span>Send Message</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
                  
      {/* Animated Border Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="absolute inset-0 border-2 border-emerald-400/10 rounded-3xl m-4" />
      </motion.div>
      
    </motion.div>
  );
};

export default Contact;