import React, { useState, useEffect } from "react";
import {
	Terminal,
	Code,
	Server,
	Cpu,
	Wifi,
	Monitor,
	CheckCircle,
	AlertCircle,
	MessageSquare,
	Github,
	Linkedin,
	Mail,
	ExternalLink,
	Menu,
	X,
	Database,
	Globe,
} from "lucide-react";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import SkillBadge from "./components/SkillBadge";
import TerminalLine from "./components/TerminalLine";

export default function App() {
	const [activeSection, setActiveSection] = useState("hero");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [uptime, setUptime] = useState(0);
	const [showHeroContent, setShowHeroContent] = useState(false);

	// Uptime counter effect
	useEffect(() => {
		const interval = setInterval(() => {
			setUptime((prev) => prev + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	// Show hero content after typewriter delay
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowHeroContent(true);
		}, 2500);
		return () => clearTimeout(timer);
	}, []);

	const formatUptime = (seconds) => {
		const h = Math.floor(seconds / 3600);
		const m = Math.floor((seconds % 3600) / 60);
		const s = seconds % 60;
		return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
	};

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setActiveSection(id);
			setIsMobileMenuOpen(false);
		}
	};

	// Scroll spy effect
	useEffect(() => {
		const handleScroll = () => {
			const sections = ["hero", "about", "skills", "projects", "contact"];
			const scrollPosition = window.scrollY + 100;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (
					element &&
					element.offsetTop <= scrollPosition &&
					element.offsetTop + element.offsetHeight > scrollPosition
				) {
					setActiveSection(section);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-emerald-500/30 selection:text-emerald-200">
			<Navbar
				activeSection={activeSection}
				scrollToSection={scrollToSection}
				isMobileMenuOpen={isMobileMenuOpen}
				setIsMobileMenuOpen={setIsMobileMenuOpen}
			/>
			{/* Hero Section */}
			<section
				id="hero"
				className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden"
			>
				{/* Background Grid */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

				<div className="max-w-4xl w-full z-10">
					<div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl overflow-hidden">
						{/* Terminal Header */}
						<div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
							<div className="flex gap-2">
								<div className="w-3 h-3 rounded-full bg-red-500"></div>
								<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
								<div className="w-3 h-3 rounded-full bg-green-500"></div>
							</div>
							<div className="text-xs font-mono text-slate-400">xriskon@portfolio:~</div>
							<div className="w-10"></div>
						</div>

						{/* Terminal Body */}
						<div className="p-6 sm:p-10 space-y-4 min-h-[400px]">
							<TerminalLine text="Initializing system..." delay={0} />
							<TerminalLine text="Loading profile configuration..." delay={800} />
							<TerminalLine text="Status: ONLINE [200 OK]" color="text-emerald-400" delay={1800} />
							<div className="h-4"></div>

							<div
								className={`transition-opacity duration-1000 ${showHeroContent ? "opacity-100" : "opacity-0"}`}
							>
								<h1 className="text-4xl sm:text-6xl font-bold text-white mb-2 tracking-tight">
									Hello, I'm <span className="text-emerald-400">Christos</span>.
								</h1>
								<h2 className="text-xl sm:text-2xl text-slate-400 font-light mb-8">
									IT Support Specialist &{" "}
									<span className="text-blue-400 font-mono">&lt;WebDeveloper /&gt;</span>
								</h2>

								<p className="text-slate-400 max-w-2xl text-lg mb-8 leading-relaxed">
									I bridge the gap between hardware and software. By day, I resolve complex system
									issues and manage infrastructure. By night, I build responsive, modern web
									applications.
								</p>

								<div className="flex flex-wrap gap-4">
									<button
										onClick={() => scrollToSection("projects")}
										className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold rounded flex items-center gap-2 transition-all"
									>
										<Code size={20} />
										View Projects
									</button>
									<button
										onClick={() => scrollToSection("contact")}
										className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded flex items-center gap-2 transition-all font-mono"
									>
										<MessageSquare size={20} />
										Submit Ticket
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* About / Diagnostics Section */}
			<section id="about" className="py-20 px-4 bg-slate-900/50">
				<div className="max-w-6xl mx-auto">
					<div className="flex items-center gap-3 mb-12">
						<Monitor className="text-emerald-400" size={32} />
						<h2 className="text-3xl font-bold text-white">System Diagnostics</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-emerald-500">
								<h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
									<CheckCircle size={20} className="text-emerald-400" />
									Troubleshooter Mindset
								</h3>
								<p className="text-slate-400">
									Years of IT Helpdesk experience have trained me to break down complex problems
									efficiently. I apply this same logic to debugging code and optimizing web
									performance.
								</p>
							</div>

							<div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-blue-500">
								<h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
									<Code size={20} className="text-blue-400" />
									Full Stack Capable
								</h3>
								<p className="text-slate-400">
									While I know my way around Active Directory and TCP/IP, my passion lies in React,
									Node.js, and crafting intuitive user interfaces.
								</p>
							</div>
						</div>

						<div className="bg-slate-950 p-6 rounded-lg border border-slate-800 font-mono text-sm shadow-xl">
							<div className="flex justify-between text-slate-500 mb-4 border-b border-slate-800 pb-2">
								<span>STATS_MONITOR.exe</span>
								<span>PID: 1337</span>
							</div>
							<div className="space-y-4">
								<div>
									<div className="flex justify-between mb-1">
										<span className="text-emerald-400">Current Status</span>
										<span className="text-white">Active</span>
									</div>
									<div className="w-full bg-slate-800 h-2 rounded-full">
										<div className="bg-emerald-500 h-2 rounded-full w-full animate-pulse"></div>
									</div>
								</div>

								<div>
									<div className="flex justify-between mb-1">
										<span className="text-blue-400">Uptime Session</span>
										<span className="text-white">{formatUptime(uptime)}</span>
									</div>
									<div className="w-full bg-slate-800 h-2 rounded-full">
										<div className="bg-blue-500 h-2 rounded-full w-[85%]"></div>
									</div>
								</div>

								<div>
									<div className="flex justify-between mb-1">
										<span className="text-orange-400">Ticket Resolution</span>
										<span className="text-white">99.9%</span>
									</div>
									<div className="w-full bg-slate-800 h-2 rounded-full">
										<div className="bg-orange-500 h-2 rounded-full w-[99%]"></div>
									</div>
								</div>

								<div>
									<div className="flex justify-between mb-1">
										<span className="text-purple-400">Coffee Intake</span>
										<span className="text-white">Critical Levels</span>
									</div>
									<div className="w-full bg-slate-800 h-2 rounded-full">
										<div className="bg-purple-500 h-2 rounded-full w-[90%]"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Skills / Modules Section */}
			<section id="skills" className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="flex items-center gap-3 mb-12">
						<Cpu className="text-emerald-400" size={32} />
						<h2 className="text-3xl font-bold text-white">Installed Modules</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{/* IT Skills */}
						<div>
							<h3 className="text-xl font-mono text-orange-400 mb-6 flex items-center gap-2 border-b border-slate-800 pb-2">
								<Server size={20} />
								SYSTEM_ADMIN
							</h3>
							<div className="grid gap-4">
								<SkillBadge icon={Monitor} name="Hardware Support" level={5} type="it" />
								<SkillBadge icon={Wifi} name="Network / TCP/IP" level={4} type="it" />
								<SkillBadge icon={Server} name="Active Directory" level={4} type="it" />
								<SkillBadge icon={CheckCircle} name="Office 365 Admin" level={5} type="it" />
								<SkillBadge icon={Terminal} name="PowerShell Scripting" level={3} type="it" />
							</div>
						</div>

						{/* Dev Skills */}
						<div>
							<h3 className="text-xl font-mono text-blue-400 mb-6 flex items-center gap-2 border-b border-slate-800 pb-2">
								<Code size={20} />
								WEB_DEVELOPMENT
							</h3>
							<div className="grid gap-4">
								<SkillBadge icon={Code} name="React.js" level={4} type="dev" />
								<SkillBadge icon={Globe} name="HTML5 / CSS3" level={5} type="dev" />
								<SkillBadge icon={Database} name="Python" level={3} type="dev" />
								<SkillBadge icon={Terminal} name="Git / Version Control" level={4} type="dev" />
								<SkillBadge icon={Monitor} name="Tailwind CSS" level={5} type="dev" />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Projects Section */}
			<section id="projects" className="py-20 px-4 bg-slate-900/50">
				<div className="max-w-6xl mx-auto">
					<div className="flex items-center gap-3 mb-12">
						<Database className="text-emerald-400" size={32} />
						<h2 className="text-3xl font-bold text-white">Project Log</h2>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<ProjectCard
							title="Ticket Tracker"
							description="A custom issue tracking dashboard inspired by Jira but simplified for small IT teams. Built with React and Firebase."
							tags={["React", "Firebase", "Tailwind"]}
							type="Web App"
							link="#"
						/>
						<ProjectCard
							title="Network Monitor UI"
							description="A visual dashboard for monitoring server uptime and status using mock data visualization libraries."
							tags={["React", "Recharts", "API Integration"]}
							type="Dashboard"
							link="#"
						/>
						<ProjectCard
							title="Inventory Manager"
							description="Python script converted to a web interface for tracking office hardware assets and assignments."
							tags={["Python", "Flask", "HTML/CSS"]}
							type="Tool"
							link="#"
						/>
					</div>
				</div>
			</section>
			{/* Contact Section */}
			<section id="contact" className="py-20 px-4">
				<div className="max-w-4xl mx-auto">
					<div className="flex items-center gap-3 mb-12">
						<MessageSquare className="text-emerald-400" size={32} />
						<h2 className="text-3xl font-bold text-white">Submit Ticket</h2>
					</div>

					<div className="bg-slate-900 border border-slate-800 rounded-lg p-6 sm:p-10 shadow-2xl relative overflow-hidden">
						{/* Decorative top bar */}
						<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"></div>

						<div className="grid md:grid-cols-3 gap-10">
							<div className="md:col-span-1 space-y-6">
								<p className="text-slate-400 text-sm">
									Have a project idea or need technical assistance? Create a new ticket below and I'll
									respond within 24 hours.
								</p>

								<div className="space-y-4 pt-4">
									<a
										href="#"
										className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors"
									>
										<Mail size={18} />
										<span>contact@xriskon.com</span>
									</a>
									<a
										href="#"
										className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors"
									>
										<Linkedin size={18} />
										<span>/in/xriskon</span>
									</a>
									<a
										href="#"
										className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors"
									>
										<Github size={18} />
										<span>github.com/xriskon</span>
									</a>
								</div>
							</div>

							<div className="md:col-span-2">
								<form className="space-y-4">
									<div className="grid grid-cols-2 gap-4">
										<div>
											<label className="block text-xs font-mono text-slate-500 mb-1">
												USER_ID (Name)
											</label>
											<input
												type="text"
												className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
												placeholder="John Doe"
											/>
										</div>
										<div>
											<label className="block text-xs font-mono text-slate-500 mb-1">
												CONTACT_POINT (Email)
											</label>
											<input
												type="email"
												className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
												placeholder="john@example.com"
											/>
										</div>
									</div>

									<div>
										<label className="block text-xs font-mono text-slate-500 mb-1">
											PRIORITY_LEVEL
										</label>
										<select className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all">
											<option>Low - General Inquiry</option>
											<option>Medium - Project Proposal</option>
											<option>High - Immediate Hiring</option>
										</select>
									</div>

									<div>
										<label className="block text-xs font-mono text-slate-500 mb-1">
											ISSUE_DESCRIPTION (Message)
										</label>
										<textarea
											rows="4"
											className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
											placeholder="Describe your request..."
										></textarea>
									</div>

									<button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded transition-colors flex items-center justify-center gap-2">
										<CheckCircle size={18} />
										Create Ticket
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Footer */}
			<footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-600 text-sm font-mono">
				<p>&copy; 2026 Christos Konstantopoulos. All systems operational.</p>
				<p className="mt-2 text-xs">Built with React, Tailwind CSS and love.</p>
			</footer>
		</div>
	);
}
