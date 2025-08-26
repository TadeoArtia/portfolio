"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

interface VantaBackgroundProps {
	className?: string;
}

// TypeScript declaration for VANTA
declare global {
	interface Window {
		VANTA: {
			TRUNK: (options: any) => any;
		};
		p5: any;
	}
}

export default function VantaBackground({
	className = "",
}: VantaBackgroundProps) {
	const vantaRef = useRef<HTMLDivElement>(null);
	const vantaEffect = useRef<any>(null);
	const [scriptsLoaded, setScriptsLoaded] = useState(false);

	const initVanta = useCallback(() => {
		if (vantaRef.current && window.VANTA && window.p5) {
			vantaEffect.current = window.VANTA.TRUNK({
				el: vantaRef.current,
				mouseControls: true,
				touchControls: true,
				gyroControls: false,
				scale: 1.0,
				scaleMobile: 1.0,
				color: "#119DA4",
				backgroundColor: "#1c1c1c",
			});
		}
	}, []);

	useEffect(() => {
		if (scriptsLoaded) initVanta();

		// Cleanup function
		return () => {
			if (vantaEffect.current) {
				vantaEffect.current.destroy();
				vantaEffect.current = null;
			}
		};
	}, [scriptsLoaded, initVanta]);

	return (
		<>
			<Script
				src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"
				onLoad={() => {
					if (window.VANTA) setScriptsLoaded(true);
				}}
			/>

			<Script
				src="https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.trunk.min.js"
				onLoad={() => {
					if (window.p5) setScriptsLoaded(true);
				}}
			/>

			<motion.div
				ref={vantaRef}
				className={`-z-10 absolute inset-0 left-100 flex size-full ${className}`}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
			/>
		</>
	);
}
