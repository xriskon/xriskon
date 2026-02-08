// import React from "react";

export default function SkillBadge({ icon: Icon, name, level, type }) {
	return (
		<div className="flex items-center justify-between p-3 bg-slate-800/50 rounded border border-slate-700 hover:border-emerald-500/50 transition-colors group">
			<div className="flex items-center gap-3">
				<div
					className={`p-2 rounded ${type === "dev" ? "bg-blue-500/10 text-blue-400" : "bg-orange-500/10 text-orange-400"}`}
				>
					<Icon size={18} />
				</div>
				<span className="text-slate-200 font-mono text-sm">{name}</span>
			</div>
			<div className="flex gap-1">
				{[1, 2, 3, 4, 5].map((dot) => (
					<div
						key={dot}
						className={`w-1.5 h-1.5 rounded-full ${dot <= level ? (type === "dev" ? "bg-blue-500" : "bg-orange-500") : "bg-slate-700"}`}
					/>
				))}
			</div>
		</div>
	);
}
