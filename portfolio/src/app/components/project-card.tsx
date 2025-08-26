"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import type React from "react";
import type { JSX } from "react";

export type ProjectType = {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	image: string;
	githubUrl?: string;
	liveUrl?: string;
	featured?: boolean;
	period: string;
	icon: JSX.Element;
	primary: string;
	secondary: string;
};

const ProjectCard = ({ project }: { project: ProjectType }) => {
	return (
		<motion.div
			className="group relative"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: project.id * 0.1 }}
			viewport={{ once: true }}
		>
			<motion.div
				className="relative cursor-pointer overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm"
				whileHover={{
					scale: 1.02,
					boxShadow: "0 25px 50px rgba(168, 85, 247, 0.25)",
				}}
				transition={{ duration: 0.3 }}
			>
				{/* Project Image */}
				<div className="relative h-48 w-full overflow-hidden">
					<Image
						src={project.image}
						alt={project.title}
						fill
						className="object-cover transition-transform duration-300 group-hover:scale-110"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>

					{/* Gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

					{/* Period badge */}
					<motion.div
						className="absolute top-4 right-4"
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: project.id * 0.1 + 0.2 }}
						viewport={{ once: true }}
					>
						<span
							className="rounded-full px-3 py-1 font-semibold text-sm text-white shadow-lg backdrop-blur-sm"
							style={{
								background: `linear-gradient(to right, ${project.primary}, ${project.secondary})`,
							}}
						>
							{project.period}
						</span>
					</motion.div>

					{/* Project icon */}
					<motion.div
						className="absolute top-4 left-4"
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: project.id * 0.1 + 0.3 }}
						viewport={{ once: true }}
					>
						<div
							className="rounded-full p-2 shadow-lg backdrop-blur-sm"
							style={{
								background: `linear-gradient(to right, ${project.primary}, ${project.secondary})`,
							}}
						>
							{project.icon}
						</div>
					</motion.div>

					{/* Hover overlay with quick actions */}
					<motion.div
						className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						initial={{ opacity: 0 }}
					>
						{project.githubUrl && (
							<motion.a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 rounded-lg bg-gray-800/80 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-gray-700/80"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={(e) => e.stopPropagation()}
							>
								<Github size={16} />
								Code
							</motion.a>
						)}
						{project.liveUrl && (
							<motion.a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors"
								style={{
									background: `linear-gradient(to right, ${project.primary}, ${project.secondary})`,
								}}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={(e) => e.stopPropagation()}
							>
								<ExternalLink size={16} />
								Live Demo
							</motion.a>
						)}
					</motion.div>
				</div>

				{/* Card Content */}
				<div className="p-6">
					{/* Project Title */}
					<motion.h3
						className="mb-3 font-bold text-white text-xl"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: project.id * 0.1 + 0.4 }}
						viewport={{ once: true }}
					>
						{project.title}
					</motion.h3>

					{/* Project Description */}
					<motion.p
						className="mb-4 text-gray-300 text-sm leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: project.id * 0.1 + 0.5 }}
						viewport={{ once: true }}
					>
						{project.description}
					</motion.p>

					{/* Technologies */}
					<motion.div
						className="flex flex-wrap gap-2"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: project.id * 0.1 + 0.6 }}
						viewport={{ once: true }}
					>
						{project.technologies.slice(0, 4).map((tech, index) => (
							<motion.span
								key={tech}
								className="rounded-full bg-gray-800/60 px-3 py-1 text-gray-300 text-xs backdrop-blur-sm"
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3, delay: index * 0.1 + 0.7 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
							>
								{tech}
							</motion.span>
						))}
						{project.technologies.length > 4 && (
							<motion.span
								className="rounded-full bg-gray-800/60 px-3 py-1 text-gray-400 text-xs backdrop-blur-sm"
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3, delay: 0.7 + 0.4 }}
								viewport={{ once: true }}
							>
								+{project.technologies.length - 4}
							</motion.span>
						)}
					</motion.div>
				</div>

				{/* Animated border gradient */}
				<motion.div
					className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-20"
					style={{
						background: `linear-gradient(to right, ${project.primary}, ${project.secondary})`,
					}}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 0 }}
					viewport={{ once: true }}
				/>
			</motion.div>
		</motion.div>
	);
};

export default ProjectCard;
