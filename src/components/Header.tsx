import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Code, Briefcase, User, Mail } from "lucide-react";

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const menuItems = [
		{ name: "Home", icon: <Code size={20} />, href: "#hero" },
		{ name: "About", icon: <User size={20} />, href: "#about" },
		{ name: "Projects", icon: <Briefcase size={20} />, href: "#projects" },
		{ name: "Contact", icon: <Mail size={20} />, href: "#contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition > 10) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const headerVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const mobileMenuVariants = {
		closed: { opacity: 0, x: "100%" },
		open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
	};

	return (
		<motion.header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-white/80 dark:bg-dark-100/80 backdrop-blur-md shadow-lg"
					: "bg-transparent"
			}`}
			initial="hidden"
			animate="visible"
			variants={headerVariants}
		>
			<div className="container-custom py-4 flex justify-between items-center">
				<motion.a
					href="#hero"
					className="text-2xl font-bold flex items-center gap-2 text-primary-500"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<Code size={28} />
					<span>Rayauxey's Portfolio</span>
				</motion.a>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-8">
					{menuItems.map((item) => (
						<motion.a
							key={item.name}
							href={item.href}
							className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 flex items-center gap-1"
							whileHover={{ y: -2 }}
							whileTap={{ y: 0 }}
						>
							{item.name}
						</motion.a>
					))}
				</nav>

				{/* Mobile Menu Button */}
				<motion.button
					className="md:hidden text-gray-700 dark:text-gray-300"
					onClick={toggleMenu}
					whileTap={{ scale: 0.9 }}
				>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</motion.button>
			</div>

			{/* Mobile Menu */}
			<motion.div
				className={`md:hidden fixed inset-0 z-40 glass-card pt-20 ${isMenuOpen ? "block" : "hidden"}`}
				variants={mobileMenuVariants}
				initial="closed"
				animate={isMenuOpen ? "open" : "closed"}
			>
				<nav className="flex flex-col space-y-6 p-8">
					{menuItems.map((item) => (
						<motion.a
							key={item.name}
							href={item.href}
							className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 flex items-center gap-3"
							onClick={() => setIsMenuOpen(false)}
							whileHover={{ x: 5 }}
							whileTap={{ scale: 0.95 }}
						>
							{item.icon}
							{item.name}
						</motion.a>
					))}
				</nav>
			</motion.div>
		</motion.header>
	);
};

export default Header;
