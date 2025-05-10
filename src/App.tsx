import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

function App() {
	const [darkMode, setDarkMode] = useState(() => {
		if (typeof window !== "undefined") {
			return (
				localStorage.getItem("theme") === "dark" ||
				(!localStorage.getItem("theme") &&
					window.matchMedia("(prefers-color-scheme: dark)").matches)
			);
		}
		return false;
	});

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<AnimatePresence mode="wait">
			<div className="flex flex-col min-h-screen">
				<Header />
				<main className="flex-grow">
					<Hero />
					<About />
					<Projects />
					<Contact />
				</main>
				<Footer />
				<ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			</div>
		</AnimatePresence>
	);
}

export default App;
