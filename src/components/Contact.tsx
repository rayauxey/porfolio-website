import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	Send,
	MapPin,
	Phone,
	Mail,
	Clock,
	Github,
	Linkedin,
	Twitter,
	Instagram,
	Building,
} from "lucide-react";

const Contact: React.FC = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [formState, setFormState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitMessage, setSubmitMessage] = useState("");

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

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitMessage("Your message has been sent. Thank you!");
			setFormState({
				name: "",
				email: "",
				subject: "",
				message: "",
			});

			setTimeout(() => {
				setSubmitMessage("");
			}, 5000);
		}, 1500);
	};

	const contactInfo = [
		{
			icon: <MapPin className="w-5 h-5 text-primary-500" />,
			label: "Location",
			value: "Nairobi, Kenya",
		},
		{
			icon: <Building className="w-5 h-5 text-primary-500" />,
			label: "Workplace",
			value: "Simplepay Capital Limited",
		},
		{
			icon: <Mail className="w-5 h-5 text-primary-500" />,
			label: "Email",
			value: "rayauxey@gmail.com",
		},
		{
			icon: <Phone className="w-5 h-5 text-primary-500" />,
			label: "Phone",
			value: "+254 724 600 173",
		},
		{
			icon: <Clock className="w-5 h-5 text-primary-500" />,
			label: "Working Hours",
			value: "Mon - Fri: 9am - 5pm",
		},
	];

	return (
		<section
			id="contact"
			className="py-20 bg-gray-50 dark:bg-dark-300"
			ref={ref}
		>
			<div className="container-custom">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				>
					<motion.div variants={itemVariants} className="text-center mb-16">
						<span className="inline-block px-3 py-1 text-sm font-semibold bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full mb-4 mr-4">
							Get in Touch
						</span>
						<h2 className="section-heading mx-auto">Contact Me</h2>
						<p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
							Have a project in mind or just want to chat? Feel free to reach
							out and I'll get back to you as soon as possible.
						</p>
					</motion.div>

					<motion.div
						variants={itemVariants}
						className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto"
					>
						<div className="md:col-span-2 space-y-6">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
								Contact Information
							</h3>

							{contactInfo.map((item) => (
								<div key={item.value} className="flex items-start gap-3">
									<div className="mt-1">{item.icon}</div>
									<div>
										<h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
											{item.label}
										</h4>
										<p className="text-gray-800 dark:text-gray-200">
											{item.value}
										</p>
									</div>
								</div>
							))}

							<div className="pt-4 mt-6 border-t border-gray-200 dark:border-gray-700">
								<h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
									Follow Me
								</h4>
								<div className="flex gap-3">
									{["github", "linkedin", "twitter", "instagram"].map(
										(social) => (
											<motion.a
												key={social}
												href={`https://${social}.com/rayauxey`}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
												whileHover={{ y: -3 }}
												whileTap={{ scale: 0.9 }}
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
										),
									)}
								</div>
							</div>
						</div>

						<div className="md:col-span-3 bg-white dark:bg-dark-100 rounded-xl shadow-sm p-6">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
								Send a Message
							</h3>

							<form onSubmit={handleSubmit} className="space-y-4">
								<div className="grid md:grid-cols-2 gap-4">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
										>
											Your Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formState.name}
											onChange={handleChange}
											required
											className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-200 text-gray-900 dark:text-gray-100"
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
										>
											Your Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formState.email}
											onChange={handleChange}
											required
											className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-200 text-gray-900 dark:text-gray-100"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="subject"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
									>
										Subject
									</label>
									<input
										type="text"
										id="subject"
										name="subject"
										value={formState.subject}
										onChange={handleChange}
										required
										className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-200 text-gray-900 dark:text-gray-100"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										rows={4}
										value={formState.message}
										onChange={handleChange}
										required
										className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-200 text-gray-900 dark:text-gray-100"
									/>
								</div>

								<div>
									<motion.button
										type="submit"
										className="btn-primary w-full flex items-center justify-center gap-2"
										disabled={isSubmitting}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										{isSubmitting ? (
											<>
												<svg
													className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
												>
													<title>Loading...</title>
													<circle
														className="opacity-25"
														cx="12"
														cy="12"
														r="10"
														stroke="currentColor"
														strokeWidth="4"
													/>
													<path
														className="opacity-75"
														fill="currentColor"
														d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
													/>
												</svg>
												Sending...
											</>
										) : (
											<>
												Send Message <Send size={16} />
											</>
										)}
									</motion.button>

									{submitMessage && (
										<motion.p
											className="mt-3 text-center text-green-600 dark:text-green-400"
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
										>
											{submitMessage}
										</motion.p>
									)}
								</div>
							</form>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
