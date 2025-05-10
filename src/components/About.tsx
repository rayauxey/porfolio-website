import type React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Layers, Zap, Smartphone } from "lucide-react";

const About: React.FC = () => {
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

	const skills = [
		{ name: "React", percentage: 90 },
		{ name: "TypeScript", percentage: 85 },
		{ name: "CSS/Tailwind", percentage: 95 },
		{ name: "Flutter", percentage: 80 },
		{ name: "Next.js", percentage: 90 },
		{ name: "Node.js/Bun", percentage: 95 },
	];

	const services = [
		{
			icon: <Code className="h-6 w-6 text-primary-500" />,
			title: "Web Development",
			description:
				"Creating responsive, performant web applications with modern frameworks.",
		},
		{
			icon: <Smartphone className="h-6 w-6 text-primary-500" />,
			title: "Mobile App Development",
			description:
				"Building cross-platform mobile applications with a focus on user experience.",
		},
		{
			icon: <Layers className="h-6 w-6 text-primary-500" />,
			title: "Full Stack Solutions",
			description:
				"Building end-to-end applications with seamless front and back end integration.",
		},
		{
			icon: <Zap className="h-6 w-6 text-primary-500" />,
			title: "Performance Optimization",
			description:
				"Enhancing application speed and efficiency for better user experience.",
		},
	];

	return (
		<section id="about" className="py-20 bg-gray-50 dark:bg-dark-300" ref={ref}>
			<div className="container-custom">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="max-w-4xl mx-auto"
				>
					<motion.div variants={itemVariants} className="text-center mb-16">
						<span className="inline-block px-3 py-1 text-sm font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full mb-4 mr-4">
							About Me
						</span>
						<h2 className="section-heading mx-auto">My Skills & Expertise</h2>
						<p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
							With over 5 years of experience in web and mobile app development,
							I specialize in creating modern, responsive websites and
							applications with a focus on performance and user experience.
						</p>
					</motion.div>

					<motion.div
						variants={itemVariants}
						className="grid md:grid-cols-2 gap-12 items-start"
					>
						<div>
							<h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
								Technical Skills
							</h3>
							<div className="space-y-5">
								{skills.map((skill) => (
									<div key={skill.name}>
										<div className="flex justify-between mb-1">
											<span className="text-gray-700 dark:text-gray-300 font-medium">
												{skill.name}
											</span>
											<span className="text-gray-500 dark:text-gray-400">
												{skill.percentage}%
											</span>
										</div>
										<div className="w-full bg-gray-200 dark:bg-dark-100 rounded-full h-2">
											<motion.div
												className="bg-primary-500 h-2 rounded-full"
												initial={{ width: 0 }}
												animate={{ width: `${skill.percentage}%` }}
												transition={{
													duration: 1,
													delay: 0.5,
													ease: "easeOut",
												}}
											/>
										</div>
									</div>
								))}
							</div>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
								Services I Offer
							</h3>
							<div className="space-y-6">
								{services.map((service) => (
									<motion.div
										key={service.title}
										className="flex gap-4 p-4 rounded-lg bg-white dark:bg-dark-100 shadow-sm hover:shadow-md transition-shadow"
										whileHover={{ y: -5 }}
									>
										<div className="mt-1">{service.icon}</div>
										<div>
											<h4 className="font-semibold text-gray-800 dark:text-gray-100">
												{service.title}
											</h4>
											<p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
												{service.description}
											</p>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
