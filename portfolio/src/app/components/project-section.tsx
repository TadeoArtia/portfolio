"use client";

import { motion } from "framer-motion";
import ProjectCard from "~/app/components/project-card";
import { projects } from "~/app/landing/consts";

const ProjectsSection = () => {
	return (
		<div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6">
			{/* Main Projects Section */}
			<motion.div
				className="mb-16 text-center"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				<motion.h1
					className="mb-4 bg-gradient-to-r from-[#a855f7] via-purple-600 to-purple-800 bg-clip-text pb-3 font-bold text-6xl text-transparent"
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
				>
					Projects
				</motion.h1>
				<motion.div
					className="mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
					initial={{ width: 0 }}
					whileInView={{ width: 128 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
				/>
			</motion.div>

			{/* Projects Grid */}
			<motion.div
				className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.6 }}
				viewport={{ once: true }}
			>
				{projects.map((project) => (
					<ProjectCard project={project} key={project.id} />
				))}
			</motion.div>
		</div>
	);
};

export default ProjectsSection;
