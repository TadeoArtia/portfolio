"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
	id: number;
	x: number;
	y: number;
	size: number;
	opacity: number;
	duration: number;
	delay: number;
};

const ParticleBackground = () => {
	const [particles, setParticles] = useState<Particle[]>([]);

	useEffect(() => {
		const generateParticles = () => {
			const newParticles: Particle[] = [];
			const particleCount = 300; // Adjust for density

			for (let i = 0; i < particleCount; i++) {
				newParticles.push({
					id: i,
					x: Math.random() * 100,
					y: Math.random() * 100,
					size: Math.random() * 3 + 1, // 1-4px
					opacity: Math.random() * 0.7, // 0.1-0.4 opacity
					duration: Math.random() * 20 + 10, // 10-30 seconds
					delay: Math.random() * 5, // 0-5 seconds delay
				});
			}

			setParticles(newParticles);
		};

		generateParticles();
	}, []);

	return (
		<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
			{particles.map((particle) => (
				<motion.div
					key={particle.id}
					className="absolute rounded-full bg-white"
					style={{
						left: `${particle.x}%`,
						top: `${particle.y}%`,
						width: `${particle.size}px`,
						height: `${particle.size}px`,
						opacity: particle.opacity,
					}}
					animate={{
						x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
						y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
						opacity: [
							particle.opacity,
							particle.opacity * 0.5,
							particle.opacity,
							particle.opacity * 0.3,
							particle.opacity,
						],
					}}
					transition={{
						duration: particle.duration,
						delay: particle.delay,
						repeat: Number.POSITIVE_INFINITY,
						ease: "linear",
					}}
				/>
			))}
		</div>
	);
};

export default ParticleBackground;
