
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiServer, FiCode, FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ project, direction }) => (
  <motion.div 
    className="group relative bg-navy-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300"
    initial={{ x: direction === 'left' ? -50 : 50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
  >
    <div className="flex flex-col lg:flex-row gap-8 p-8">
      {/* Image Section */}
      <div className="lg:w-1/3 relative overflow-hidden rounded-xl">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
      </div>

      {/* Content Section */}
      <div className="lg:w-2/3 space-y-4">
        <div className="flex items-center gap-4">
          <h3 className="text-2xl font-bold text-emerald-400">{project.title}</h3>
          <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-sm">
            {project.status}
          </span>
        </div>

        <p className="text-gray-300">{project.description}</p>

        {/* Features */}
        {project.features && (
          <div className="space-y-2">
            <h4 className="text-emerald-400 font-semibold">Key Features</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-400">
                  <FiArrowUpRight className="text-emerald-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-navy-700 rounded-full text-sm text-emerald-300">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mt-4">
          {project.links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-400 rounded-lg transition-colors"
              whileHover={{ y: -2 }}
            >
              {link.type === 'github' ? <FiGithub /> : <FiExternalLink />}
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
    const projects = [
        {
          title: "KU-Sport Management System",
          image: "./../../../public/ProjectPhoto/KUSport.png",
          status: "Active Development",
          description: "Comprehensive platform for managing Khulna University's annual sports events across 29 disciplines.",
          features: [
            "Team management for 29 university disciplines",
            "Event scheduling for football, cricket, and volleyball",
            "Real-time results tracking and updates",
            "Admin dashboard with advanced controls",
            "Referee and organizer assignment system"
          ],
          tech: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind CSS"],
          links: [
            { type: "external", label: "Live Demo", url: "https://synergyx2024.cseku.ac.bd/" },
            { type: "github", label: "Client Code", url: "#" }
          ]
        },
        {
          title: "Contest Hub",
          image: "./../../../public/ProjectPhoto/contest1.png",
          status: "Production Ready",
          description: "Full-featured contest management platform with payment integration and role-based access control.",
          features: [
            "Stripe payment integration",
            "Role-based access (User, Creator, Admin)",
            "Contest approval workflow",
            "User participation tracking",
            "Real-time contest updates"
          ],
          tech: ["React", "Node.js", "MongoDB", "Stripe", "Firebase", "TanStack Query"],
          links: [
            { type: "github", label: "Client Code", url: "https://github.com/farid22022/contest-hub-client" },
            { type: "github", label: "Server Code", url: "https://github.com/farid22022/contest-hub-server" },
            { type: "external", label: "Live Demo", url: "https://contest-hub-2af37.web.app" }
          ]
        },
        {
          title: "AI-Powered Image Suite (Crack AI)",
          image: "./../../../public/ProjectPhoto/AI_image.jpg",
          status: "Under Development",
          description: "Advanced image processing platform leveraging AI for generation, editing, and enhancement.",
          features: [
            "Text-to-image generation",
            "Background removal",
            "Image upscaling",
            "Text extraction",
            "AI-powered editing tools"
          ],
          tech: ["React", "ClipDrop API", "Gemini AI", "Firebase", "Axios", "Tailwind"],
          links: [
            { type: "github", label: "Client Code", url: "https://github.com/farid22022/ai-crack" },
            { type: "github", label: "Server Code", url: "https://github.com/farid22022/crack-ai-server" },
            { type: "external", label: "Live Demo", url: "https://ai-crack.web.app" }
          ]
        },
        {
          title: "SynergyX Sponsorship System",
          image: "./../../../public/ProjectPhoto/SynergyX.jpg",
          status: "Production Ready",
          description: "Sponsorship management platform for university events with automated approval workflows.",
          features: [
            "Company sponsorship requests",
            "Email verification system",
            "Dynamic sponsor display",
            "Admin approval dashboard",
            "Secure communication channels"
          ],
          tech: ["MERN Stack", "Nodemailer", "Firebase", "JWT", "Tailwind CSS"],
          links: [
            { type: "github", label: "Client Code", url: "https://github.com/farid22022/synergyx-client" },
            { type: "github", label: "Server Code", url: "https://github.com/farid22022/synergyx-server" },
            { type: "external", label: "Live Demo", url: "https://synergyx-2024.web.app/" }
          ]
        },
        {
          title: "Bistro Buz Food Ordering",
          image: "./../../../public/ProjectPhoto/FoodResturant.jpg",
          status: "Completed",
          description: "Modern restaurant management system with online ordering and payment capabilities.",
          features: [
            "Menu management system",
            "Stripe payment integration",
            "Order tracking system",
            "Admin dashboard",
            "User role management"
          ],
          tech: ["React", "Node.js", "MongoDB", "Stripe", "Recharts", "Firebase"],
          links: [
            { type: "github", label: "Client Code", url: "https://github.com/farid22022/Bistro-Boss-Client" },
            { type: "github", label: "Server Code", url: "https://github.com/farid22022/Bistro-Boss-Server" },
            { type: "external", label: "Live Demo", url: "https://bistro-boss-2e70f.web.app/" }
          ]
        },
        {
          title: "Haven Hue Property Management",
          image: "./../../../public/ProjectPhoto/Havenhue.jpeg",
          status: "Completed",
          description: "Comprehensive property rental platform with booking management and user dashboards.",
          features: [
            "Property listing management",
            "Booking system",
            "User dashboard",
            "Search and filtering",
            "Admin controls"
          ],
          tech: ["React", "Firebase", "Tailwind CSS", "React Query", "MongoDB"],
          links: [
            { type: "github", label: "Client Code", url: "https://github.com/farid22022/Home_management" },
            { type: "external", label: "Live Demo", url: "https://havenhues-3cb1f.web.app/" }
          ]
        },
        {
          title: "Tourism Management System",
          image: "./../../../public/ProjectPhoto/Havenhue.jpeg", // Update with actual image path
          status: "Under Development",
          description: "Platform for managing tourist spots and travel experiences with booking capabilities.",
          features: [
            "Tourist spot management",
            "Booking system",
            "User reviews and ratings",
            "Admin dashboard",
            "Search functionality"
          ],
          tech: ["MERN Stack", "JWT", "Firebase", "Tailwind CSS", "React Query"],
          links: [
            { type: "github", label: "Client Code", url: "https://github.com/farid22022/tourism-management-client" },
            { type: "github", label: "Server Code", url: "https://github.com/farid22022/tourism-management-server" },
            { type: "external", label: "Live Demo", url: "https://tourism-management-syste-e300e.web.app" }
          ]
        }
      ];

  return (
    <section className="min-h-screen p-8 lg:p-16 pt-32 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            <Typewriter
              options={{
                strings: ['Featured Projects'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore a curated selection of my professional work showcasing full-stack development expertise
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              project={project}
              direction={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
