"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
	texts: string[];
	speed?: number;
	className?: string;
	showCursor?: boolean;
	cursorChar?: string;
	onComplete?: () => void;
}

export default function Typewriter({
	texts,
	speed = 100,
	className = "",
	showCursor = true,
	cursorChar = "|",
}: TypewriterProps) {
	const [displayText, setDisplayText] = useState("");
	const [showCursorBlink, setShowCursorBlink] = useState(true);
	const [textIndex, setTextIndex] = useState(0);

	useEffect(() => {
		let currentIndex = 0;
		setDisplayText("");

		const typeInterval = setInterval(() => {
			if (!texts[textIndex]) return;

			if (currentIndex < texts[textIndex].length) {
				setDisplayText(texts[textIndex].slice(0, currentIndex + 1));
				currentIndex++;
			} else {
				clearInterval(typeInterval);

				setTimeout(() => {
					setTextIndex((value) => (value < texts.length - 1 ? value + 1 : 0));
				}, 3000);
			}
		}, speed);

		return () => clearInterval(typeInterval);
	}, [texts, speed, textIndex]);

	// Cursor blinking effect
	useEffect(() => {
		if (!showCursor) return;

		const blinkInterval = setInterval(() => {
			setShowCursorBlink((prev) => !prev);
		}, 500);

		return () => clearInterval(blinkInterval);
	}, [showCursor]);

	return (
		<p className={className}>
			{displayText}
			{showCursor && (
				<span
					className={`inline-block transition-opacity duration-100 ${
						showCursorBlink ? "opacity-100" : "opacity-0"
					}`}
				>
					{cursorChar}
				</span>
			)}
		</p>
	);
}
