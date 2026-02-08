import { ExternalLink } from "lucide-react"; // <--- Critical Import!

export default function ProjectCard({ title, description, tags, type, link }) {
	return (
		<div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 group flex flex-col h-full">
			<div className="p-1 bg-slate-800 flex items-center gap-2 px-3">
				<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
				<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
				<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
				<span className="ml-auto text-xs font-mono text-slate-500">{type}</span>
			</div>
			<div className="p-6 flex-1 flex flex-col">
				<h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
					{title}
				</h3>
				<p className="text-slate-400 text-sm mb-4 leading-relaxed flex-1">{description}</p>
				<div className="flex flex-wrap gap-2 mb-6">
					{tags.map((tag) => (
						<span
							key={tag}
							className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700"
						>
							{tag}
						</span>
					))}
				</div>
				<a
					href={link}
					className="inline-flex items-center justify-center gap-2 w-full py-2 bg-slate-800 hover:bg-slate-700 text-white rounded text-sm font-medium transition-colors border border-slate-700 hover:border-slate-600"
				>
					<ExternalLink size={16} />
					View Deployment
				</a>
			</div>
		</div>
	);
}
