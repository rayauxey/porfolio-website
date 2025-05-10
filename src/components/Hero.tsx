import type React from "react";
import { motion } from "framer-motion";
import { Github as GitHub, Linkedin, Mail, ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
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
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
		},
	};

	const backgroundCircleVariants = {
		hidden: { scale: 0, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 1.2,
				ease: [0, 0.55, 0.45, 1],
			},
		},
	};

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
		>
			{/* Background Decoration */}
			<motion.div
				className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-100 dark:bg-primary-900/20 blur-3xl"
				variants={backgroundCircleVariants}
				initial="hidden"
				animate="visible"
			/>
			<motion.div
				className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent-100 dark:bg-accent-900/20 blur-3xl"
				variants={backgroundCircleVariants}
				initial="hidden"
				animate="visible"
			/>

			<div className="container-custom relative z-10">
				<motion.div
					className="grid md:grid-cols-2 gap-12 items-center"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<div className="order-2 md:order-1">
						<motion.span
							className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4"
							variants={itemVariants}
						>
							Full Stack Developer
						</motion.span>

						<motion.h1
							className="mb-4 font-extrabold text-gray-900 dark:text-white"
							variants={itemVariants}
						>
							Creating <span className="text-primary-500">beautiful</span>{" "}
							digital experiences
						</motion.h1>

						<motion.p
							className="mb-8 text-lg text-gray-600 dark:text-gray-300"
							variants={itemVariants}
						>
							I design and develop modern websites and applications with a focus
							on clean, efficient code and stunning user interfaces.
						</motion.p>

						<motion.div
							className="flex flex-wrap gap-4 mb-8"
							variants={itemVariants}
						>
							<a
								href="#projects"
								className="btn-primary flex items-center gap-2"
							>
								View Projects <ArrowRight size={16} />
							</a>
							<a href="#contact" className="btn-outline">
								Contact Me
							</a>
						</motion.div>

						<motion.div className="flex gap-4" variants={itemVariants}>
							<motion.a
								href="https://github.com/rayauxey"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-full bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
								whileHover={{ y: -5 }}
								whileTap={{ scale: 0.9 }}
							>
								<GitHub size={20} />
							</motion.a>
							<motion.a
								href="https://linkedin.com/rayauxey"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-full bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
								whileHover={{ y: -5 }}
								whileTap={{ scale: 0.9 }}
							>
								<Linkedin size={20} />
							</motion.a>
							<motion.a
								href="mailto:rayauxey@gmail.com"
								className="p-2 rounded-full bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
								whileHover={{ y: -5 }}
								whileTap={{ scale: 0.9 }}
							>
								<Mail size={20} />
							</motion.a>
						</motion.div>
					</div>

					<motion.div
						className="order-1 md:order-2 flex justify-center"
						variants={itemVariants}
					>
						<div className="flex flex-col gap-4 items-center">
							<div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-dark-100 shadow-lg">
								<img
									src="https://r2.spcl.one/rayauxey_portrait.jpg"
									alt="Developer Portrait"
									className="w-full h-full object-cover"
								/>
							</div>
							<span className="text-3xl font-bold">Raymond Nyaga</span>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
