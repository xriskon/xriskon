import React from "react";
import Typewriter from "./Typewriter"; // <--- Critical Import!

export default function TerminalLine({ prefix = ">", text, color = "text-slate-300", delay = 0 }) {
	return (
		<div className="flex gap-3 font-mono text-sm sm:text-base">
			<span className="text-emerald-500 font-bold select-none">{prefix}</span>
			<span className={color}>
				<Typewriter text={text} delay={delay} speed={30} />
			</span>
		</div>
	);
}
