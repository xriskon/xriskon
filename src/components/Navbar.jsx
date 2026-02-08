import { Terminal, Menu, X } from "lucide-react";

export default function Navbar({ activeSection, scrollToSection, isMobileMenuOpen, setIsMobileMenuOpen }) {
	const navLinks = [
		{ name: "System", id: "hero" },
		{ name: "Diagnostics", id: "about" },
		{ name: "Modules", id: "skills" },
		{ name: "Projects", id: "projects" },
		{ name: "Contact", id: "contact" },
	];

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center space-x-2 text-emerald-400 font-mono font-bold text-lg">
						<Terminal size={20} />
						<span>XRISKON</span>
					</div>

					<div className="hidden md:block">
						<div className="flex items-baseline space-x-4">
							{navLinks.map((link) => (
								<button
									key={link.name}
									onClick={() => scrollToSection(link.id)}
									className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 font-mono ${
										activeSection === link.id
											? "text-emerald-400 bg-emerald-400/10"
											: "text-slate-400 hover:text-white hover:bg-slate-800"
									}`}
								>
									{`./${link.name.toLowerCase()}`}
								</button>
							))}
						</div>
					</div>

					<div className="md:hidden">
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="text-slate-400 hover:text-white p-2"
						>
							{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="md:hidden bg-slate-900 border-b border-slate-800">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{navLinks.map((link) => (
							<button
								key={link.name}
								onClick={() => scrollToSection(link.id)}
								className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:text-white hover:bg-slate-800 font-mono"
							>
								{`> ${link.name}`}
							</button>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
