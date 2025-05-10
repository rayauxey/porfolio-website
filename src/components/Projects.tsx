import type React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github } from "lucide-react";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
		},
	};

	const projects = [
		{
			title: "Rahisi - Lending System",
			description:
				"Rahisi is a lending system that allows users to borrow money with ease. I built both the Admin dashboard and User facing application using Next.js and Flutter respectively.",
			image: "https://r2.spcl.one/spay-screenshot%20(1).jpg",
			tags: ["React", "TypeScript", "Next.js", "Flutter", "Redis"],
			liveLink: "https://example.com",
			githubLink: "https://github.com",
			figmaLink: "https://figma.com",
		},
		{
			title: "IdealPay - A Human Resource Management System",
			description:
				"IdealPay is a Human Resource Management System that allows users to manage their employees and payroll. I built both the Admin dashboard using Next.js and the backend using Hono.js.",
			image: "https://r2.spcl.one/image.jpg",
			tags: ["React", "Next.js", "Tailwind", "Hono.js"],
			liveLink: "https://example.com",
			githubLink: "https://github.com",
			figmaLink: "https://figma.com",
		},
		{
			title: "Elyse - A Sales Management System",
			description:
				"Elyse is a Sales Management System that tracks sales and inventory. I built both the Admin dashboard using Next.js and the mobile app using Flutter.",
			image: "https://r2.spcl.one/elyse-screenshot.jpg",
			tags: ["React", "Recharts", "API Integration", "Geolocation", "Flutter"],
			liveLink: "https://example.com",
			githubLink: "https://github.com",
			figmaLink: "https://figma.com",
		},
	];

	return (
		<section id="projects" className="py-20" ref={ref}>
			<div className="container-custom">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				>
					<motion.div variants={itemVariants} className="text-center mb-16">
						<span className="inline-block px-3 py-1 text-sm font-semibold bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 rounded-full mb-4 mr-4">
							Portfolio
						</span>
						<h2 className="section-heading mx-auto">Featured Projects</h2>
						<p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
							Here are some of my recent projects. Each one was carefully
							crafted to meet specific objectives and showcase different skills
							and technologies.
						</p>
					</motion.div>

					<motion.div
						variants={itemVariants}
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
					>
						{projects.map((project, index) => (
							<ProjectCard
								key={project.title}
								project={project}
								index={index}
							/>
						))}
					</motion.div>

					<motion.div variants={itemVariants} className="mt-16 text-center">
						<a
							href="https://github.com/rayauxey"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:underline"
						>
							View more projects on GitHub <Github size={16} />
						</a>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
