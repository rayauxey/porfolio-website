import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Figma } from 'lucide-react';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveLink: string;
    githubLink: string;
    figmaLink?: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectProps> = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: { 
      y: -10,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.6 }
    },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      className="rounded-xl overflow-hidden bg-white dark:bg-dark-100 shadow-md hover:shadow-xl transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          variants={imageVariants}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-2 py-1 text-xs font-semibold bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-4">
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            title="View Live"
          >
            <ExternalLink size={16} />
          </motion.a>
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            title="GitHub Repository"
          >
            <Github size={16} />
          </motion.a>
          {project.figmaLink && (
            <motion.a
              href={project.figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              title="Figma Design"
            >
              <Figma size={16} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;