import type React from "react";
import { motion } from "framer-motion";
import {
	Code,
	Github,
	Heart,
	Instagram,
	Linkedin,
	Twitter,
} from "lucide-react";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-100 dark:bg-dark-300 py-10">
			<div className="container-custom">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<motion.a
						href="#hero"
						className="text-xl font-bold flex items-center gap-2 text-primary-500"
						whileHover={{ scale: 1.05 }}
					>
						<Code size={24} />
						<span>Rayauxey's Portfolio</span>
					</motion.a>

					<div className="flex items-center gap-6">
						<a
							href="#about"
							className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
						>
							About
						</a>
						<a
							href="#projects"
							className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
						>
							Projects
						</a>
						<a
							href="#contact"
							className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
						>
							Contact
						</a>
					</div>

					<div className="flex items-center gap-4">
						{["github", "linkedin", "twitter"].map((social) => (
							<motion.a
								key={social}
								href={`https://${social}.com/${social === "linkedin" ? "in/" : ""}rayauxey`}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-full bg-white dark:bg-dark-100 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
								whileHover={{ y: -2 }}
							>
								<span className="sr-only">{social}</span>
								{social === "github" ? (
									<Github />
								) : social === "linkedin" ? (
									<Linkedin />
								) : social === "twitter" ? (
									<Twitter />
								) : (
									<Instagram />
								)}
							</motion.a>
						))}
					</div>
				</div>

				<div className="h-px bg-gray-200 dark:bg-gray-700 my-6" />

				<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
					<p>© {currentYear} Rayauxey Tech. All rights reserved.</p>

					<p className="flex items-center gap-1">
						Made with <Heart className="h-4 w-4 text-red-500" /> using React,
						Vite & Tailwind
					</p>

					<div className="flex gap-4">
						<a
							href="https://rayauxey.com"
							className="hover:text-primary-500 transition-colors"
						>
							Privacy Policy
						</a>
						<a
							href="https://rayauxey.com"
							className="hover:text-primary-500 transition-colors"
						>
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
