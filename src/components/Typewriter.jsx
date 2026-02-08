import React, { useState, useEffect } from "react";

export default function Typewriter({ text, speed = 50, delay = 0 }) {
	const [displayedText, setDisplayedText] = useState("");
	const [started, setStarted] = useState(false);

	useEffect(() => {
		const startTimeout = setTimeout(() => {
			setStarted(true);
		}, delay);
		return () => clearTimeout(startTimeout);
	}, [delay]);

	useEffect(() => {
		if (!started) return;

		const interval = setInterval(() => {
			setDisplayedText((prev) => {
				if (prev.length < text.length) {
					return prev + text.charAt(prev.length);
				}
				clearInterval(interval);
				return prev;
			});
		}, speed);

		return () => clearInterval(interval);
	}, [text, speed, started]);

	return <span>{displayedText}</span>;
}
