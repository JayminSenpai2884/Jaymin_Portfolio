import React from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../constants'
import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'

const projectVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5, ease: 'easeInOut' }
    }
}

const containerVariant = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            staggerChildren: 0.1,
            ease: "easeInOut"
        }
    }
}

const BentoGrid = ({ children, className }) => (
  <motion.div 
    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ${className}`}
    variants={containerVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
)

const BentoGridItem = ({ project, className }) => (
  <motion.div 
    variants={projectVariant}
    className={`group bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-500 ${className}`}
  >
    <div className='p-6 h-full flex flex-col'>
      {/* Project Name with Animation */}
      <motion.div className='mb-6'>
        <motion.h3 className='text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300'>
          {project.name}
        </motion.h3>
        <motion.div className='w-16 h-1 bg-blue-500 mt-3' />
      </motion.div>
      
      {/* Project Description */}
      <p className='text-sm md:text-base text-gray-300 mb-6 flex-grow'>
        {project.description}
      </p>
      
      {/* Technologies */}
      {project.technologies && (
        <div className='flex flex-wrap gap-2 mb-6'>
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className='bg-white/10 text-stone-300 px-3 py-1 rounded-full text-xs'
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      
      {/* Link Button - Simplified for testing */}
      {project.link && (
        <div className="mt-auto">
          <button
            onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
            className='group/link inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium cursor-pointer'
          >
            <span className="text-sm md:text-base">View Project</span>
            <FaExternalLinkAlt size={14} />
          </button>
        </div>
      )}
    </div>
    
    {/* Bottom Accent Line */}
    <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 w-0 group-hover:w-full transition-all duration-700 ease-out" />
  </motion.div>
)

const Projects = () => {
    return (
        <section id='projects' className='py-8 sm:py-12 md:py-20 lg:py-24'>
            <div className='container mx-auto px-4 sm:px-6 md:px-8'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.h2 
                        className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-white'
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                    >
                        My Projects</motion.h2>
                        
                </motion.div>
                <BentoGrid>
                    {PROJECTS.map((project, index) => (
                        <BentoGridItem 
                            key={index} 
                            project={project}
                            className={index === 3 || index === 6 ? "sm:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    )
}

export default Projects
