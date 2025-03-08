
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navOptions = (
    <div className="hidden lg:flex space-x-8 items-center">
      {["Home", "Development Stack", "Projects", "Contact Me", "About Me"].map(
        (item, index) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.div>
        )
      )}
    </div>
  );

  const mobileNavOptions = (
    <div className="flex flex-col space-y-6 p-6">
      {["Home", "Development Stack", "Projects", "Contact Me", "About Me"].map(
        (item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-gray-300 hover:text-emerald-400 text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </motion.div>
        )
      )}
    </div>
  );

  const socialLinks = (
    <div className="flex space-x-6 items-center">
      <motion.a
        href="https://www.linkedin.com/in/md-farid-hossen-rehad-418558268"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-gray-300 hover:text-emerald-400 transition-colors"
      >
        <FiLinkedin size={24} />
      </motion.a>
      <motion.a
        href="https://github.com/farid22022"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-gray-300 hover:text-emerald-400 transition-colors"
      >
        <FiGithub size={24} />
      </motion.a>
    </div>
  );

  return (
    <motion.header
      className="fixed w-full top-0 z-50 backdrop-blur-lg bg-slate-900/80 shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Link
              to="/home"
              className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Farid Rehad
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          {navOptions}

          {/* Social Links */}
          <div className="hidden lg:flex">{socialLinks}</div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-4 border-t border-slate-700"
          >
            {mobileNavOptions}
            <div className="flex justify-center pb-4">{socialLinks}</div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;